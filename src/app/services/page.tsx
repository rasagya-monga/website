"use client";

import { AnimatedGridBackground } from "@/components/ui/animated-beam";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/text-reveal";
import { SpotlightCard } from "@/components/ui/spotlight";
import { ServiceCard } from "@/components/ServiceCard";
import { GradientCTA } from "@/components/GradientCTA";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-36 pb-24 px-6 overflow-hidden">
        <AnimatedGridBackground />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-5 block">What We Do</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              Expert Pigment consulting,{" "}
              <span className="bg-gradient-to-r from-accent via-purple to-teal bg-clip-text text-transparent">end to end.</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed">
              From strategy to go-live to ongoing optimization — we handle the full
              lifecycle so you can focus on what matters: better decisions.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Service Cards */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <ServiceCard
                icon={
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Pigment Implementation"
                description="Deploy Pigment the right way — with thoughtful dimension design, sparsity management, and access controls built for scale."
                href="/services/pigment-implementation"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                icon={
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                  </svg>
                }
                title="Connected Planning Advisory"
                description="Build a roadmap to unified planning across FP&A, Sales, and Operations. Move from fragmented processes to a single planning rhythm."
                href="/services/connected-planning"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                icon={
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                }
                title="Platform Migration"
                description="Migrate from Anaplan, Adaptive Insights, or spreadsheets to Pigment — with a proven playbook that minimizes disruption."
                href="/services/platform-migration"
              />
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <GradientCTA />
    </>
  );
}
