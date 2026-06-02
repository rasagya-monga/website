"use client";

import Link from "next/link";
import { AnimatedGridBackground, GlowingLine } from "@/components/ui/animated-beam";

export function Footer() {
  return (
    <footer className="relative bg-primary overflow-hidden">
      <AnimatedGridBackground />
      <GlowingLine />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Amvent</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Pigment-certified consulting firm specializing in connected planning
              implementation and advisory.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://ca.linkedin.com/company/amventconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-accent/20 border border-white/[0.08] hover:border-accent/30 flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Implementation", href: "/services/pigment-implementation" },
                { label: "Connected Planning", href: "/services/connected-planning" },
                { label: "Migration", href: "/services/platform-migration" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-white transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact-us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-white transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a href="mailto:info@amventconsulting.com" className="hover:text-white transition-colors duration-300">
                  info@amvent<wbr />consulting.com
                </a>
              </li>
              <li>
                <a href="tel:+16476762039" className="hover:text-white transition-colors duration-300">
                  +1 (647) 676-2039
                </a>
              </li>
              <li>Toronto, Canada</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Amvent Consulting Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Official Pigment Implementation Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
