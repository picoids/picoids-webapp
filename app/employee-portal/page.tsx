import type { Metadata } from "next";
import ComingSoonPage from "../components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Employee portal",
  description:
    "Multi-tenant employee portal for Picoids Technology and Consulting Pvt. Ltd. Sign-in and resources launching soon.",
  robots: { index: false, follow: true },
};

export default function EmployeePortalPage() {
  return (
    <ComingSoonPage
      eyebrow="Picoids Technology and Consulting"
      description="The multi-tenant employee portal for Picoids Technology and Consulting Pvt. Ltd. will be available here soon."
    />
  );
}
