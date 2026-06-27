import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, Cloud, Eye, FileText } from "lucide-react";
import { certificate, resume } from "../data/portfolio";
import { fadeUp, viewportOnce } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function ResumeCard() {
  const [thumbOk, setThumbOk] = useState(true);

  return (
    <section id="resume" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Resume"
        title="My Resume"
        subtitle="A quick snapshot of my experience — open my resume or internship certificate in a new tab."
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl glass p-6 sm:flex-row sm:p-8"
      >
        {/* Thumbnail preview */}
        <a
          href={resume.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume in a new tab"
          className="group relative w-40 shrink-0"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-black/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-indigo-500/20">
            {thumbOk ? (
              <img
                src="/resume-thumb.png"
                alt="Resume preview"
                onError={() => setThumbOk(false)}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <FauxResumePage />
            )}
          </div>
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <Eye className="h-7 w-7 text-white" />
          </span>
        </a>

        {/* Details + actions */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-display text-xl font-bold text-white">
            Shitij Yadav — Resume
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Frontend Developer · React · TypeScript
          </p>

          <dl className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:justify-start">
            <div className="flex items-center gap-2 text-slate-300">
              <FileText className="h-4 w-4 text-indigo-400" />
              <dt className="sr-only">Format</dt>
              <dd>{resume.format}</dd>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Cloud className="h-4 w-4 text-indigo-400" />
              <dt className="sr-only">Hosted on</dt>
              <dd>{resume.host}</dd>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Calendar className="h-4 w-4 text-indigo-400" />
              <dt className="sr-only">Last updated</dt>
              <dd>Updated {resume.updated}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
            >
              <Eye className="h-4 w-4" />
              View Resume
            </a>
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Award className="h-4 w-4 text-amber-300" />
              Internship Certificate
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/** A clean, always-available faux document preview (no heavy PDF render). */
function FauxResumePage() {
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-gradient-to-br from-slate-100 to-slate-300 p-3">
      <div className="h-3 w-2/3 rounded bg-indigo-400/80" />
      <div className="h-1.5 w-1/2 rounded bg-slate-400/70" />
      <div className="mt-2 space-y-1.5">
        {[90, 80, 95, 70, 85, 60].map((w, i) => (
          <div
            key={i}
            className="h-1 rounded bg-slate-400/50"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      <div className="mt-1 h-2 w-1/3 rounded bg-slate-500/60" />
      <div className="space-y-1.5">
        {[75, 88, 65].map((w, i) => (
          <div
            key={i}
            className="h-1 rounded bg-slate-400/50"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
    </div>
  );
}
