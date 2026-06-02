"use client";

import { motion } from "framer-motion";

export function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          top: "10%",
          right: "10%",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
          bottom: "5%",
          left: "5%",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
          top: "50%",
          left: "40%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_70%)]" />
    </div>
  );
}

export function GlowingLine() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      <motion.div
        className="absolute top-0 h-px w-40 bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{ x: ["-10rem", "calc(100vw + 10rem)"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />
    </div>
  );
}
