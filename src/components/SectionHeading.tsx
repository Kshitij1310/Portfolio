import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const centered = align === "center";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={["mb-10", centered ? "text-center" : "text-left"].join(" ")}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={[
            "mt-3 max-w-xl text-slate-400",
            centered ? "mx-auto" : "",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
      <div
        className={[
          "mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400",
          centered ? "mx-auto" : "",
        ].join(" ")}
      />
    </motion.div>
  );
}
