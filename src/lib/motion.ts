import type { Variants } from "framer-motion";

/** Fade + rise, used for most scroll-reveal elements. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Slide in from the side — used for alternating project rows. */
export const fadeSide = (dir: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: dir === "left" ? -40 : 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

/** Parent container that staggers its children in. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Pop-in for badges / chips. */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 20 },
  },
};

/** Shared viewport config so sections animate once when scrolled into view. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
