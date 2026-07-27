"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

const serviceOptions = services.map((s) => s.title);

export function ConsultationForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function toggleService(service: string) {
    setSelectedServices((cur) =>
      cur.includes(service) ? cur.filter((s) => s !== service) : [...cur, service]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    setFieldErrors({});
    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      country: String(form.get("country") || ""),
      industry: String(form.get("industry") || ""),
      employeeCount: String(form.get("employeeCount") || ""),
      businessStage: String(form.get("businessStage") || ""),
      servicesRequired: selectedServices,
      currentChallenges: String(form.get("currentChallenges") || ""),
      timeline: String(form.get("timeline") || ""),
      message: String(form.get("message") || ""),
      source: "consultation-page",
      website: String(form.get("website") || ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setErrorMsg(data.error || "Please check the form and try again.");
        if (data.issues?.fieldErrors) {
          const flat: Record<string, string> = {};
          for (const [key, val] of Object.entries(data.issues.fieldErrors)) {
            if (Array.isArray(val) && val[0]) flat[key] = val[0] as string;
          }
          setFieldErrors(flat);
        }
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
      <div className="rounded-card border border-blue-200 bg-blue-50 p-12 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-blue-500" />
        <h2 className="mt-5 text-2xl font-bold text-navy-900">Thanks, {`we've received your request`}.</h2>
        <p className="mx-auto mt-3 max-w-md text-neutral-600">
          A member of the Vighnex team will review your business details and reach out to schedule
          your free IT consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-neutral-200 bg-white p-8 md:p-10">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required error={fieldErrors.name} />
        <Field label="Company Name" name="company" required error={fieldErrors.company} />
        <Field label="Business Email" name="email" type="email" required error={fieldErrors.email} />
        <Field label="Phone" name="phone" type="tel" required error={fieldErrors.phone} />
        <Field label="Country" name="country" required error={fieldErrors.country} />
        <Field label="Industry" name="industry" />
        <Field label="Number of Employees" name="employeeCount" />
        <div>
          <label htmlFor="businessStage" className="block text-sm font-medium text-navy-900">
            New or Existing Business
          </label>
          <select
            id="businessStage"
            name="businessStage"
            className="focus-ring mt-1.5 w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-navy-900"
          >
            <option value="new">New Business</option>
            <option value="existing">Existing Business</option>
          </select>
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-navy-900">Services Required</legend>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 has-[:checked]:border-blue-400 has-[:checked]:bg-blue-50"
            >
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
                className="accent-blue-500"
              />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <TextArea label="Current IT Challenges" name="currentChallenges" />
        <Field label="Expected Timeline" name="timeline" />
      </div>

      <div className="mt-6">
        <TextArea label="Additional Message" name="message" rows={4} />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-8 inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Get Free IT Consultation"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-900">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="focus-ring mt-1.5 w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-navy-900"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function TextArea({ label, name, rows = 3 }: { label: string; name: string; rows?: number }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-900">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className="focus-ring mt-1.5 w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-navy-900"
      />
    </div>
  );
}
