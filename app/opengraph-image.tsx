import { ImageResponse } from "next/og";
import { OgBrandMarkup } from "./components/OgBrandMarkup";

export const runtime = "edge";

export const alt = "Picoids Technology and Consulting";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgBrandMarkup />, { ...size });
}
