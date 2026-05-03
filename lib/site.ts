/**
 * Canonical site origin for metadata, sitemap, and structured data.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://picoids.com).
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://picoids.com";
  return raw.replace(/\/+$/, "");
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
