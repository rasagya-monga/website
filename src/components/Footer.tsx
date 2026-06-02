import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-3">Amvent</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Pigment-certified consulting firm specializing in connected planning
              implementation and advisory.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/pigment-implementation" className="text-sm text-white/70 hover:text-white transition-colors">
                  Pigment Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/connected-planning" className="text-sm text-white/70 hover:text-white transition-colors">
                  Connected Planning
                </Link>
              </li>
              <li>
                <Link href="/services/platform-migration" className="text-sm text-white/70 hover:text-white transition-colors">
                  Platform Migration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about-us" className="text-sm text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="mailto:info@amventconsulting.com" className="hover:text-white transition-colors">
                  info@amventconsulting.com
                </a>
              </li>
              <li>
                <a href="tel:+16476762039" className="hover:text-white transition-colors">
                  +1 (647) 676-2039
                </a>
              </li>
              <li>Toronto, Canada</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Amvent Consulting Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://ca.linkedin.com/company/amventconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
