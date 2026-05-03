import { absoluteUrl, getSiteUrl } from "@/lib/site";

export default function OrganizationJsonLd() {
  const url = getSiteUrl();
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: "Picoids Technology and Consulting Pvt. Ltd.",
        url,
        logo: absoluteUrl("/picoids-logo-with-name.svg"),
        email: "connect@picoids.com",
        telephone: "+91-8955225869",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hanuman street, Jailwell",
          addressLocality: "Bikaner",
          addressRegion: "Rajasthan",
          postalCode: "334001",
          addressCountry: "IN",
        },
        sameAs: ["https://www.linkedin.com/company/picoids/"],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: "Picoids Technology and Consulting",
        publisher: { "@id": `${url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
