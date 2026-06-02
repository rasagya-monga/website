import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { GradientCTA } from "@/components/GradientCTA";

const blogPosts = [
  {
    title: "The Path to Connected Planning: Gradual and Intentional",
    href: "/blog/the-path-to-connected-planning",
    excerpt:
      "Connected planning means all teams plan together in one system with real-time data and visibility. Here's how to get there.",
  },
  {
    title: "The Rise of Continuous Planning: Moving Beyond Annual Budgets",
    href: "/blog/rise-of-continuous-planning",
    excerpt:
      "Annual budgets are becoming obsolete. Learn how continuous planning helps organizations stay agile.",
  },
  {
    title: "A Comprehensive Roadmap to Successful S&OP",
    href: "/blog/a-comprehensive-roadmap-to-successful-s-op",
    excerpt:
      "S&OP is a structured five-step monthly cycle that brings together sales, operations, finance, and leadership.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy to-navy-light pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-teal blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Planning shouldn&apos;t be this hard.{" "}
            <span className="text-accent">We make it simple.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Amvent is a Pigment-certified consulting firm that helps
            organizations replace fragmented planning with a single, connected
            system — so your teams can stop wrestling with spreadsheets and
            start making decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-a-call"
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors text-lg"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-white/80 font-medium hover:text-white transition-colors text-lg"
            >
              See Our Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 px-6 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <span className="text-sm font-semibold text-slate uppercase tracking-wider">
            Official Pigment Implementation Partner
          </span>
          <div className="hidden md:block w-px h-6 bg-border" />
          <span className="text-sm text-slate">Toronto, Canada</span>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The planning problem is real.
            </h2>
            <p className="text-slate text-center max-w-2xl mx-auto mb-14">
              And it costs organizations millions in wasted time, conflicting data, and delayed decisions.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollFadeIn delay={0}>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878l4.242 4.242M15 12a3 3 0 00-3-3m0 0L3 3m9 9l9.12 9.12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Disconnected Systems</h3>
                <p className="text-slate leading-relaxed">
                  Finance in one tool, sales in another, operations in spreadsheets.
                  The result? Conflicting numbers, wasted cycles, and decisions
                  based on stale data.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={150}>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Implementation</h3>
                <p className="text-slate leading-relaxed">
                  We don&apos;t just install software. We design your planning
                  architecture from the ground up — dimensions, access, data flows —
                  so Pigment becomes the single source of truth.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={300}>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-teal-50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Connected Planning</h3>
                <p className="text-slate leading-relaxed">
                  One system. Real-time data. Cross-functional visibility. Your teams
                  plan together, see the same numbers, and move faster — with
                  adoption rates that prove it works.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCounter target={200} suffix="+" label="Users Onboarded" />
          <AnimatedCounter target={100} suffix="%" label="Adoption Rate" />
          <AnimatedCounter target={5} suffix="+" label="Years EPM Experience" />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              What We Do
            </h2>
            <p className="text-slate text-center max-w-xl mx-auto mb-14">
              End-to-end Pigment expertise, from strategy to go-live.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollFadeIn delay={0}>
              <ServiceCard
                icon={
                  <svg className="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Pigment Implementation"
                description="Deploy Pigment the right way — with thoughtful dimension design, sparsity management, and access controls built for scale."
                href="/services/pigment-implementation"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={150}>
              <ServiceCard
                icon={
                  <svg className="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                  </svg>
                }
                title="Connected Planning Advisory"
                description="Build a roadmap to unified planning across FP&A, Sales, and Operations. Move from fragmented processes to a single planning rhythm."
                href="/services/connected-planning"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay={300}>
              <ServiceCard
                icon={
                  <svg className="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                }
                title="Platform Migration"
                description="Migrate from Anaplan, Adaptive Insights, or spreadsheets to Pigment — with a proven playbook that minimizes disruption."
                href="/services/platform-migration"
              />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Why Amvent */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Why teams choose us.
            </h2>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollFadeIn delay={0}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Pigment-Native Expertise</h3>
                <p className="text-slate leading-relaxed">
                  We don&apos;t dabble in a dozen tools. We go deep on Pigment. Our
                  founder led one of the most successful Pigment implementations
                  in the market — 200+ users at Gusto.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={150}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Founder-Led Delivery</h3>
                <p className="text-slate leading-relaxed">
                  When you work with Amvent, you work with senior consultants
                  who&apos;ve been in your shoes. No bait-and-switch with junior
                  staff. Just experienced practitioners who ship.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={300}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Built for Adoption</h3>
                <p className="text-slate leading-relaxed">
                  A system nobody uses is a failed project. We obsess over user
                  adoption — from intuitive access management to hands-on
                  training — because the best implementation is one your team
                  actually loves.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollFadeIn>
            <svg className="w-12 h-12 text-accent/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-charcoal leading-relaxed mb-6">
              &ldquo;Amvent transformed how our team plans. What used to take
              weeks of spreadsheet wrangling now happens in real-time across
              the entire organization.&rdquo;
            </blockquote>
            <p className="text-slate font-medium">
              — Enterprise Planning Leader
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Blog highlights */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold text-center mb-3">
              From the Blog
            </h2>
            <p className="text-slate text-center max-w-xl mx-auto mb-14">
              Insights on planning, Pigment, and making better decisions.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollFadeIn key={post.href} delay={i * 150}>
                <Link
                  href={post.href}
                  className="group block bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-accent text-sm font-semibold">
                    Read More &rarr;
                  </span>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <GradientCTA />
    </>
  );
}
