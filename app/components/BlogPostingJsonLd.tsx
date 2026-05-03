import { absoluteUrl, getSiteUrl } from "@/lib/site";

type Props = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  path: string;
};

export default function BlogPostingJsonLd({
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
  path,
}: Props) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl("/opengraph-image");
  const publisherId = `${getSiteUrl()}/#organization`;

  const payload = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: { "@id": publisherId },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    image: imageUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
