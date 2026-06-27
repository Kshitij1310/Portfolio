import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type Project } from "../data/portfolio";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16"
    >
      <SectionHeading
        eyebrow="Work"
        title="Featured Projects"
        subtitle="Things I've designed and shipped — built for scale, speed, and good UX."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [imgOk, setImgOk] = useState(!!project.image);
  const primaryUrl = project.liveUrl ?? project.repoUrl;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/25"
    >
      {/* Banner */}
      <div className="relative aspect-video overflow-hidden">
        {project.image && imgOk ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
          >
            <span className="font-display text-4xl font-extrabold text-white/90 drop-shadow">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute left-4 top-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          {project.tagline}
        </p>

        {/* Title carries a "stretched link" so the whole card is clickable */}
        <h3 className="mt-1 font-display text-xl font-bold text-white">
          {primaryUrl ? (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Buttons pinned to the bottom, above the stretched link (z-10) */}
        <div className="relative z-10 mt-auto flex gap-2 pt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
