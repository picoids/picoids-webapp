import type { Metadata } from "next";
import ComingSoonPage from "../components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Picoids Labs",
  description:
    "Picoids Labs—training and development for Bikaner, plus web and mobile application services. Full site launching soon.",
  robots: { index: false, follow: true },
};

export default function PicoidsLabsPage() {
  return (
    <ComingSoonPage
      eyebrow="Picoids Labs"
      description="Our SME-focused initiative for candidate training in Bikaner and delivery of website and mobile application development will be available here soon."
    />
  );
}
