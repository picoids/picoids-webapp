import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";

export const metadata = {
  title: "Case Studies - Picoids Technology and Consulting",
  description:
    "Explore our successful projects and see how we've helped businesses achieve digital transformation and growth.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "cloud-migration-retail",
      title: "Cloud Migration for Global Retail Chain",
      industry: "Retail",
      challenge:
        "A major retail chain was struggling with legacy on-premise systems that couldn't handle peak holiday traffic, resulting in frequent outages and poor customer experience.",
      solution:
        "We designed and implemented a comprehensive cloud migration strategy using AWS, including auto-scaling infrastructure, microservices architecture, and real-time inventory management.",
      results: [
        "40% reduction in infrastructure costs",
        "99.9% uptime during peak seasons",
        "60% faster checkout process",
        "Real-time inventory tracking across 500+ stores",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "React", "Node.js"],
      duration: "6 months",
      team: "8 developers",
    },
    {
      id: "ai-customer-service",
      title: "AI-Powered Customer Service Platform",
      industry: "E-commerce",
      challenge:
        "An e-commerce platform was overwhelmed with customer support requests, leading to long response times and declining customer satisfaction scores.",
      solution:
        "We developed an AI-powered customer service platform with natural language processing, automated ticket routing, and intelligent response suggestions.",
      results: [
        "80% reduction in response time",
        "70% of queries resolved automatically",
        "95% customer satisfaction improvement",
        "50% reduction in support staff workload",
      ],
      technologies: ["Python", "TensorFlow", "NLP", "React", "FastAPI"],
      duration: "4 months",
      team: "6 developers",
    },
    {
      id: "mobile-app-development",
      title: "Cross-Platform Mobile App for Healthcare",
      industry: "Healthcare",
      challenge:
        "A healthcare provider needed a mobile app to connect patients with doctors, manage appointments, and provide telemedicine services.",
      solution:
        "We built a comprehensive cross-platform mobile application using React Native with secure video calling, appointment scheduling, and health record management.",
      results: [
        "50,000+ active users within 6 months",
        "90% user satisfaction rating",
        "30% increase in appointment bookings",
        "HIPAA compliant and secure",
      ],
      technologies: ["React Native", "Node.js", "WebRTC", "MongoDB", "AWS"],
      duration: "8 months",
      team: "10 developers",
    },
    {
      id: "legacy-modernization",
      title: "Legacy System Modernization for Financial Services",
      industry: "Financial Services",
      challenge:
        "A financial institution was using 20-year-old legacy systems that were expensive to maintain, difficult to scale, and posed security risks.",
      solution:
        "We modernized their core banking systems by implementing microservices architecture, containerization, and modern security protocols.",
      results: [
        "60% reduction in maintenance costs",
        "5x faster transaction processing",
        "Enhanced security compliance",
        "Improved developer productivity",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
      ],
      duration: "12 months",
      team: "15 developers",
    },
    {
      id: "data-analytics-platform",
      title: "Real-Time Data Analytics Platform",
      industry: "Manufacturing",
      challenge:
        "A manufacturing company needed real-time insights into their production processes to optimize efficiency and reduce waste.",
      solution:
        "We developed a real-time data analytics platform that collects data from IoT sensors and provides actionable insights through interactive dashboards.",
      results: [
        "25% improvement in production efficiency",
        "15% reduction in material waste",
        "Real-time monitoring of 1000+ sensors",
        "Predictive maintenance capabilities",
      ],
      technologies: [
        "Python",
        "Apache Kafka",
        "Elasticsearch",
        "React",
        "D3.js",
      ],
      duration: "5 months",
      team: "7 developers",
    },
    {
      id: "ecommerce-transformation",
      title: "E-commerce Platform Transformation",
      industry: "E-commerce",
      challenge:
        "An established e-commerce business was losing market share due to slow website performance and poor mobile experience.",
      solution:
        "We completely rebuilt their e-commerce platform with modern technologies, improved UX/UI, and implemented advanced features like AI-powered recommendations.",
      results: [
        "3x faster page load times",
        "40% increase in mobile conversions",
        "25% boost in average order value",
        "Improved search and recommendation accuracy",
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AI/ML"],
      duration: "7 months",
      team: "12 developers",
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
              Case studies
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Representative engagements illustrating approach, stack choices,
              and measurable outcomes. Detail pages coming soon for full
              narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-slate-300 transition-all bg-white shadow-sm"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
                    <span className="border border-slate-200 bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium uppercase tracking-wide">
                      {study.industry}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                        Challenge
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                        Solution
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
                      Key results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-start text-sm gap-2">
                          <TrendingUp className="h-4 w-4 text-slate-500 mt-0.5 shrink-0" />
                          <span className="text-slate-700 leading-snug">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="border border-slate-200 bg-slate-50 text-slate-700 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="btn-primary inline-flex items-center"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-slate-900 text-white border-y border-slate-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2 tabular-nums tracking-tight">
                150+
              </div>
              <div className="text-slate-400 text-sm">Projects delivered</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2 tabular-nums tracking-tight">
                50+
              </div>
              <div className="text-slate-400 text-sm">Client relationships</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2 tabular-nums tracking-tight">
                99.9%
              </div>
              <div className="text-slate-400 text-sm">Target availability</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2 tabular-nums tracking-tight">
                24/7
              </div>
              <div className="text-slate-400 text-sm">Support posture</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50 border-b border-slate-200/80">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Explore a similar engagement
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Share industry, constraints, and success metrics—we&apos;ll map
              where Picoids can add leverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center">
                Services overview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
