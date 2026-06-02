"use client";

import Link from "next/link";
import { AnimatedGridBackground } from "@/components/ui/animated-beam";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/text-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ContactForm } from "./ContactForm";

const contactInfo = [
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
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-36 pb-24 px-6 overflow-hidden">
        <AnimatedGridBackground />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              Let&apos;s talk planning.
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl mx-auto">
              Whether you&apos;re exploring Pigment, planning a migration, or need
              help getting more from your current setup — we&apos;d love to hear
              from you.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <FadeIn className="md:col-span-3" direction="left">
              <div className="p-8 md:p-10 bg-white rounded-3xl border border-border/80 shadow-sm">
                <ContactForm />
              </div>
            </FadeIn>

            <div className="md:col-span-2">
              <StaggerChildren className="space-y-6">
                {contactInfo.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="group p-6 rounded-3xl bg-white border border-border/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center text-accent shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate uppercase tracking-[0.25em] mb-1">
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
                  </StaggerItem>
                ))}

                <StaggerItem>
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-accent/5 to-teal/5 border border-accent/10">
                    <p className="text-sm text-slate mb-4">Prefer to book a time?</p>
                    <MagneticButton
                      as="a"
                      href="/book-a-call"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 text-sm group"
                    >
                      Book a Call
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </MagneticButton>
                  </div>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
