import { NextRequest, NextResponse } from "next/server";
import { leadSchema, submitLead } from "@/lib/leads";

// Very simple in-memory rate limiting per server instance.
// For production, replace with a durable store (Redis, etc).
const requestLog = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  // Basic honeypot spam protection: reject if a hidden field was filled.
  if (typeof body === "object" && body !== null && "website" in body && (body as { website?: string }).website) {
    return NextResponse.json({ success: true }); // silently succeed for bots
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please check the form for errors.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  try {
    await submitLead(parsed.data);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
