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
      className="group flex flex-col gap-4 p-8 rounded-2xl border border-border bg-white hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-charcoal">{title}</h3>
      <p className="text-slate leading-relaxed">{description}</p>
      <span className="text-accent font-semibold text-sm mt-auto group-hover:underline">
        Learn More &rarr;
      </span>
    </Link>
  );
}
