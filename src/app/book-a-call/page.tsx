import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Amvent Consulting",
  description:
    "Schedule a free 30-minute discovery call with Amvent Consulting. Let's discuss how Pigment can work for your organization.",
};

export default function BookACallPage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book a Discovery Call
          </h1>
          <p className="text-lg text-slate max-w-xl mx-auto">
            Schedule a free 30-minute call to discuss your planning challenges
            and explore how Pigment can work for your organization.
          </p>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-8 text-center">
          <p className="text-slate mb-6">
            Replace the placeholder below with your Calendly or Cal.com embed URL.
          </p>
          <div className="bg-white rounded-xl border border-border p-12">
            <div className="max-w-sm mx-auto space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Scheduling Widget</h3>
              <p className="text-sm text-slate">
                To add your scheduling widget, embed your Calendly or Cal.com
                link as an iframe in this section.
              </p>
              <a
                href="mailto:info@amventconsulting.com"
                className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors text-sm"
              >
                Email Us Instead
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
