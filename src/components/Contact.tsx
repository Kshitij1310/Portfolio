import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { socials } from "../data/portfolio";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";

type IconComponent = (props: { className?: string }) => React.ReactNode;

interface Channel {
  label: string;
  value: string;
  href: string;
  Icon: IconComponent;
  external?: boolean;
}

const channels: Channel[] = [
  {
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: socials.phone,
    href: socials.phoneHref,
    Icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: socials.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "See my code",
    href: socials.github,
    Icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="I'm actively open to Software Engineer, Backend Developer, and Full-Stack opportunities. Have a role or project in mind? Drop me a message and I'll reply soon."
      />

      <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: contact channels */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <motion.p variants={fadeUp} className="text-slate-400">
            Prefer a direct line? Reach me through any of these — I'm quick to
            respond.
          </motion.p>

          {channels.map(({ label, value, href, Icon, external }) => (
            <motion.a
              key={label}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display font-semibold text-white">
                  {label}
                </span>
                <span className="block truncate text-sm text-slate-400">
                  {value}
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Right: contact form */}
        <ContactForm />
      </div>
    </section>
  );
}
