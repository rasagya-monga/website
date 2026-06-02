"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedCounter({
  target,
  suffix = "+",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      const start = performance.now();
      const duration = 2400;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [target, started, isInView]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight tabular-nums">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-xs font-semibold text-white/25 uppercase tracking-[0.25em] mt-3">
        {label}
      </div>
    </motion.div>
  );
}
