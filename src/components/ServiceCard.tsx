import Link from "next/link";

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-5 p-8 rounded-2xl bg-white border border-border/80 hover-lift glow-border overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-teal/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center mb-1 group-hover:from-accent/20 group-hover:to-teal/20 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-charcoal mt-4 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate leading-relaxed mt-2">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm mt-5 group-hover:gap-3 transition-all duration-300">
          Learn More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
