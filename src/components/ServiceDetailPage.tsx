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
      <section className="pt-32 pb-16 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-slate leading-relaxed">{subtitle}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-slate leading-relaxed mb-12">{overview}</p>
          </ScrollFadeIn>

          <h2 className="text-2xl font-bold mb-8">What&apos;s Included</h2>
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <ScrollFadeIn key={phase.title} delay={i * 100}>
                <div className="border border-border rounded-2xl p-6 bg-white">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">
                      {i + 1}
                    </span>
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-3 text-slate">
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
              <div className="mt-10 p-6 bg-accent/5 rounded-2xl border border-accent/20 text-center">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">
                  Typical Timeline
                </p>
                <p className="text-charcoal font-bold text-lg">{timeline}</p>
              </div>
            </ScrollFadeIn>
          )}
        </div>
      </section>

      <GradientCTA headline={ctaHeadline} body={ctaBody} />
    </>
  );
}
