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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Case <span className="text-blue-600">Studies</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our successful projects and see how we&apos;ve helped
              businesses achieve digital transformation and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
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

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <TrendingUp className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
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
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                150+
              </div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                99.9%
              </div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business and
              achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="btn-secondary inline-flex items-center"
              >
                Explore Our Services
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
