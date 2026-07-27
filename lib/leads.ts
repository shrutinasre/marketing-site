import { z } from "zod";

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
 * Swap this implementation to connect to a CRM, email service,
 * database, or webhook without changing any form component.
 */
export async function submitLead(lead: LeadInput): Promise<{ success: boolean }> {
  // Placeholder: log server-side only. Replace with CRM/webhook/database call.
  console.log("[vighnex] new lead received", {
    ...lead,
    // never log full contact details in production without consent/compliance review
  });
  return { success: true };
}
