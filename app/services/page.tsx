import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Code,
  Shield,
  Zap,
  Smartphone,
  Brain,
  Users,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Our Services - Picoids Technology and Consulting",
  description:
    "Comprehensive technology services including cloud solutions, application development, AI integration, and digital transformation.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      slug: "cloud-services",
      description:
        "Achieve agility and scale with secure, scalable cloud solutions on AWS, Azure, or GCP.",
      intro:
        "Architect your future with secure, scalable ecosystems on AWS, Azure, or GCP",
      keyAreas: [
        "Strategy",
        "Migration",
        "Infra Mgmt",
        "Security",
        "Cost Optimization",
      ],
      cta: "Discuss your cloud journey",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Code,
      title: "Application Development",
      slug: "application-development",
      description:
        "Build robust web and mobile applications using modern technology stacks.",
      intro: "Build robust web and mobile apps using modern tech stacks",
      keyAreas: ["Web", "Mobile", "Enterprise Apps", "API Integration"],
      cta: "Bring your app idea to life",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "App Maintenance & Support",
      slug: "app-maintenance",
      description:
        "Ensure peak performance and uptime with proactive application care.",
      intro: "Proactive care for your applications with 24/7 reliability",
      keyAreas: [
        "Monitoring",
        "Bug Fixing",
        "Enhancements",
        "Security Patching",
      ],
      cta: "Secure your applications' future",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Zap,
      title: "App Modernization",
      slug: "app-modernization",
      description:
        "Transform legacy systems for improved performance and scalability.",
      intro:
        "Improve performance, cost-efficiency, and scalability through modernization",
      keyAreas: ["Legacy Migration", "Microservices", "Containers", "DevOps"],
      cta: "Modernize your apps for performance",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Smartphone,
      title: "Going Mobile",
      slug: "going-mobile",
      description:
        "Create responsive native or cross-platform mobile experiences.",
      intro:
        "Reach users everywhere with responsive native or cross-platform mobile experiences",
      keyAreas: ["Mobile Strategy", "Dev", "UI/UX", "Enterprise Mobility"],
      cta: "Unlock the power of mobile",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Brain,
      title: "AI Integration",
      slug: "ai-integration",
      description:
        "Leverage AI/ML to automate, predict, and optimize business workflows.",
      intro: "Leverage AI/ML to automate, predict, and optimize workflows",
      keyAreas: ["Predictive Analytics", "NLP", "Vision", "Generative AI"],
      cta: "Infuse intelligence into your operations",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Users,
      title: "Technology Consulting",
      slug: "technology-consulting",
      description:
        "Expert guidance to navigate digital challenges confidently.",
      intro: "Expert guidance to navigate digital challenges confidently",
      keyAreas: [
        "IT Strategy",
        "Cybersecurity",
        "Infra",
        "Analytics",
        "Transformation",
      ],
      cta: "Gain a strategic edge",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: BarChart3,
      title: "Tech Staffing",
      slug: "tech-staffing",
      description:
        "Fill critical gaps with vetted developers, architects, and consultants.",
      intro:
        "Fill critical gaps with vetted developers, architects, and consultants",
      keyAreas: ["Contract", "Contract-to-Hire", "Direct Hire"],
      cta: "Find the right tech talent",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: CheckCircle,
      title: "Technology Audits & Optimization",
      slug: "tech-audits",
      description:
        "Evaluate and optimize your systems, code, and infrastructure.",
      intro: "Evaluate and optimize your systems, code, and infrastructure",
      keyAreas: ["IT", "Security", "Performance", "Cost", "Compliance Audits"],
      cta: "Optimize your tech investment",
      color: "bg-red-100 text-red-600",
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
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business
              forward. From cloud migration to AI integration, we have the
              expertise to transform your digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.intro}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Areas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.keyAreas.map((area) => (
                          <span
                            key={area}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-primary inline-flex items-center"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your specific needs and find the perfect
              solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Get a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                View Case Studies
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
