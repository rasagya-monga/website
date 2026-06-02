"use client";

import { AnimatedGridBackground } from "@/components/ui/animated-beam";
import { FadeIn } from "@/components/ui/text-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";

export function GradientCTA({
  headline = "Ready to fix your planning?",
  body = "Book a free discovery call and we'll map out how Pigment can work for your organization.",
  buttonText = "Book a Call",
  buttonLink = "/book-a-call",
}: {
  headline?: string;
  body?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  return (
    <section className="relative bg-primary py-28 px-6 overflow-hidden">
      <AnimatedGridBackground />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
            {headline}
          </h2>
          <p className="text-lg text-white/40 mb-10 leading-relaxed">{body}</p>
          <MagneticButton
            as="a"
            href={buttonLink}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
          >
            {buttonText}
            <motion.svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </MagneticButton>
          <p className="mt-6 text-sm text-white/30">
            Or reach us at{" "}
            <a
              href="mailto:info@amventconsulting.com"
              className="text-white/50 underline underline-offset-2 hover:text-white transition-colors"
            >
              info@amventconsulting.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
