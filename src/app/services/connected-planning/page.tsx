import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Connected Planning Advisory | Amvent Consulting",
  description:
    "Build a roadmap to unified planning across FP&A, Sales, and Operations. Move from fragmented processes to a single source of truth with Pigment.",
};

export default function ConnectedPlanningPage() {
  return (
    <ServiceDetailPage
      title="Connected Planning Advisory"
      subtitle="One plan. One system. One source of truth."
      overview="Connected planning isn't a feature you turn on — it's a strategic shift in how your organization plans, collaborates, and makes decisions. We help you build the roadmap to get there, gradually and intentionally."
      phases={[
        {
          title: "Assessment",
          items: [
            "Planning maturity audit across finance, sales, and operations",
            "Gap analysis: where are the disconnects?",
            "Technology landscape review",
          ],
        },
        {
          title: "Roadmap Design",
          items: [
            "Phased connected planning roadmap",
            "Cross-functional process alignment",
            "KPI and metric framework",
            "Continuous planning cadence design (moving beyond annual budgets)",
          ],
        },
        {
          title: "S&OP Design",
          items: [
            "Structured 5-step monthly S&OP cycle",
            "Demand-supply alignment process",
            "Executive IBP review framework",
          ],
        },
        {
          title: "Change Management",
          items: [
            "Stakeholder alignment and communication plans",
            "Organizational readiness assessment",
            "Adoption metrics and feedback loops",
          ],
        },
      ]}
      ctaHeadline="Let's build your planning roadmap."
      ctaBody="Book a call to get started."
    />
  );
}
