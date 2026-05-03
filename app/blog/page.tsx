import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Blog & Insights - Picoids Technology and Consulting",
  description:
    "Stay updated with the latest technology trends, insights, and best practices from our expert team.",
};

export default function BlogPage() {
  const articles = [
    {
      id: "reliability-vs-ai-uses",
      title: "Reliability vs AI Uses: When Innovation Out-Runs Trust",
      excerpt:
        "Artificial-intelligence systems promise speed, scale and insight—but when we shortcut the engineering discipline that underpins reliability, those same systems can break in spectacular ways. Learn from real-world cautionary tales.",
      author: "Picoids Team",
      date: "Jun 20, 2025",
      category: "AI Integration",
      readTime: "15 min read",
      featured: true,
    },
    {
      id: "cloud-computing-2024",
      title: "The Future of Cloud Computing: Trends and Predictions",
      excerpt:
        "Explore the latest trends and technologies shaping the cloud computing landscape, from edge computing to serverless architectures.",
      author: "Picoids Team",
      date: "Jun 15, 2025",
      category: "Cloud Services",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: "microservices-architecture",
      title: "Building Scalable Microservices Architecture: Best Practices",
      excerpt:
        "Learn best practices for designing and implementing microservices for modern applications, including service discovery and data consistency.",
      author: "Picoids Team",
      date: "Jun 12, 2025",
      category: "Application Development",
      readTime: "12 min read",
      featured: false,
    },
    {
      id: "ai-business-transformation",
      title: "AI-Powered Business Transformation: A Complete Guide",
      excerpt:
        "How artificial intelligence is revolutionizing business processes and decision-making across industries.",
      author: "Picoids Team",
      date: "Jun 10, 2025",
      category: "AI Integration",
      readTime: "15 min read",
      featured: false,
    },
    {
      id: "cybersecurity-best-practices",
      title: "Essential Cybersecurity Best Practices for 2024",
      excerpt:
        "Protect your business with these essential cybersecurity practices and stay ahead of evolving threats.",
      author: "Picoids Team",
      date: "Jun 8, 2025",
      category: "Technology Consulting",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: "mobile-app-development-trends",
      title: "Mobile App Development Trends That Will Dominate 2024",
      excerpt:
        "Discover the latest trends in mobile app development, from cross-platform frameworks to emerging technologies.",
      author: "Picoids Team",
      date: "Jun 7, 2025",
      category: "Going Mobile",
      readTime: "9 min read",
      featured: false,
    },
    {
      id: "devops-automation",
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      excerpt:
        "Learn how to implement effective DevOps automation to improve deployment speed and reliability.",
      author: "Picoids Team",
      date: "Jun 5, 2025",
      category: "App Modernization",
      readTime: "11 min read",
      featured: false,
    },
    {
      id: "data-analytics-strategies",
      title: "Data Analytics Strategies for Business Growth",
      excerpt:
        "Unlock the power of data analytics to drive business growth and make informed decisions.",
      author: "Picoids Team",
      date: "Jun 3, 2025",
      category: "Technology Consulting",
      readTime: "13 min read",
      featured: false,
    },
    {
      id: "legacy-system-modernization",
      title: "Legacy System Modernization: When and How to Start",
      excerpt:
        "A comprehensive guide to modernizing legacy systems and transforming your technology infrastructure.",
      author: "Picoids Team",
      date: "Jun 1, 2025",
      category: "App Modernization",
      readTime: "14 min read",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200/80 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              Insights
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Notes on engineering discipline, cloud, AI, and delivery—from the
              Picoids team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">
              Featured
            </h2>
            {articles
              .filter((article) => article.featured)
              .map((article) => (
                <div
                  key={article.id}
                  className="border border-slate-200 rounded-xl p-8 bg-slate-50/50 shadow-sm"
                >
                  <div className="flex items-center flex-wrap gap-3 mb-4">
                    <span className="border border-slate-200 bg-white text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${article.id}`}
                      className="btn-primary inline-flex items-center"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles
              .filter((article) => !article.featured)
              .map((article) => (
                <div
                  key={article.id}
                  className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-slate-300 transition-all bg-white shadow-sm flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="border border-slate-200 bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-slate-500 text-sm shrink-0">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-col gap-3 mt-auto pt-2">
                      <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <Link
                        href={`/blog/${article.id}`}
                        className="text-sm font-medium text-slate-900 hover:text-slate-700 inline-flex items-center"
                      >
                        Read article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav
              className="flex items-center gap-1 border border-slate-200 rounded-lg p-1 bg-slate-50"
              aria-label="Pagination"
            >
              <button
                type="button"
                className="px-3 py-2 text-sm text-slate-500 hover:text-slate-900 rounded-md"
              >
                Previous
              </button>
              <button
                type="button"
                className="px-3 py-2 text-sm bg-slate-900 text-white rounded-md font-medium"
              >
                1
              </button>
              <button
                type="button"
                className="px-3 py-2 text-sm text-slate-700 hover:bg-white rounded-md"
              >
                2
              </button>
              <button
                type="button"
                className="px-3 py-2 text-sm text-slate-700 hover:bg-white rounded-md"
              >
                3
              </button>
              <button
                type="button"
                className="px-3 py-2 text-sm text-slate-500 hover:text-slate-900 rounded-md"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-slate-900 text-white border-t border-slate-800">
        <div className="container-custom">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
              Stay informed
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
              Occasional updates on engineering practice and delivery—no spam.
              (Newsletter wiring can connect to your provider when ready.)
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 px-4 py-3 rounded-md border border-slate-600 bg-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-md bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors"
              >
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
