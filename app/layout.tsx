import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
