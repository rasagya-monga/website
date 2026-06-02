import type { Metadata } from "next";
import Link from "next/link";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Amvent Consulting | Get in Touch",
  description:
    "Ready to transform your planning? Contact Amvent Consulting for Pigment implementation, connected planning advisory, or platform migration services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative animated-gradient-bg pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-accent/10 blur-[100px] animate-float" />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollFadeIn>
            <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-6 block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
              Let&apos;s talk planning.
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Whether you&apos;re exploring Pigment, planning a migration, or need
              help getting more from your current setup — we&apos;d love to hear
              from you.
            </p>
          </ScrollFadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <ScrollFadeIn className="md:col-span-3">
              <div className="p-8 md:p-10 bg-white rounded-3xl border border-border/80 shadow-sm">
                <ContactForm />
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn className="md:col-span-2" delay={150}>
              <div className="space-y-6">
                {[
                  {
                    label: "Email",
                    value: "info@amventconsulting.com",
                    href: "mailto:info@amventconsulting.com",
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Phone",
                    value: "+1 (647) 676-2039",
                    href: "tel:+16476762039",
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Location",
                    value: "Toronto, Canada",
                    href: null,
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group p-6 rounded-2xl bg-surface border border-border/50 hover:border-accent/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-charcoal font-medium hover:text-accent transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-charcoal font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-teal/5 border border-accent/10">
                  <p className="text-sm text-slate mb-4">Prefer to book a time?</p>
                  <Link
                    href="/book-a-call"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 text-sm group"
                  >
                    Book a Call
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
