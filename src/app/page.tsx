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
      "Connected planning means all teams plan together in one system with real-time data and visibility.",
    category: "Strategy",
  },
  {
    title: "The Rise of Continuous Planning",
    href: "/blog/rise-of-continuous-planning",
    excerpt:
      "Annual budgets are becoming obsolete. Learn how continuous planning helps organizations stay agile.",
    category: "Planning",
  },
  {
    title: "A Comprehensive Roadmap to Successful S&OP",
    href: "/blog/a-comprehensive-roadmap-to-successful-s-op",
    excerpt:
      "A structured five-step monthly cycle that brings together sales, operations, finance, and leadership.",
    category: "S&OP",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative animated-gradient-bg pt-36 pb-28 px-6 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[15%] w-96 h-96 rounded-full bg-accent/15 blur-[100px] animate-float" />
        <div className="absolute bottom-10 left-[10%] w-[500px] h-[500px] rounded-full bg-teal/10 blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] animate-pulse-glow" />

        {/* Decorative ring */}
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full border border-white/[0.04] animate-spin-slow hidden lg:block" />
        <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full border border-white/[0.06] animate-spin-slow hidden lg:block" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollFadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-sm text-white/60 font-medium">Official Pigment Implementation Partner</span>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
              Planning shouldn&apos;t
              <br />
              be this{" "}
              <span className="relative inline-block">
                <span className="gradient-text">hard.</span>
              </span>
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Amvent is a Pigment-certified consulting firm that helps
              organizations replace fragmented planning with a single, connected
              system — so your teams can stop wrestling with spreadsheets and
              start making decisions.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-a-call"
                className="group relative px-8 py-4 bg-white text-navy font-bold rounded-2xl text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Book a Discovery Call
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 text-white/60 font-medium hover:text-white transition-all duration-300 text-lg inline-flex items-center gap-2 group"
              >
                See Our Services
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Marquee Trust Bar ── */}
      <section className="py-8 bg-white border-b border-border/50 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {[
                "Pigment Certified Partner",
                "Connected Planning",
                "Enterprise Grade",
                "200+ Users Migrated",
                "Toronto, Canada",
                "FP&A Solutions",
                "Anaplan Migration",
                "S&OP Design",
              ].map((item) => (
                <span key={`${item}-${i}`} className="text-sm font-medium text-slate/40 uppercase tracking-[0.2em] flex items-center gap-4">
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem → Solution ── */}
      <section className="py-28 px-6 relative">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-20">
              <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">
                The Challenge
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                The planning problem
                <br />
                <span className="gradient-text">is costing you.</span>
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                color: "from-red-500/10 to-red-500/5",
                iconColor: "text-red-500",
                title: "Disconnected Systems",
                body: "Finance in one tool, sales in another, operations in spreadsheets. Conflicting numbers, wasted cycles, and decisions based on stale data.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                ),
              },
              {
                step: "02",
                color: "from-accent/10 to-accent/5",
                iconColor: "text-accent",
                title: "Strategic Implementation",
                body: "We design your planning architecture from the ground up — dimensions, access, data flows — so Pigment becomes the single source of truth.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                ),
              },
              {
                step: "03",
                color: "from-teal/10 to-teal/5",
                iconColor: "text-teal",
                title: "Connected Planning",
                body: "One system. Real-time data. Cross-functional visibility. Your teams plan together, see the same numbers, and move faster.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
              },
            ].map((card, i) => (
              <ScrollFadeIn key={card.step} delay={i * 150}>
                <div className={`relative group p-8 rounded-3xl bg-gradient-to-br ${card.color} border border-border/50 hover-lift h-full`}>
                  <span className="text-xs font-bold text-slate/30 uppercase tracking-[0.3em]">
                    Step {card.step}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mt-4 mb-5`}>
                    <svg className={`w-7 h-7 ${card.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-slate leading-relaxed text-[15px]">{card.body}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24 px-6 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-teal/5 blur-[120px]" />
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <AnimatedCounter target={200} suffix="+" label="Users Onboarded" />
          <AnimatedCounter target={100} suffix="%" label="Adoption Rate" />
          <AnimatedCounter target={5} suffix="+" label="Years EPM Experience" />
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                What We Do
              </h2>
              <p className="text-slate mt-4 max-w-lg mx-auto text-lg">
                End-to-end Pigment expertise, from strategy to go-live.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollFadeIn delay={0}>
              <ServiceCard
                icon={
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ── Why Amvent ── */}
      <section className="py-28 px-6 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">
                Why Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Why teams choose us.
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Pigment-Native Expertise",
                body: "We don't dabble in a dozen tools. We go deep on Pigment. Our founder led one of the most successful Pigment implementations in the market — 200+ users at Gusto.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "Founder-Led Delivery",
                body: "When you work with Amvent, you work with senior consultants who've been in your shoes. No bait-and-switch. Just experienced practitioners who ship.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Built for Adoption",
                body: "A system nobody uses is a failed project. We obsess over user adoption — from intuitive access management to hands-on training — because the best implementation is one your team actually loves.",
              },
            ].map((item, i) => (
              <ScrollFadeIn key={item.title} delay={i * 150}>
                <div className="group p-8 rounded-3xl bg-white border border-border/80 hover-lift h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center mb-6 text-accent group-hover:from-accent/20 group-hover:to-teal/20 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-slate leading-relaxed text-[15px]">{item.body}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[100px]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollFadeIn direction="scale">
            <div className="relative">
              {/* Large decorative quote */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[200px] font-serif text-accent/[0.06] leading-none select-none pointer-events-none">
                &ldquo;
              </span>
              <blockquote className="relative text-2xl md:text-4xl font-serif italic text-charcoal leading-relaxed">
                &ldquo;Amvent transformed how our team plans. What used to take
                weeks of spreadsheet wrangling now happens in real-time across
                the entire organization.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-teal flex items-center justify-center text-white text-sm font-bold">
                  EP
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-charcoal">Enterprise Planning Leader</p>
                  <p className="text-xs text-slate">Series D SaaS Company</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="py-28 px-6 bg-surface relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">
                  Insights
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  From the Blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
              >
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollFadeIn key={post.href} delay={i * 150}>
                <Link
                  href={post.href}
                  className="group flex flex-col bg-white rounded-3xl border border-border/80 p-8 hover-lift h-full overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold bg-accent/5 text-accent mb-5">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-6 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <GradientCTA />
    </>
  );
}
