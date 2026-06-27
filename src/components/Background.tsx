import { motion } from "framer-motion";

/** A fixed, full-page background: gradient mesh + grid + glow blobs + particles. */
export function Background() {
  // Deterministic-ish particle field generated once on mount.
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: (i * 53) % 100,
    top: (i * 37) % 100,
    size: 1 + (i % 3),
    duration: 9 + (i % 6) * 2,
    delay: (i % 5) * 0.8,
  }));

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid, masked to fade toward the edges */}
      <div
        className="absolute inset-0 grid-bg opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
      />

      {/* Animated gradient mesh blobs */}
      <motion.div
        className="absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-indigo-600/25 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -28, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
