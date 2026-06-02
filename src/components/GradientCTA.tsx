import Link from "next/link";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function GradientCTA({
  headline = "Ready to fix your planning?",
  body = "Book a free discovery call and we'll map out how Pigment can work for your organization.",
  buttonText = "Book a Call",
  buttonLink = "/book-a-call",
}: {
  headline?: string;
  body?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  return (
    <section className="relative animated-gradient-bg py-28 px-6 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating orbs */}
      <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-teal/10 blur-3xl animate-float-delayed" />

      <div className="relative max-w-2xl mx-auto text-center">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {headline}
          </h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">{body}</p>
          <Link
            href={buttonLink}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-2xl text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
          >
            {buttonText}
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-sm text-white/40">
            Or reach us at{" "}
            <a
              href="mailto:info@amventconsulting.com"
              className="text-white/60 underline underline-offset-2 hover:text-white transition-colors"
            >
              info@amventconsulting.com
            </a>
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
