import type { Metadata } from "next";
import Link from "next/link";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Blog | Planning Insights & Pigment Tips | Amvent Consulting",
  description:
    "Insights on connected planning, continuous planning, S&OP, and getting the most from Pigment.",
};

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
      <section className="relative animated-gradient-bg pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 left-[30%] w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-float" />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollFadeIn>
            <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-6 block">Insights</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">Blog</h1>
            <p className="text-lg text-white/50">
              Insights on planning, Pigment, and making better decisions.
            </p>
          </ScrollFadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Featured */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn>
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block rounded-3xl overflow-hidden bg-navy hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 grid-pattern" />
              <div className="relative p-12 md:p-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/20 text-accent mb-6">
                  {featured.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 group-hover:text-accent transition-colors duration-300 leading-snug max-w-2xl">
                  {featured.title}
                </h2>
                <p className="text-white/50 leading-relaxed max-w-2xl text-lg">
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
          </ScrollFadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <ScrollFadeIn key={post.slug} delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-3xl border border-border/80 p-8 hover-lift h-full relative overflow-hidden"
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
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
