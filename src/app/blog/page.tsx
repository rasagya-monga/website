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
      "S&OP is a structured five-step monthly cycle that brings together sales, operations, finance, and leadership to agree on a single version of the truth.",
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
      <section className="pt-32 pb-16 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-slate">
            Insights on planning, Pigment, and making better decisions.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-gradient-to-br from-navy to-navy-light rounded-2xl p-10 md:p-14 hover:shadow-2xl transition-shadow"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent mb-4">
                {featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-white/60 leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
              <span className="inline-block mt-6 text-accent font-semibold text-sm">
                Read Article &rarr;
              </span>
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <ScrollFadeIn key={post.slug} delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold bg-surface text-slate mb-4">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-accent text-sm font-semibold">
                  Read More &rarr;
                </span>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
