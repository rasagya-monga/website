import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Pigment Implementation Services | Amvent Consulting",
  description:
    "Deploy Pigment the right way with Amvent. Dimension design, sparsity management, access controls, and user training — built for scale and adoption.",
};

export default function PigmentImplementationPage() {
  return (
    <ServiceDetailPage
      title="Pigment Implementation"
      subtitle="Deploy Pigment the right way — built for scale, designed for adoption."
      overview="A Pigment implementation is only as good as its architecture. We design and deploy your Pigment environment with the same rigor we'd apply to our own — because we've done it before, at scale, and we know what separates implementations that thrive from ones that stall."
      phases={[
        {
          title: "Planning & Discovery",
          items: [
            "Stakeholder interviews and requirements gathering",
            "Current-state assessment of existing planning processes",
            "Dimension and hierarchy design",
            "Data integration mapping",
          ],
        },
        {
          title: "Build & Configure",
          items: [
            "Application architecture and model design",
            "Sparsity-optimized data structures",
            "Role-based access management (our 5-step framework)",
            "Formula and metric development",
            "Dashboard and reporting setup",
          ],
        },
        {
          title: "Test & Launch",
          items: [
            "User acceptance testing",
            "Data validation and reconciliation",
            "Phased rollout planning",
            "Go-live support",
          ],
        },
        {
          title: "Training & Enablement",
          items: [
            "Role-specific training sessions",
            "Admin training for self-sufficiency",
            "Documentation and runbooks",
          ],
        },
      ]}
      timeline="8–16 weeks depending on scope and complexity."
      ctaHeadline="Ready to implement Pigment?"
      ctaBody="Book a discovery call to scope your project."
    />
  );
}
