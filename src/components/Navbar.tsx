"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Pigment Implementation", href: "/services/pigment-implementation", desc: "End-to-end deployment" },
      { label: "Connected Planning", href: "/services/connected-planning", desc: "Strategic roadmap & advisory" },
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
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="relative group">
          <span className={`text-lg font-bold tracking-tight transition-colors duration-500 ${scrolled ? "text-charcoal" : "text-white"}`}>
            Amvent
          </span>
        </Link>

        {/* Desktop */}
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
                  className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 inline-flex items-center gap-1.5 ${
                    scrolled
                      ? "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/[0.04]"
                      : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                  <svg className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute top-full left-0 pt-3"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-border/50 p-2 min-w-[260px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-surface transition-colors group/item"
                          >
                            <span className="text-sm font-semibold text-charcoal group-hover/item:text-accent transition-colors">{child.label}</span>
                            <span className="text-xs text-muted">{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/[0.04]"
                    : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/book-a-call"
            className={`ml-4 px-5 py-2 text-[13px] font-semibold rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-charcoal text-white hover:bg-charcoal/90"
                : "bg-white/10 text-white border border-white/10 hover:bg-white/20"
            }`}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className={`w-5 h-5 transition-colors ${scrolled ? "text-charcoal" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border/50 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-charcoal py-3 px-4 rounded-xl hover:bg-surface">
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block text-sm text-muted pl-8 py-2 px-4 rounded-xl hover:bg-surface">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-3">
                <Link href="/book-a-call" onClick={() => setMobileOpen(false)} className="block text-center px-5 py-3 bg-charcoal text-white text-sm font-semibold rounded-xl">
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
