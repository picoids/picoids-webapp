export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  dateLabel: string;
  datePublished: string;
  category: string;
  readTime: string;
  featured: boolean;
};

/** Display order: featured first in data; remaining sorted newest → oldest (2026). */
export const blogArticles: BlogArticle[] = [
  {
    slug: "reliability-vs-ai-uses",
    title: "Reliability vs AI Uses: When Innovation Out-Runs Trust",
    excerpt:
      "Artificial-intelligence systems promise speed, scale and insight—but when we shortcut the engineering discipline that underpins reliability, those same systems can break in spectacular ways. Learn from real-world cautionary tales.",
    author: "Picoids Team",
    dateLabel: "Jan 28, 2026",
    datePublished: "2026-01-28T09:00:00+05:30",
    category: "AI Integration",
    readTime: "15 min read",
    featured: true,
  },
  {
    slug: "cloud-computing-2024",
    title: "The Future of Cloud Computing in 2026: Trends and Predictions",
    excerpt:
      "Explore the latest trends and technologies shaping the cloud computing landscape, from edge computing to serverless architectures.",
    author: "Picoids Team",
    dateLabel: "Jan 25, 2026",
    datePublished: "2026-01-25T09:00:00+05:30",
    category: "Cloud Services",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "microservices-architecture",
    title: "Building Scalable Microservices Architecture: Best Practices",
    excerpt:
      "Learn best practices for designing and implementing microservices for modern applications, including service discovery and data consistency.",
    author: "Picoids Team",
    dateLabel: "Jan 22, 2026",
    datePublished: "2026-01-22T09:00:00+05:30",
    category: "Application Development",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "ai-business-transformation",
    title: "AI-Powered Business Transformation: A Complete Guide",
    excerpt:
      "How artificial intelligence is revolutionizing business processes and decision-making across industries.",
    author: "Picoids Team",
    dateLabel: "Jan 19, 2026",
    datePublished: "2026-01-19T09:00:00+05:30",
    category: "AI Integration",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "cybersecurity-best-practices",
    title: "Essential Cybersecurity Best Practices for 2026",
    excerpt:
      "Protect your business with these essential cybersecurity practices and stay ahead of evolving threats.",
    author: "Picoids Team",
    dateLabel: "Jan 16, 2026",
    datePublished: "2026-01-16T09:00:00+05:30",
    category: "Technology Consulting",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "mobile-app-development-trends",
    title: "Mobile App Development Trends That Will Dominate 2026",
    excerpt:
      "Discover the latest trends in mobile app development, from cross-platform frameworks to emerging technologies.",
    author: "Picoids Team",
    dateLabel: "Jan 13, 2026",
    datePublished: "2026-01-13T09:00:00+05:30",
    category: "Going Mobile",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "devops-automation",
    title: "DevOps Automation: Streamlining Your Development Pipeline",
    excerpt:
      "Learn how to implement effective DevOps automation to improve deployment speed and reliability.",
    author: "Picoids Team",
    dateLabel: "Jan 10, 2026",
    datePublished: "2026-01-10T09:00:00+05:30",
    category: "App Modernization",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "data-analytics-strategies",
    title: "Data Analytics Strategies for Business Growth",
    excerpt:
      "Unlock the power of data analytics to drive business growth and make informed decisions.",
    author: "Picoids Team",
    dateLabel: "Jan 7, 2026",
    datePublished: "2026-01-07T09:00:00+05:30",
    category: "Technology Consulting",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "legacy-system-modernization",
    title: "Legacy System Modernization: When and How to Start",
    excerpt:
      "A comprehensive guide to modernizing legacy systems and transforming your technology infrastructure.",
    author: "Picoids Team",
    dateLabel: "Jan 4, 2026",
    datePublished: "2026-01-04T09:00:00+05:30",
    category: "App Modernization",
    readTime: "14 min read",
    featured: false,
  },
];

export const BLOG_POSTS_PER_PAGE = 6;

export function getBlogSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}
