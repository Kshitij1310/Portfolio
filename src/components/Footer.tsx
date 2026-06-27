import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile, socials } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-slate-500">
          © {profile.name}. Built with React, TypeScript & Tailwind.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
