import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";
import OrganizationJsonLd from "./components/OrganizationJsonLd";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: "Picoids Technology and Consulting Pvt. Ltd. - Technology Solutions",
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
    images: [
      {
        url: "/picoids-logo-with-name.svg",
        width: 1200,
        height: 630,
        alt: "Picoids Technology and Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Picoids Technology and Consulting Pvt. Ltd.",
    description: "Technology solutions for modern businesses",
    images: ["/picoids-logo-with-name.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
