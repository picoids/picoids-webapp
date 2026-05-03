import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPagination from "../components/BlogPagination";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import {
  blogArticles,
  BLOG_POSTS_PER_PAGE,
} from "@/lib/blog-articles";

export const metadata = {
  title: "Blog & Insights",
  description:
    "Stay updated with the latest technology trends, insights, and best practices from our expert team.",
};

type BlogPageProps = {
  searchParams: Promise<{ page?: string }>;
};

function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: raw } = await searchParams;
  const parsed = parseInt(raw ?? "1", 10);
  const featuredArticles = blogArticles.filter((a) => a.featured);
  const nonFeatured = blogArticles.filter((a) => !a.featured);
  const totalPages = Math.max(
    1,
    Math.ceil(nonFeatured.length / BLOG_POSTS_PER_PAGE)
  );
  const requested =
    Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
  const currentPage = Math.min(requested, totalPages);
  const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
  const pageSlice = nonFeatured.slice(start, start + BLOG_POSTS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="theme-page-hero">
        <div className="container-custom">
          <div className="theme-page-intro">
            <h1 className="theme-page-heading-xl">Insights</h1>
            <p className="theme-lede">
              Notes on engineering discipline, cloud, AI, and delivery—from the
              Picoids team.
            </p>
          </div>
        </div>
      </section>

      {currentPage === 1 ? (
        <section className="theme-page-section">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="theme-section-heading">Featured</h2>
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group theme-blog-featured-card"
                >
                  <div className="flex items-center flex-wrap gap-3 mb-4">
                    <span className="theme-chip-on-surface">
                      {article.category}
                    </span>
                    <span className="text-theme-subtle text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="theme-blog-card-title-featured">
                    {article.title}
                  </h3>
                  <p className="theme-blog-card-excerpt-featured">
                    {article.excerpt}
                  </p>
                  <div className="theme-blog-card-footer">
                    <div className="theme-blog-meta-row">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 shrink-0" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 shrink-0" />
                        {article.dateLabel}
                      </div>
                    </div>
                    <span className="theme-btn-primary-static">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-theme-surface">
        <div className="container-custom">
          <div className="theme-blog-grid">
            {pageSlice.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group theme-blog-grid-card"
              >
                <div className="theme-blog-grid-card-body">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="theme-chip">{article.category}</span>
                    <span className="text-theme-subtle text-sm shrink-0">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="theme-blog-card-title-grid">{article.title}</h3>
                  <p className="theme-blog-card-excerpt-grid">{article.excerpt}</p>

                  <div className="theme-blog-card-footer-stack">
                    <div className="theme-blog-meta-row-tight">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 shrink-0" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 shrink-0" />
                        {article.dateLabel}
                      </div>
                    </div>
                    <span className="theme-blog-read-cta">
                      Read article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageHref={pageHref}
          />
        </div>
      </section>

      <section className="theme-band-cta">
        <div className="container-custom">
          <div className="theme-band-cta-inner">
            <h2 className="theme-band-heading">Stay informed</h2>
            <p className="text-theme-on-inverse-muted mb-8 leading-relaxed text-sm md:text-base">
              Occasional updates on engineering practice and delivery—no spam.
              (Newsletter wiring can connect to your provider when ready.)
            </p>
            <div className="theme-newsletter-row">
              <input
                type="email"
                placeholder="Work email"
                className="theme-newsletter-input"
              />
              <button type="button" className="theme-newsletter-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
