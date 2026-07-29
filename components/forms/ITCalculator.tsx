"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const stages = ["Starting New", "Already Operating", "Growing Rapidly"];
const needsOptions = [
  "Professional Email",
  "Business Systems",
  "Cloud Hosting",
  "Database",
  "Storage",
  "Website",
  "Security",
  "Backup",
  "Employee IT Management",
  "Managed Support",
];

export function ITCalculator() {
  const [employees, setEmployees] = useState(10);
  const [stage, setStage] = useState(stages[0]);
  const [needs, setNeeds] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleNeed(need: string) {
    setNeeds((cur) => (cur.includes(need) ? cur.filter((n) => n !== need) : [...cur, need]));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      country: String(form.get("country") || ""),
      employeeCount: String(employees),
      businessStage: stage,
      servicesRequired: needs,
      source: "it-calculator",
      website: String(form.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-blue-200 bg-blue-50 p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-blue-500" />
        <h3 className="mt-4 text-xl font-bold text-navy-900">Thanks — we&apos;ve got it.</h3>
        <p className="mt-2 text-sm text-neutral-600">
          Based on your requirements, we&apos;ll prepare a tailored infrastructure plan and
          quotation, and reach out shortly.
        </p>
      </div>
    );
  }

  if (showContactForm) {
    return (
      <form
        onSubmit={handleSubmit}
        className="rounded-card border border-neutral-200 bg-white p-8"
        noValidate
      >
        <h3 className="text-xl font-bold text-navy-900">Get Your Personalized IT Infrastructure Plan</h3>
        <p className="mt-1 text-sm text-neutral-600">
          Based on your requirements, we&apos;ll prepare a tailored infrastructure plan and quotation.
        </p>

        {/* honeypot field, hidden from real users */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" name="name" required />
          <Field label="Company" name="company" required />
          <Field label="Business Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" required />
          <Field label="Country" name="country" required className="sm:col-span-2" />
        </div>

        {status === "error" && (
          <p role="alert" className="mt-4 text-sm text-red-600">
            {errorMsg}
          </p>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="focus-ring inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400 disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting…" : "Get Your Personalized IT Infrastructure Plan"}
          </button>
          <button
            type="button"
            onClick={() => setShowContactForm(false)}
            className="focus-ring text-sm font-semibold text-neutral-500 hover:text-navy-900"
          >
            Back
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="rounded-card border border-neutral-200 bg-white p-8">
      <div>
        <label htmlFor="employees" className="block text-sm font-semibold text-navy-900">
          How many employees? <span className="text-blue-500">{employees}{employees >= 250 ? "+" : ""}</span>
        </label>
        <input
          id="employees"
          type="range"
          min={1}
          max={250}
          value={employees}
          onChange={(e) => setEmployees(Number(e.target.value))}
          className="mt-3 w-full accent-blue-500"
        />
        <div className="mt-1 flex justify-between text-xs text-neutral-400">
          <span>1</span>
          <span>250+</span>
        </div>
      </div>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-navy-900">Business Stage</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {stages.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStage(s)}
              aria-pressed={stage === s}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                stage === s
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-neutral-200 text-neutral-600 hover:border-blue-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-navy-900">What do you need?</legend>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {needsOptions.map((need) => (
            <label
              key={need}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 has-[:checked]:border-blue-400 has-[:checked]:bg-blue-50"
            >
              <input
                type="checkbox"
                checked={needs.includes(need)}
                onChange={() => toggleNeed(need)}
                className="accent-blue-500"
              />
              {need}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="button"
        onClick={() => setShowContactForm(true)}
        className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400"
      >
        Get Your Personalized IT Infrastructure Plan
      </button>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-navy-900">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="focus-ring mt-1.5 w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-neutral-400"
      />
    </div>
  );
}
