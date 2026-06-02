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
      <div className="text-center py-16 px-8 bg-surface rounded-2xl border border-border">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Message sent!</h3>
        <p className="text-slate">We&apos;ll get back to you within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
          Work Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          placeholder="Company name"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
          How can we help?
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        >
          <option value="">Select a service</option>
          <option value="implementation">Pigment Implementation</option>
          <option value="planning">Connected Planning Advisory</option>
          <option value="migration">Platform Migration</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message <span className="text-slate font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
