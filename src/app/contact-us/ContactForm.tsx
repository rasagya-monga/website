"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal/20 to-accent/10 flex items-center justify-center">
          <svg className="w-10 h-10 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
        <p className="text-slate">We&apos;ll get back to you within 1 business day.</p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-surface/50 text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 placeholder:text-slate/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
            Full Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
            Work Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-2">
          Company
        </label>
        <input id="company" name="company" type="text" required className={inputClasses} placeholder="Company name" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-2">
          How can we help?
        </label>
        <select id="service" name="service" className={inputClasses}>
          <option value="">Select a service</option>
          <option value="implementation">Pigment Implementation</option>
          <option value="planning">Connected Planning Advisory</option>
          <option value="migration">Platform Migration</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
          Message <span className="text-slate/60 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        className="group w-full px-6 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] shimmer-button inline-flex items-center justify-center gap-2"
      >
        Send Message
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </form>
  );
}
