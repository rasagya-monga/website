import Link from "next/link";

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
    <section className="bg-gradient-to-br from-navy to-navy-light py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        <p className="text-lg text-white/70 mb-8">{body}</p>
        <Link
          href={buttonLink}
          className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors text-lg"
        >
          {buttonText}
        </Link>
        <p className="mt-4 text-sm text-white/50">
          Or email us at{" "}
          <a
            href="mailto:info@amventconsulting.com"
            className="underline hover:text-white/80"
          >
            info@amventconsulting.com
          </a>
        </p>
      </div>
    </section>
  );
}
