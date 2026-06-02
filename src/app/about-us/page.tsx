import type { Metadata } from "next";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { GradientCTA } from "@/components/GradientCTA";

export const metadata: Metadata = {
  title: "About Amvent Consulting | Pigment Implementation Partner",
  description:
    "Meet the team behind Amvent Consulting. Founded by a practitioner who led the Pigment transformation at Gusto, we specialize in connected planning and Pigment implementation.",
};

const values = [
  {
    title: "Depth Over Breadth",
    description:
      "We specialize in one platform and do it exceptionally well. Our clients get focused expertise, not diluted generalists.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Practitioner-First",
    description:
      "Every engagement is led by someone who has been in your seat — building models, managing stakeholders, and driving adoption from the inside.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Adoption is the Metric",
    description:
      "A successful implementation isn't defined by go-live. It's defined by whether your teams use the system, trust the data, and make better decisions because of it.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparency Always",
    description:
      "No hidden fees, no scope creep surprises, no black-box methodologies. We show our work and communicate openly at every stage.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We believe planning should empower teams,{" "}
            <span className="text-accent">not slow them down.</span>
          </h1>
          <p className="text-lg text-slate leading-relaxed">
            Amvent Consulting is a technology advisory and systems integration
            firm focused exclusively on Pigment. We help organizations design,
            build, and adopt connected planning systems that actually work.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-2">
                <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-accent/20 to-teal/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-accent">RM</span>
                </div>
                <div className="text-center md:text-left mt-4">
                  <h3 className="text-xl font-bold">Rasagya Monga</h3>
                  <p className="text-slate text-sm">Founder & Principal Consultant</p>
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Built by a practitioner, not a salesperson.
                </h2>
                <div className="space-y-4 text-slate leading-relaxed">
                  <p>
                    Before founding Amvent, Rasagya led the enterprise planning
                    transformation at Gusto — migrating the company from Anaplan
                    to Pigment and scaling the platform to 200+ active users
                    across finance, sales, and operations.
                  </p>
                  <p>
                    That experience revealed a gap in the market: most consulting
                    firms treat Pigment as just another tool in their portfolio.
                    Rasagya founded Amvent to be different — a firm that goes
                    deep on Pigment, delivers with senior practitioners, and
                    measures success by adoption, not just go-live.
                  </p>
                  <p>
                    Based in Toronto, Amvent works with organizations across
                    North America to make connected planning a reality.
                  </p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold text-center mb-14">Our Values</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <ScrollFadeIn key={v.title} delay={i * 100}>
                <div className="flex gap-5 p-6 bg-white rounded-2xl border border-border">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{v.title}</h3>
                    <p className="text-slate leading-relaxed text-sm">
                      {v.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold mb-4">
              Official Pigment Implementation Partner
            </h2>
            <p className="text-slate leading-relaxed">
              Amvent is a certified Pigment partner, recognized for delivering
              best-in-class implementation experiences. Our deep platform
              expertise and proven track record make us a trusted extension of
              the Pigment ecosystem.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <GradientCTA
        headline="Want to work with us?"
        body="Let's talk about your planning challenges and how we can help."
      />
    </>
  );
}
