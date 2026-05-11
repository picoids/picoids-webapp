import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

type ComingSoonPageProps = {
  eyebrow: string;
  description: string;
};

export default function ComingSoonPage({
  eyebrow,
  description,
}: ComingSoonPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 theme-page-hero flex items-center">
        <div className="container-custom py-20 md:py-28 w-full">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-theme-subtle mb-4">
              {eyebrow}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-theme-fg mb-6 tracking-tight">
              Coming soon
            </h1>
            <p className="text-lg text-theme-muted leading-relaxed mb-10">
              {description}
            </p>
            <Link
              href="/"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-base px-6 py-3"
            >
              <ArrowLeft className="h-5 w-5 shrink-0" aria-hidden />
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
