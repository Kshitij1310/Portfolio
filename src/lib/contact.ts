import { z } from "zod";

/**
 * Validation schema for the contact form.
 * `website` is a honeypot field — real users never see or fill it, so any
 * value there flags a bot submission.
 */
export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z.string().trim().max(100, "Company name is too long").optional(),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/**
 * EmailJS configuration, read from Vite env vars. Set these in a `.env`
 * file (see `.env.example`). Kept here so the form component stays clean and
 * the credentials live in one place.
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};

/** True only when all three EmailJS credentials are present. */
export const isEmailjsConfigured = Boolean(
  emailjsConfig.serviceId &&
    emailjsConfig.templateId &&
    emailjsConfig.publicKey
);
