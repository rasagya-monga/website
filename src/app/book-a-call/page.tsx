"use client";

import { AnimatedGridBackground } from "@/components/ui/animated-beam";
import { FadeIn } from "@/components/ui/text-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function BookACallPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-36 pb-24 px-6 overflow-hidden">
        <AnimatedGridBackground />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">Schedule</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              Book a Discovery Call
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl mx-auto">
              Schedule a free 30-minute call to discuss your planning challenges
              and explore how Pigment can work for your organization.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl bg-white border border-border/80 p-10 md:p-14 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="max-w-sm mx-auto space-y-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Scheduling Widget</h3>
                <p className="text-slate leading-relaxed">
                  Replace this placeholder with your Calendly or Cal.com embed
                  to let visitors book calls directly.
                </p>
                <div className="pt-2">
                  <MagneticButton
                    as="a"
                    href="mailto:info@amventconsulting.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                  >
                    Email Us Instead
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
