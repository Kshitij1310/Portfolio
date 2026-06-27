import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";
import { about } from "../data/portfolio";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="About"
        title="Who I Am"
        subtitle="A quick look at my background, education, and what I'm aiming for."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 lg:grid-cols-3"
      >
        {/* Summary — spans two columns on desktop */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl glass p-6 lg:col-span-2"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
              <User className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-white">
              Professional Summary
            </h3>
          </div>
          <p className="leading-relaxed text-slate-300">{about.summary}</p>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
            <div>
              <p className="text-sm font-semibold text-white">Career Objective</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {about.objective}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={fadeUp} className="rounded-2xl glass p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-white">
              Education
            </h3>
          </div>

          <ol className="space-y-5">
            {about.education.map((edu) => (
              <li
                key={edu.degree}
                className="relative border-l border-white/10 pl-4"
              >
                <span className="absolute left-0 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400" />
                <p className="text-sm font-semibold leading-snug text-white">
                  {edu.degree}
                </p>
                <p className="mt-0.5 text-sm text-slate-400">{edu.school}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 text-xs text-slate-500">
                  <span>{edu.period}</span>
                  <span className="font-medium text-indigo-300">
                    {edu.detail}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </motion.div>
    </section>
  );
}
