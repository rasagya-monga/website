import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Anaplan to Pigment Migration | Platform Migration Services | Amvent",
  description:
    "Migrate from Anaplan, Adaptive Insights, or spreadsheets to Pigment. Proven playbook from the team that migrated 200+ users at Gusto.",
};

export default function PlatformMigrationPage() {
  return (
    <ServiceDetailPage
      title="Platform Migration"
      subtitle="From Anaplan, Adaptive, or spreadsheets — to Pigment, without the pain."
      overview="Migrating planning platforms is high-stakes. Get it wrong and you lose user trust, data integrity, and months of productivity. We've done this before — including a 200+ user migration from Anaplan to Pigment at Gusto — and we have a proven playbook to get it right."
      phases={[
        {
          title: "Migration Assessment",
          items: [
            "Source platform audit (Anaplan, Adaptive Insights, Excel/Sheets)",
            "Feature parity analysis",
            "Risk identification and mitigation planning",
          ],
        },
        {
          title: "Data Migration",
          items: [
            "Data extraction and cleansing",
            "Historical data migration strategy",
            "Validation and reconciliation",
          ],
        },
        {
          title: "Parallel Run & Cutover",
          items: [
            "Parallel operation period for confidence building",
            "Phased cutover plan",
            "Rollback procedures",
          ],
        },
        {
          title: "User Transition",
          items: [
            "Change management and communication",
            "Hands-on training for all user roles",
            "Hypercare support post-migration",
          ],
        },
      ]}
      ctaHeadline="Planning a migration?"
      ctaBody="Let's talk about your timeline and scope."
    />
  );
}
