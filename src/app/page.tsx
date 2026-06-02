"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedGridBackground, GlowingLine } from "@/components/ui/animated-beam";
import { FadeIn, TextReveal, StaggerChildren, StaggerItem } from "@/components/ui/text-reveal";
import { SpotlightCard } from "@/components/ui/spotlight";
import { Spotlight } from "@/components/ui/spotlight";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FlipBoardRow } from "@/components/ui/flip-board";

const blogPosts = [
  {
    title: "The Path to Connected Planning",
    href: "/blog",
    excerpt: "All teams planning together in one system with real-time data and visibility.",
    category: "Strategy",
  },
  {
    title: "Moving Beyond Annual Budgets",
    href: "/blog",
    excerpt: "How continuous planning helps organizations stay agile and responsive.",
    category: "Planning",
  },
  {
    title: "A Roadmap to Successful S&OP",
    href: "/blog",
    excerpt: "The five-step monthly cycle that aligns sales, operations, and finance.",
    category: "S&OP",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
         ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        <AnimatedGridBackground />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          {/* Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              <span className="text-sm text-white/50 font-medium tracking-wide">
                Pigment Implementation Partner
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            <TextReveal delay={0.2}>Planning shouldn&apos;t</TextReveal>
            <br />
            <TextReveal delay={0.4}>be this </TextReveal>
            <span className="relative inline-block">
              <TextReveal className="bg-gradient-to-r from-accent via-purple to-teal bg-clip-text text-transparent" delay={0.5}>
                hard.
              </TextReveal>
            </span>
          </h1>

          {/* Sub */}
          <FadeIn delay={0.7}>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              We help organizations replace fragmented planning with a single,
              connected system — so your teams stop wrestling with spreadsheets
              and start making decisions.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.9}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton as="a" href="/book-a-call" className="group relative px-8 py-4 bg-white text-primary font-semibold rounded-full text-base inline-flex items-center gap-2.5 transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                Book a Discovery Call
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </MagneticButton>
              <Link
                href="/services"
                className="px-8 py-4 text-white/40 hover:text-white/80 font-medium transition-colors duration-300 text-base"
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn delay={1.2} className="mt-20">
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs text-white/20 uppercase tracking-[0.3em]">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
          </FadeIn>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ═══════════════════════════════════════
          FLIP BOARD
         ═══════════════════════════════════════ */}
      <section className="py-12 bg-[#0a0a1a] border-y border-white/[0.04] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-center text-xs font-semibold text-white/20 uppercase tracking-[0.3em] mb-5">
              What We Deliver
            </p>
            <div className="flex justify-center">
              <FlipBoardRow
                lines={[
                  "CONNECTED PLANNING",
                  "PIGMENT IMPLEMENTATION",
                  "PLATFORM MIGRATION",
                  "FP&A TRANSFORMATION",
                  "S&OP DESIGN",
                ]}
                className="text-xl md:text-2xl"
                cycleDuration={3000}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROBLEM → SOLUTION
         ═══════════════════════════════════════ */}
      <Spotlight className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="max-w-3xl mb-20">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">
                The Challenge
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Most organizations plan in silos.{" "}
                <span className="text-muted">The result? Conflicting data, wasted cycles, and slow decisions.</span>
              </h2>
            </div>
          </FadeIn>

          <GlowingLine />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" staggerDelay={0.15}>
            {[
              {
                num: "01",
                title: "Disconnected Systems",
                body: "Finance in one tool, sales in another, operations in spreadsheets. Every team has a different version of the truth.",
                gradient: "from-red-500/10 to-orange-500/5",
              },
              {
                num: "02",
                title: "Strategic Architecture",
                body: "We design your planning system from the ground up — dimensions, access, data flows — engineered for how your teams actually work.",
                gradient: "from-accent/10 to-purple/5",
              },
              {
                num: "03",
                title: "Connected Planning",
                body: "One system, real-time data, cross-functional visibility. Your teams plan together and move faster.",
                gradient: "from-teal/10 to-accent/5",
              },
            ].map((card) => (
              <StaggerItem key={card.num}>
                <div className={`group relative p-8 rounded-3xl bg-gradient-to-br ${card.gradient} border border-border/50 h-full transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1`}>
                  <span className="text-5xl font-bold text-border/60 block mb-6 transition-colors duration-300 group-hover:text-accent/20">
                    {card.num}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-slate leading-relaxed">{card.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Spotlight>

      {/* ═══════════════════════════════════════
          STATS — DARK SECTION
         ═══════════════════════════════════════ */}
      <section className="relative bg-primary py-28 px-6 overflow-hidden noise">
        <AnimatedGridBackground />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <AnimatedCounter target={200} suffix="+" label="Users Onboarded" />
              <AnimatedCounter target={100} suffix="%" label="Adoption Rate" />
              <AnimatedCounter target={5} suffix="+" label="Years EPM Experience" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
         ═══════════════════════════════════════ */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                End-to-end Pigment expertise.
              </h2>
              <p className="text-lg text-muted mt-4 leading-relaxed">
                From strategy to go-live to ongoing optimization.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {[
              {
                title: "Pigment Implementation",
                desc: "Deploy Pigment with thoughtful dimension design, sparsity management, and access controls built for scale.",
                href: "/services/pigment-implementation",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
              },
              {
                title: "Connected Planning",
                desc: "Build a roadmap to unified planning across FP&A, Sales, and Operations. One plan, one source of truth.",
                href: "/services/connected-planning",
                icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
              },
              {
                title: "Platform Migration",
                desc: "Migrate from Anaplan, Adaptive, or spreadsheets with a proven playbook. 200+ users migrated successfully.",
                href: "/services/platform-migration",
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
              },
            ].map((svc) => (
              <StaggerItem key={svc.title}>
                <Link
                  href={svc.href}
                  className="group relative flex flex-col p-8 rounded-3xl border border-border/80 bg-white h-full transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-accent/20"
                >
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/0 group-hover:via-accent/40 to-transparent transition-all duration-700" />

                  <div className="w-12 h-12 rounded-2xl bg-charcoal/[0.04] flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-500">
                    <svg className="w-6 h-6 text-charcoal/60 group-hover:text-accent transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-slate leading-relaxed text-[15px] flex-grow">{svc.desc}</p>
                  <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY US — DARK EDITORIAL
         ═══════════════════════════════════════ */}
      <section className="relative bg-primary py-32 px-6 overflow-hidden noise">
        <AnimatedGridBackground />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">
              Why Amvent
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
              A different kind of
              <br />
              consulting firm.
            </h2>
            <p className="text-lg text-white/30 max-w-xl leading-relaxed mb-16">
              We don&apos;t dabble in a dozen tools or send junior staff. We go deep on Pigment and deliver with experienced practitioners.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {[
              {
                title: "Pigment-Native",
                body: "Our founder led one of the most successful Pigment implementations in the market — 200+ users at Gusto — before founding Amvent.",
              },
              {
                title: "Founder-Led",
                body: "When you work with us, you work with senior consultants who've been in your shoes. No bait-and-switch. Just practitioners who ship.",
              },
              {
                title: "Adoption-Obsessed",
                body: "A system nobody uses is a failed project. We measure success by whether your team loves the system, not just whether it went live.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <SpotlightCard>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed text-[15px]">{item.body}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIAL
         ═══════════════════════════════════════ */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="none">
            <div className="relative">
              <motion.span
                className="absolute -top-16 -left-4 text-[12rem] font-serif text-accent/[0.04] leading-none select-none pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                &ldquo;
              </motion.span>
              <blockquote className="relative text-3xl md:text-4xl lg:text-5xl font-serif italic text-charcoal leading-[1.3] tracking-tight">
                <TextReveal>
                  Amvent transformed how our team plans. What used to take weeks now happens in real-time across the entire organization.
                </TextReveal>
              </blockquote>
              <FadeIn delay={0.8}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-teal flex items-center justify-center">
                    <span className="text-white text-sm font-bold">EP</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Enterprise Planning Leader</p>
                    <p className="text-xs text-muted">Series D SaaS Company</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      <GlowingLine />

      {/* ═══════════════════════════════════════
          BLOG
         ═══════════════════════════════════════ */}
      <section className="py-32 px-6 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">
                  Insights
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From the blog</h2>
              </div>
              <Link
                href="/blog"
                className="group text-sm font-semibold text-charcoal inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                View all articles
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {blogPosts.map((post) => (
              <StaggerItem key={post.title}>
                <Link
                  href={post.href}
                  className="group flex flex-col p-8 rounded-3xl border border-border/80 bg-white h-full transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                >
                  <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-5">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-slate text-[15px] leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Read article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
         ═══════════════════════════════════════ */}
      <section className="relative bg-primary py-32 px-6 overflow-hidden noise">
        <AnimatedGridBackground />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Ready to fix
              <br />
              your planning?
            </h2>
            <p className="text-lg text-white/30 mb-10 leading-relaxed">
              Book a free discovery call and we&apos;ll map out how Pigment can work for your organization.
            </p>
            <MagneticButton as="a" href="/book-a-call" className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-primary font-semibold rounded-full text-base transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]">
              Book a Call
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </MagneticButton>
            <p className="mt-6 text-sm text-white/20">
              Or email{" "}
              <a href="mailto:info@amventconsulting.com" className="text-white/40 underline underline-offset-4 hover:text-white/60 transition-colors">
                info@amventconsulting.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
