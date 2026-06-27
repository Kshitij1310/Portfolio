import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 → target the first time the element scrolls into view.
 * Returns a ref to attach and the formatted string to render.
 */
export function useCountUp(target: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, target]);

  return { ref, display: value.toFixed(decimals) };
}
