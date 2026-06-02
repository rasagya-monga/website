import type { Metadata } from "next";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { GradientCTA } from "@/components/GradientCTA";

export const metadata: Metadata = {
  title: "About Amvent Consulting | Pigment Implementation Partner",
  description:
    "Meet the team behind Amvent Consulting. Founded by a practitioner who led the Pigment transformation at Gusto.",
};

const values = [
  {
    title: "Depth Over Breadth",
    description:
      "We specialize in one platform and do it exceptionally well. Our clients get focused expertise, not diluted generalists.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Practitioner-First",
    description:
      "Every engagement is led by someone who has been in your seat — building models, managing stakeholders, and driving adoption from the inside.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Adoption is the Metric",
    description:
      "A successful implementation isn't defined by go-live. It's defined by whether your teams use the system, trust the data, and make better decisions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparency Always",
    description:
      "No hidden fees, no scope creep surprises, no black-box methodologies. We show our work and communicate openly at every stage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="relative animated-gradient-bg pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-accent/10 blur-[100px] animate-float" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-teal/8 blur-[120px] animate-float-delayed" />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollFadeIn>
            <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-6 block">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              We believe planning should empower teams,{" "}
              <span className="gradient-text">not slow them down.</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Amvent Consulting is a technology advisory and systems integration
              firm focused exclusively on Pigment. We help organizations design,
              build, and adopt connected planning systems that actually work.
            </p>
          </ScrollFadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Founder */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2 flex flex-col items-center md:items-start">
                <div className="relative">
                  <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-accent/20 via-teal/10 to-accent/5 flex items-center justify-center border border-accent/10">
                    <span className="text-7xl font-bold gradient-text">RM</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-navy flex items-center justify-center">
                    <span className="text-2xl">&#x1f91d;</span>
                  </div>
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h3 className="text-xl font-bold">Rasagya Monga</h3>
                  <p className="text-slate text-sm">Founder & Principal Consultant</p>
                  <a
                    href="https://ca.linkedin.com/company/amventconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-accent text-sm font-medium hover:underline"
                  >
                    Connect on LinkedIn
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:col-span-3">
                <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Built by a practitioner,
                  <br />
                  <span className="text-slate">not a salesperson.</span>
                </h2>
                <div className="space-y-5 text-slate leading-relaxed text-[15.5px]">
                  <p>
                    Before founding Amvent, Rasagya led the enterprise planning
                    transformation at Gusto — migrating the company from Anaplan
                    to Pigment and scaling the platform to <strong className="text-charcoal">200+ active users</strong> across
                    finance, sales, and operations.
                  </p>
                  <p>
                    That experience revealed a gap in the market: most consulting
                    firms treat Pigment as just another tool in their portfolio.
                    Rasagya founded Amvent to be different — a firm that goes
                    deep on Pigment, delivers with senior practitioners, and
                    measures success by <strong className="text-charcoal">adoption, not just go-live.</strong>
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
      <section className="py-28 px-6 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">
                Our Principles
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
            </div>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollFadeIn key={v.title} delay={i * 100}>
                <div className="group flex gap-6 p-8 bg-white rounded-3xl border border-border/80 hover-lift">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center text-accent group-hover:from-accent/20 group-hover:to-teal/20 transition-all duration-500">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-slate leading-relaxed text-[15px]">
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
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollFadeIn direction="scale">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-sm text-accent font-medium">Certified Partner</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Official Pigment
              <br />
              Implementation Partner
            </h2>
            <p className="text-slate leading-relaxed max-w-xl mx-auto text-lg">
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
