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
  Layers,
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
    },
    {
      icon: Layers,
      title: "Enterprise Business Platforms",
      slug: "enterprise-platforms",
      description:
        "SAP, Salesforce, ServiceNow, and similar platforms—integrations, migrations, and governed delivery.",
      intro:
        "Connect ERP, CRM, and enterprise workflow platforms with integrations and delivery discipline",
      keyAreas: [
        "SAP",
        "Salesforce",
        "ServiceNow",
        "Integrations",
        "Governance",
      ],
      cta: "Explore enterprise platforms",
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
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="theme-page-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-theme-fg mb-6 tracking-tight">
              Services
            </h1>
            <p className="text-lg text-theme-muted leading-relaxed">
              Advisory and delivery across cloud, engineering, modernization,
              AI, and operations—structured for enterprise governance and clear
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="theme-page-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="border border-theme-border rounded-xl p-8 shadow-sm hover:shadow-md hover:border-theme-border-strong transition-all duration-200 bg-theme-surface"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-theme-surface-soft rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-theme-icon-strong" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-theme-fg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-theme-muted mb-4 text-sm leading-relaxed">
                      {service.intro}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-theme-subtle mb-2">
                        Key areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.keyAreas.map((area) => (
                          <span
                            key={area}
                            className="border border-theme-border bg-theme-surface-muted text-theme-icon-strong px-2.5 py-1 rounded-md text-xs font-medium"
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
      <section className="theme-band-cta">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Scope your next engagement
            </h2>
            <p className="text-lg text-theme-on-inverse-muted mb-10 leading-relaxed">
              Tell us about priorities and constraints—we&apos;ll propose a
              practical path, whether advisory, delivery, or blended.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-theme-surface px-8 py-3.5 text-base font-medium text-theme-fg shadow-sm hover:bg-theme-surface-soft transition-colors"
              >
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-md border border-theme-inverse-outline px-8 py-3.5 text-base font-medium text-white hover:bg-theme-inverse-hover transition-colors"
              >
                Case studies
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
