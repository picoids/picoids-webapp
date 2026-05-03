import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import BlogPostingJsonLd from "./BlogPostingJsonLd";

type Props = {
  headline: string;
  description: string;
  datePublished: string;
  dateLabel: string;
  path: string;
  categoryTag: string;
  readTime: string;
  authorName?: string;
  children: React.ReactNode;
};

export default function BlogArticleLayout({
  headline,
  description,
  datePublished,
  dateLabel,
  path,
  categoryTag,
  readTime,
  authorName = "Picoids Team",
  children,
}: Props) {
  return (
    <div className="min-h-screen">
      <BlogPostingJsonLd
        headline={headline}
        description={description}
        datePublished={datePublished}
        authorName={authorName}
        path={path}
      />
      <Header />

      <header className="theme-page-hero">
        <div className="container-custom">
          <div className="theme-page-intro">
            <Link href="/blog" className="theme-link-back-hero">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to insights
            </Link>

            <div className="theme-article-hero-card">
              <div className="flex items-center flex-wrap gap-3 mb-6">
                <span className="theme-chip-accent">{categoryTag}</span>
                <span className="text-theme-subtle text-sm">{readTime}</span>
              </div>

              <h1 className="theme-article-title">{headline}</h1>

              <p className="theme-article-lede">{description}</p>

              <div className="theme-article-meta-row">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2 shrink-0" />
                  {authorName}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 shrink-0" />
                  {dateLabel}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 shrink-0" />
                  {readTime}
                </div>
                <button type="button" className="theme-share-trigger">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding bg-theme-surface">
        <div className="container-custom">
          <article className="theme-article-body-shell">
            <div className="theme-article-prose">{children}</div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
