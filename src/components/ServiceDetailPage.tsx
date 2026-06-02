"use client";

import { AnimatedGridBackground, GlowingLine } from "@/components/ui/animated-beam";
import { FadeIn } from "@/components/ui/text-reveal";
import { GradientCTA } from "@/components/GradientCTA";

interface Phase {
  title: string;
  items: string[];
}

interface Props {
  title: string;
  subtitle: string;
  overview: string;
  phases: Phase[];
  timeline?: string;
  ctaHeadline: string;
  ctaBody: string;
}

export function ServiceDetailPage({
  title,
  subtitle,
  overview,
  phases,
  timeline,
  ctaHeadline,
  ctaBody,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-36 pb-24 px-6 overflow-hidden">
        <AnimatedGridBackground />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">Service</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              {title}
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">{subtitle}</p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="p-8 md:p-12 rounded-3xl bg-surface border border-border/80">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-4 block">Overview</span>
              <p className="text-lg text-slate leading-relaxed">{overview}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <GlowingLine />

      {/* Phases */}
      <section className="pb-24 pt-6 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10 tracking-tight">What&apos;s Included</h2>
          </FadeIn>
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <FadeIn key={phase.title} delay={i * 0.1}>
                <div className="group p-8 rounded-3xl bg-white border border-border/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="text-lg font-bold mb-5 flex items-center gap-4 tracking-tight">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-teal flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {phase.title}
                  </h3>
                  <ul className="space-y-3 pl-14">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-3 text-slate text-[15px]">
                        <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          {timeline && (
            <FadeIn>
              <div className="mt-10 p-8 bg-gradient-to-br from-accent/5 to-teal/5 rounded-3xl border border-accent/10 text-center">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-2">
                  Typical Timeline
                </p>
                <p className="text-charcoal font-bold text-2xl tracking-tight">{timeline}</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <GradientCTA headline={ctaHeadline} body={ctaBody} />
    </>
  );
}
