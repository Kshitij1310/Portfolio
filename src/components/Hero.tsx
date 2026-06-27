import { motion } from "framer-motion";
import { ArrowDown, Award, Eye, FolderGit2, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { certificate, profile, resume, socials } from "../data/portfolio";
import { fadeUp, stagger } from "../lib/motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-28 pb-16 sm:px-6"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center"
      >

        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
        >
          {profile.name}
          <br />
          <span className="text-gradient">{profile.role}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
          >
            <Eye className="h-4 w-4" /> View Resume
          </a>
          <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Award className="h-4 w-4 text-amber-300" /> Internship Certificate
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-slate-200 transition-colors hover:bg-white/5"
          >
            <FolderGit2 className="h-4 w-4" /> View Projects
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
          <IconLink href={socials.github} label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </IconLink>
          <IconLink href={socials.linkedin} label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </IconLink>
          <IconLink href={`mailto:${socials.email}`} label="Email">
            <Mail className="h-5 w-5" />
          </IconLink>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 text-slate-500 hover:text-slate-300"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="flex h-11 w-11 items-center justify-center rounded-xl glass text-slate-300 transition-all hover:scale-110 hover:text-white"
    >
      {children}
    </a>
  );
}
