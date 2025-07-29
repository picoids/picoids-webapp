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
      title: "The Future of Cloud Computing in 2024: Trends and Predictions",
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog & <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest technology trends, insights, and best
              practices from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Article
            </h2>
            {articles
              .filter((article) => article.featured)
              .map((article) => (
                <div
                  key={article.id}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                2
              </button>
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                3
              </button>
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, trends, and
              updates from the world of technology.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
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
