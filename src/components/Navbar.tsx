"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Pigment Implementation", href: "/services/pigment-implementation", desc: "End-to-end deployment" },
      { label: "Connected Planning", href: "/services/connected-planning", desc: "Strategic advisory" },
      { label: "Platform Migration", href: "/services/platform-migration", desc: "Seamless transitions" },
    ],
  },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_40px_rgba(0,0,0,0.06)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link href="/" className="relative group">
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-navy" : "text-white"}`}>
            Amvent
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-1 ${
                    scrolled
                      ? "text-charcoal hover:text-accent hover:bg-accent/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div
                  className={`absolute top-full left-0 pt-3 transition-all duration-300 ${
                    servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-border/50 p-2 min-w-[280px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex flex-col gap-0.5 px-4 py-3 rounded-xl text-charcoal hover:bg-accent/5 transition-all duration-200 group/item"
                      >
                        <span className="text-sm font-semibold group-hover/item:text-accent transition-colors">
                          {child.label}
                        </span>
                        <span className="text-xs text-slate">{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-charcoal hover:text-accent hover:bg-accent/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/book-a-call"
            className="ml-3 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] shimmer-button"
          >
            Book a Call
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className={`w-6 h-6 transition-colors ${scrolled ? "text-charcoal" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-border/50 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-semibold text-charcoal py-3 px-4 rounded-xl hover:bg-accent/5 hover:text-accent transition-all"
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-slate pl-8 py-2 px-4 rounded-xl hover:bg-accent/5 hover:text-accent transition-all"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-3">
            <Link
              href="/book-a-call"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-3 bg-accent text-white text-sm font-semibold rounded-xl"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
