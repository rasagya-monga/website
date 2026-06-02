import { ScrollFadeIn } from "@/components/ScrollFadeIn";
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
      <section className="relative animated-gradient-bg pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 right-[15%] w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-float" />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollFadeIn>
            <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-6 block">Service</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
              {title}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">{subtitle}</p>
          </ScrollFadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <div className="p-8 md:p-12 rounded-3xl bg-surface border border-border/50">
              <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">Overview</span>
              <p className="text-lg text-slate leading-relaxed">{overview}</p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold mb-10">What&apos;s Included</h2>
          </ScrollFadeIn>
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <ScrollFadeIn key={phase.title} delay={i * 100}>
                <div className="group p-8 rounded-3xl bg-white border border-border/80 hover-lift">
                  <h3 className="text-lg font-bold mb-5 flex items-center gap-4">
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
              </ScrollFadeIn>
            ))}
          </div>

          {timeline && (
            <ScrollFadeIn>
              <div className="mt-10 p-8 bg-gradient-to-br from-accent/5 to-teal/5 rounded-3xl border border-accent/10 text-center">
                <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-2">
                  Typical Timeline
                </p>
                <p className="text-charcoal font-bold text-2xl">{timeline}</p>
              </div>
            </ScrollFadeIn>
          )}
        </div>
      </section>

      <GradientCTA headline={ctaHeadline} body={ctaBody} />
    </>
  );
}
