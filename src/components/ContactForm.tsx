import { forwardRef, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  contactSchema,
  emailjsConfig,
  isEmailjsConfigured,
  type ContactFormValues,
} from "../lib/contact";
import { socials } from "../data/portfolio";
import { fadeUp, viewportOnce } from "../lib/motion";

/** Block identical re-sends within this window (ms) to stop double submits. */
const DUPLICATE_WINDOW_MS = 60_000;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const lastSubmit = useRef<{ hash: string; at: number } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    // 1. Honeypot — silently drop bot submissions.
    if (values.website) {
      setSent(true);
      reset();
      return;
    }

    // 2. Duplicate guard — ignore the same message sent moments ago.
    const hash = `${values.email}|${values.subject}|${values.message}`;
    const prev = lastSubmit.current;
    if (prev && prev.hash === hash && Date.now() - prev.at < DUPLICATE_WINDOW_MS) {
      toast.info("You've already sent this message — I'll be in touch soon!");
      return;
    }

    // 3. Guard against missing EmailJS credentials.
    if (!isEmailjsConfigured) {
      toast.error(`Email isn't configured yet. Please reach me at ${socials.email}`);
      return;
    }

    try {
      // Param names match the EmailJS "Contact Us" template:
      // {{name}}, {{email}}, {{title}}, {{message}}, {{time}}.
      // Company (optional) is folded into the message body so it shows up
      // without needing an extra template variable.
      const companyLine = values.company ? `Company: ${values.company}\n\n` : "";
      await emailjs.send(
        emailjsConfig.serviceId!,
        emailjsConfig.templateId!,
        {
          name: values.fullName,
          email: values.email,
          title: values.subject,
          message: `${companyLine}${values.message}`,
          time: new Date().toLocaleString(),
        },
        { publicKey: emailjsConfig.publicKey! }
      );

      lastSubmit.current = { hash, at: Date.now() };
      setSent(true);
      reset();
      toast.success("Thank you! Your message has been sent successfully.");
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error(
        "Something went wrong while sending. Please try again or email me directly."
      );
    }
  };

  if (sent) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex h-full min-h-[24rem] flex-col items-center justify-center gap-4 rounded-3xl glass p-8 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="font-display text-xl font-bold text-white">Message sent!</h3>
        <p className="max-w-sm text-sm text-slate-400">
          Thanks for reaching out — I'll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative rounded-3xl glass p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          required
          error={errors.fullName?.message}
          autoComplete="name"
          placeholder="Jane Doe"
          {...register("fullName")}
        />
        <Field
          label="Email Address"
          required
          type="email"
          error={errors.email?.message}
          autoComplete="email"
          placeholder="jane@company.com"
          {...register("email")}
        />
        <Field
          label="Company Name"
          error={errors.company?.message}
          autoComplete="organization"
          placeholder="Optional"
          {...register("company")}
        />
        <Field
          label="Subject"
          required
          error={errors.subject?.message}
          placeholder="Full-Stack role at…"
          {...register("subject")}
        />
      </div>

      <div className="mt-5">
        <FieldShell
          label="Message"
          required
          htmlFor="message"
          error={errors.message?.message}
        >
          <textarea
            id="message"
            rows={5}
            aria-invalid={!!errors.message}
            placeholder="Tell me a little about the opportunity…"
            className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-indigo-400/60 focus:bg-white/[0.07]"
            {...register("message")}
          />
        </FieldShell>
      </div>

      {/* Honeypot: visually hidden, ignored by humans, catches bots. */}
      <div className="absolute left-[-9999px] top-0" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Message
          </>
        )}
      </button>
    </motion.form>
  );
}

/* ------------------------------------------------------------------ */
/* Reusable field primitives                                           */
/* ------------------------------------------------------------------ */

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  required?: boolean;
};

/** Labelled text input with inline validation message. */
const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, error, required, name, ...input },
  ref
) {
  const id = `field-${name ?? label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <FieldShell label={label} required={required} htmlFor={id} error={error}>
      <input
        id={id}
        ref={ref}
        name={name}
        aria-invalid={!!error}
        {...input}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-indigo-400/60 focus:bg-white/[0.07]"
      />
    </FieldShell>
  );
});

/** Shared label + error wrapper used by both inputs and the textarea. */
function FieldShell({
  label,
  required,
  htmlFor,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-slate-300"
      >
        {label}
        {required && <span className="ml-0.5 text-indigo-400">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}
