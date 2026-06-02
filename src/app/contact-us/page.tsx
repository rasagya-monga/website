import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Amvent Consulting | Get in Touch",
  description:
    "Ready to transform your planning? Contact Amvent Consulting for Pigment implementation, connected planning advisory, or platform migration services.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s talk planning.
            </h1>
            <p className="text-lg text-slate max-w-xl mx-auto">
              Whether you&apos;re exploring Pigment, planning a migration, or need
              help getting more from your current setup — we&apos;d love to hear
              from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@amventconsulting.com"
                  className="text-charcoal font-medium hover:text-accent transition-colors"
                >
                  info@amventconsulting.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate mb-3">
                  Phone
                </h3>
                <a
                  href="tel:+16476762039"
                  className="text-charcoal font-medium hover:text-accent transition-colors"
                >
                  +1 (647) 676-2039
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate mb-3">
                  Location
                </h3>
                <p className="text-charcoal font-medium">Toronto, Canada</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-slate mb-3">Prefer to book a time?</p>
                <Link
                  href="/book-a-call"
                  className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors text-sm"
                >
                  Book a Call &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
