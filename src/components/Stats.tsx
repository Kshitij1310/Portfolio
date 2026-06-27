import { motion } from "framer-motion";
import { stats, type Stat } from "../data/portfolio";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { useCountUp } from "../lib/useCountUp";

export function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </motion.div>
    </section>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  const { icon: Icon } = stat;
  const counter = useCountUp(stat.value ?? 0, stat.decimals ?? 0);

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl glass p-5 text-center"
    >
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
      <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 transition-colors group-hover:bg-indigo-500/25">
        <Icon className="h-5 w-5" />
      </span>

      <div className="font-display text-2xl font-extrabold text-white sm:text-3xl">
        {stat.value === null ? (
          stat.display
        ) : (
          <span ref={counter.ref}>
            {counter.display}
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
    </motion.div>
  );
}
