"use client";

import Link from "next/link";
import { AnimatedGridBackground } from "@/components/ui/animated-beam";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/text-reveal";

const posts = [
  {
    title: "The Path to Connected Planning: Gradual and Intentional",
    slug: "the-path-to-connected-planning",
    excerpt:
      "Connected planning means all teams plan together in one system with real-time data and visibility. Here's how to get there without disrupting what already works.",
    category: "Planning Strategy",
  },
  {
    title: "The Rise of Continuous Planning: Moving Beyond Annual Budgets",
    slug: "rise-of-continuous-planning",
    excerpt:
      "Annual budgets are becoming obsolete. Learn how continuous planning helps organizations stay agile and responsive to market changes.",
    category: "Planning Strategy",
  },
  {
    title: "A Comprehensive Roadmap to Successful S&OP",
    slug: "a-comprehensive-roadmap-to-successful-s-op",
    excerpt:
      "S&OP is a structured five-step monthly cycle that brings together sales, operations, finance, and leadership.",
    category: "Planning Strategy",
  },
  {
    title: "Multi-Dimensionality: Too Many, Too Few, or Just Right?",
    slug: "multi-dimensionality",
    excerpt:
      "How organizations can identify the appropriate number and type of dimensions for their business planning models.",
    category: "Pigment Tips",
  },
  {
    title: "Sparsity Management: What Is It and Why Does It Matter?",
    slug: "sparsity-management-epm-systems",
    excerpt:
      "Data sparsity is one of the most important factors to consider when evaluating and implementing planning systems.",
    category: "Pigment Tips",
  },
  {
    title: "Planning Is Broken and Pigment Is Here to Help You Fix It",
    slug: "choose-pigment",
    excerpt:
      "Why we chose to build our practice around Pigment, and what makes it different from legacy planning platforms.",
    category: "Industry Insights",
  },
  {
    title: "Access Management in Pigment: A 5 Step Guide",
    slug: "access-management-in-pigment-a-5-step-guide",
    excerpt:
      "A practical guide to setting up role-based access controls in Pigment that balance security with usability.",
    category: "Pigment Tips",
  },
];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-36 pb-24 px-6 overflow-hidden">
        <AnimatedGridBackground />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">Insights</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">Blog</h1>
            <p className="text-lg text-white/40 leading-relaxed">
              Insights on planning, Pigment, and making better decisions.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Featured */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block rounded-3xl overflow-hidden bg-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <AnimatedGridBackground />
              <div className="relative z-10 p-12 md:p-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/20 text-accent mb-6">
                  {featured.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 group-hover:text-accent transition-colors duration-300 leading-snug max-w-2xl tracking-tight">
                  {featured.title}
                </h2>
                <p className="text-white/40 leading-relaxed max-w-2xl text-lg">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 mt-8 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-3xl border border-border/80 p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold bg-accent/5 text-accent mb-5">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-accent transition-colors duration-300 leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-6 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
