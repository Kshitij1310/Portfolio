import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Journey"
        title="Experience"
        subtitle="Where I'm building, shipping, and growing."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-6"
      >
        {experience.map((item) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            variants={fadeUp}
            className="grid gap-6 rounded-3xl glass p-6 sm:p-8 lg:grid-cols-[18rem_1fr]"
          >
            {/* Left rail: role + company */}
            <div className="lg:border-r lg:border-white/10 lg:pr-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                <Briefcase className="h-3.5 w-3.5" />
                {item.period}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {item.role}
              </h3>
              <p className="mt-1 text-lg font-semibold text-gradient">
                {item.company}
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4" /> {item.location}
              </p>
            </div>

            {/* Right: achievements in a dense two-column grid */}
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {item.achievements.map((a, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
