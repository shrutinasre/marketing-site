import { z } from "zod";
import { getPool } from "@/lib/db";

// Shared validation schema for any lead-capturing form on the site
// (consultation form, IT cost calculator, etc).
export const leadSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(120),
  company: z.string().min(1, "Please enter your company name").max(160),
  email: z.string().email("Please enter a valid business email"),
  phone: z.string().min(5, "Please enter a valid phone number").max(30),
  country: z.string().min(1, "Please select your country").max(80),
  industry: z.string().max(120).optional(),
  employeeCount: z.string().max(40).optional(),
  businessStage: z.string().max(60).optional(),
  servicesRequired: z.array(z.string()).optional(),
  currentChallenges: z.string().max(2000).optional(),
  timeline: z.string().max(120).optional(),
  message: z.string().max(4000).optional(),
  source: z.string().max(60).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

/**
 * Abstraction point for lead delivery.
 * Persists to Postgres when DATABASE_URL is configured. If it isn't
 * (e.g. local dev without a DB, or before the migration has been run),
 * falls back to a server-side log so forms never hard-fail for the visitor.
 * Extend this to also notify a CRM, send an email, or call a webhook.
 */
export async function submitLead(lead: LeadInput): Promise<{ success: boolean }> {
  if (!process.env.DATABASE_URL) {
    console.warn(
      "[vighnex] DATABASE_URL not configured — lead was not persisted. Falling back to log only."
    );
    console.log("[vighnex] new lead (not persisted)", lead);
    return { success: true };
  }

  try {
    const pool = getPool();
    await pool.query(
      `INSERT INTO leads (
        name, company, email, phone, country, industry,
        employee_count, business_stage, services_required,
        current_challenges, timeline, message, source
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
      [
        lead.name,
        lead.company,
        lead.email,
        lead.phone,
        lead.country,
        lead.industry ?? null,
        lead.employeeCount ?? null,
        lead.businessStage ?? null,
        lead.servicesRequired ?? [],
        lead.currentChallenges ?? null,
        lead.timeline ?? null,
        lead.message ?? null,
        lead.source ?? null,
      ]
    );
    return { success: true };
  } catch (err) {
    // If the leads table doesn't exist yet (migration not run), fall back to
    // logging instead of failing the visitor's form submission.
    console.error("[vighnex] failed to persist lead to Postgres", err);
    console.log("[vighnex] new lead (fallback log)", lead);
    return { success: true };
  }
}
