import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";
import OrganizationJsonLd from "./components/OrganizationJsonLd";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default:
      "Picoids Technology and Consulting Pvt. Ltd. — Technology Solutions",
    template: "%s | Picoids Technology and Consulting",
  },
  description:
    "Leading technology consulting firm offering cloud services, application development, AI integration, and digital transformation solutions for modern businesses.",
  keywords:
    "technology consulting, cloud services, application development, AI integration, digital transformation, IT solutions",
  authors: [{ name: "Picoids Technology and Consulting Pvt. Ltd." }],
  openGraph: {
    title: "Picoids Technology and Consulting Pvt. Ltd.",
    description: "Technology solutions for modern businesses",
    type: "website",
    url: siteUrl,
    siteName: "Picoids Technology and Consulting",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Picoids Technology and Consulting Pvt. Ltd.",
    description: "Technology solutions for modern businesses",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
