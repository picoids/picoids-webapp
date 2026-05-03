import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Picoids Technology and Consulting",
  description:
    "Get in touch with Picoids for technology consulting, cloud services, application development, and digital transformation. We reply within one business day.",
  openGraph: {
    title: "Contact Picoids Technology and Consulting",
    description:
      "Reach our team for consultations and project inquiries across cloud, applications, AI, and digital transformation.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
