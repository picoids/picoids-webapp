import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open roles at Picoids in technology consulting, engineering, cloud, and delivery. Join a growing team focused on client outcomes.",
  openGraph: {
    title: "Careers at Picoids",
    description:
      "Open positions and opportunities at Picoids Technology and Consulting.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
