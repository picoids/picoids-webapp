import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Clock, Award } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const services = {
  "cloud-services": {
    title: "Cloud Services",
    headline: "Achieve Agility and Scale with Cloud Solutions",
    intro:
      "Architect your future with secure, scalable ecosystems on AWS, Azure, or GCP",
    description:
      "Transform your business with enterprise-grade cloud solutions that provide scalability, security, and cost optimization. Our cloud experts help you migrate, optimize, and manage your infrastructure for maximum performance.",
    keyAreas: [
      "Strategy",
      "Migration",
      "Infra Mgmt",
      "Security",
      "Cost Optimization",
    ],
    cta: "Discuss your cloud journey",
    benefits: [
      "Scalable infrastructure that grows with your business",
      "Reduced operational costs and improved efficiency",
      "Enhanced security and compliance",
      "24/7 monitoring and support",
      "Disaster recovery and business continuity",
    ],
    process: [
      {
        step: "Assessment",
        description:
          "Evaluate your current infrastructure and identify migration opportunities",
      },
      {
        step: "Strategy",
        description:
          "Develop a comprehensive cloud migration and optimization strategy",
      },
      {
        step: "Implementation",
        description:
          "Execute the migration with minimal downtime and maximum efficiency",
      },
      {
        step: "Optimization",
        description:
          "Continuously monitor and optimize for performance and cost",
      },
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    headline: "Comprehensive Cloud Solutions for Modern Businesses",
    intro:
      "Scalable cloud infrastructure and migration services for modern businesses",
    description:
      "Transform your business with enterprise-grade cloud solutions that provide scalability, security, and cost optimization. Our cloud experts help you migrate, optimize, and manage your infrastructure for maximum performance.",
    keyAreas: [
      "Strategy",
      "Migration",
      "Infra Mgmt",
      "Security",
      "Cost Optimization",
    ],
    cta: "Discuss your cloud journey",
    benefits: [
      "Scalable infrastructure that grows with your business",
      "Reduced operational costs and improved efficiency",
      "Enhanced security and compliance",
      "24/7 monitoring and support",
      "Disaster recovery and business continuity",
    ],
    process: [
      {
        step: "Assessment",
        description:
          "Evaluate your current infrastructure and identify migration opportunities",
      },
      {
        step: "Strategy",
        description:
          "Develop a comprehensive cloud migration and optimization strategy",
      },
      {
        step: "Implementation",
        description:
          "Execute the migration with minimal downtime and maximum efficiency",
      },
      {
        step: "Optimization",
        description:
          "Continuously monitor and optimize for performance and cost",
      },
    ],
  },
  "web-development": {
    title: "Web Development",
    headline: "Modern Web Development for Digital Success",
    intro:
      "Modern, responsive websites and web applications built with cutting-edge technologies",
    description:
      "Create powerful, scalable web applications that drive your business forward. Our development team specializes in modern frameworks and technologies to deliver exceptional user experiences.",
    keyAreas: [
      "Frontend",
      "Backend",
      "Full-Stack",
      "E-commerce",
      "Progressive Web Apps",
    ],
    cta: "Build your web presence",
    benefits: [
      "Custom solutions tailored to your business needs",
      "Modern, scalable architecture",
      "Responsive design for all devices",
      "Seamless integration with existing systems",
      "Ongoing support and maintenance",
    ],
    process: [
      {
        step: "Discovery",
        description: "Understand your requirements and define project scope",
      },
      {
        step: "Design",
        description: "Create intuitive user interfaces and robust architecture",
      },
      {
        step: "Development",
        description:
          "Build your application using best practices and modern technologies",
      },
      {
        step: "Deployment",
        description:
          "Launch and maintain your application with continuous support",
      },
    ],
  },
  "mobile-development": {
    title: "Mobile Development",
    headline: "Native and Cross-Platform Mobile Applications",
    intro:
      "Native and cross-platform mobile applications for iOS and Android platforms",
    description:
      "Transform your business with powerful mobile applications that engage users and drive growth. From native iOS and Android apps to cross-platform solutions, we deliver mobile experiences that users love.",
    keyAreas: [
      "Native iOS",
      "Native Android",
      "Cross-Platform",
      "Progressive Web Apps",
    ],
    cta: "Go mobile with confidence",
    benefits: [
      "Enhanced user engagement and accessibility",
      "Increased customer reach and market penetration",
      "Improved operational efficiency with mobile workflows",
      "Real-time data access and offline capabilities",
      "Seamless integration with existing business systems",
    ],
    process: [
      {
        step: "Discovery",
        description: "Analyze user needs and define mobile strategy",
      },
      {
        step: "Design",
        description: "Create intuitive mobile interfaces and user experiences",
      },
      {
        step: "Development",
        description: "Build robust mobile apps using modern frameworks",
      },
      {
        step: "Launch",
        description: "Deploy to app stores and provide ongoing support",
      },
    ],
  },
  "application-development": {
    title: "Application Development",
    headline: "Custom Application Development for Modern Businesses",
    intro: "Build robust web and mobile apps using modern tech stacks",
    description:
      "Create powerful, scalable applications that drive your business forward. Our development team specializes in modern frameworks and technologies to deliver exceptional user experiences.",
    keyAreas: ["Web", "Mobile", "Enterprise Apps", "API Integration"],
    cta: "Bring your app idea to life",
    benefits: [
      "Custom solutions tailored to your business needs",
      "Modern, scalable architecture",
      "Cross-platform compatibility",
      "Seamless integration with existing systems",
      "Ongoing support and maintenance",
    ],
    process: [
      {
        step: "Discovery",
        description: "Understand your requirements and define project scope",
      },
      {
        step: "Design",
        description: "Create intuitive user interfaces and robust architecture",
      },
      {
        step: "Development",
        description:
          "Build your application using best practices and modern technologies",
      },
      {
        step: "Deployment",
        description:
          "Launch and maintain your application with continuous support",
      },
    ],
  },
  "app-maintenance": {
    title: "App Maintenance & Support",
    headline: "Ensure Peak Performance and Uptime",
    intro: "Proactive application care and maintenance for optimal performance",
    description:
      "Keep your applications running smoothly with our comprehensive maintenance and support services. We provide proactive monitoring, regular updates, and quick issue resolution to ensure your applications perform at their best.",
    keyAreas: ["Monitoring", "Updates", "Bug Fixes", "Performance", "Security"],
    cta: "Maintain your applications",
    benefits: [
      "Proactive monitoring and issue detection",
      "Regular security updates and patches",
      "Improved application performance and reliability",
      "Reduced downtime and business disruption",
      "24/7 support and emergency response",
    ],
    process: [
      {
        step: "Assessment",
        description: "Evaluate current application health and identify issues",
      },
      {
        step: "Monitoring",
        description: "Set up comprehensive monitoring and alerting systems",
      },
      {
        step: "Maintenance",
        description: "Perform regular updates, optimizations, and fixes",
      },
      {
        step: "Support",
        description: "Provide ongoing support and emergency response",
      },
    ],
  },
  "app-modernization": {
    title: "App Modernization",
    headline: "Transform Legacy Systems for the Future",
    intro: "Transform legacy systems for improved performance and scalability",
    description:
      "Modernize your legacy applications to improve performance, security, and user experience. Our modernization services help you migrate to modern technologies while preserving your business logic and data.",
    keyAreas: [
      "Migration",
      "Refactoring",
      "Cloud Native",
      "Microservices",
      "API",
    ],
    cta: "Modernize your applications",
    benefits: [
      "Improved performance and scalability",
      "Enhanced security and compliance",
      "Better user experience and accessibility",
      "Reduced maintenance costs",
      "Future-proof technology stack",
    ],
    process: [
      {
        step: "Analysis",
        description:
          "Assess current systems and identify modernization opportunities",
      },
      {
        step: "Strategy",
        description: "Develop modernization roadmap and migration plan",
      },
      {
        step: "Migration",
        description: "Execute modernization with minimal business disruption",
      },
      {
        step: "Optimization",
        description: "Optimize and fine-tune the modernized application",
      },
    ],
  },
  "going-mobile": {
    title: "Going Mobile",
    headline: "Mobile-First Solutions for Modern Users",
    intro: "Transform your business with mobile-first strategies and solutions",
    description:
      "Transform your business with powerful mobile applications that engage users and drive growth. From native iOS and Android apps to cross-platform solutions, we deliver mobile experiences that users love.",
    keyAreas: [
      "Native iOS",
      "Native Android",
      "Cross-Platform",
      "Progressive Web Apps",
    ],
    cta: "Go mobile with confidence",
    benefits: [
      "Enhanced user engagement and accessibility",
      "Increased customer reach and market penetration",
      "Improved operational efficiency with mobile workflows",
      "Real-time data access and offline capabilities",
      "Seamless integration with existing business systems",
    ],
    process: [
      {
        step: "Discovery",
        description: "Analyze user needs and define mobile strategy",
      },
      {
        step: "Design",
        description: "Create intuitive mobile interfaces and user experiences",
      },
      {
        step: "Development",
        description: "Build robust mobile apps using modern frameworks",
      },
      {
        step: "Launch",
        description: "Deploy to app stores and provide ongoing support",
      },
    ],
  },
  "ai-integration": {
    title: "AI Integration",
    headline: "Intelligent Automation for Smarter Business",
    intro: "Leverage AI/ML to automate, predict, and optimize workflows",
    description:
      "Harness the power of artificial intelligence to transform your business processes. From predictive analytics to natural language processing, we help you implement AI solutions that drive real results.",
    keyAreas: ["Predictive Analytics", "NLP", "Vision", "Generative AI"],
    cta: "Infuse intelligence into your operations",
    benefits: [
      "Automated decision-making and process optimization",
      "Predictive insights for better planning",
      "Enhanced customer experiences",
      "Increased operational efficiency",
      "Competitive advantage through AI capabilities",
    ],
    process: [
      {
        step: "Analysis",
        description: "Identify AI opportunities and assess data readiness",
      },
      {
        step: "Strategy",
        description:
          "Develop AI implementation roadmap and select technologies",
      },
      {
        step: "Development",
        description: "Build and train AI models with your data",
      },
      {
        step: "Integration",
        description: "Deploy AI solutions and integrate with existing systems",
      },
    ],
  },
  "technology-consulting": {
    title: "Technology Consulting",
    headline: "Strategic Technology Guidance for Digital Transformation",
    intro:
      "Strategic technology guidance to optimize your digital transformation journey",
    description:
      "Navigate the complex technology landscape with expert guidance from our consulting team. We help you make informed decisions about technology investments, architecture, and digital transformation strategies.",
    keyAreas: [
      "Strategy",
      "Architecture",
      "Digital Transformation",
      "Innovation",
    ],
    cta: "Get expert guidance",
    benefits: [
      "Strategic technology roadmap and planning",
      "Informed decision-making for technology investments",
      "Optimized architecture and system design",
      "Reduced technology risks and costs",
      "Accelerated digital transformation",
    ],
    process: [
      {
        step: "Assessment",
        description: "Evaluate current technology landscape and business needs",
      },
      {
        step: "Strategy",
        description: "Develop comprehensive technology strategy and roadmap",
      },
      {
        step: "Implementation",
        description: "Guide implementation and provide ongoing support",
      },
      {
        step: "Optimization",
        description: "Continuously optimize and evolve technology solutions",
      },
    ],
  },
  consulting: {
    title: "Technology Consulting",
    headline: "Strategic Technology Guidance for Digital Transformation",
    intro:
      "Strategic technology guidance to optimize your digital transformation journey",
    description:
      "Navigate the complex technology landscape with expert guidance from our consulting team. We help you make informed decisions about technology investments, architecture, and digital transformation strategies.",
    keyAreas: [
      "Strategy",
      "Architecture",
      "Digital Transformation",
      "Innovation",
    ],
    cta: "Get expert guidance",
    benefits: [
      "Strategic technology roadmap and planning",
      "Informed decision-making for technology investments",
      "Optimized architecture and system design",
      "Reduced technology risks and costs",
      "Accelerated digital transformation",
    ],
    process: [
      {
        step: "Assessment",
        description: "Evaluate current technology landscape and business needs",
      },
      {
        step: "Strategy",
        description: "Develop comprehensive technology strategy and roadmap",
      },
      {
        step: "Implementation",
        description: "Guide implementation and provide ongoing support",
      },
      {
        step: "Optimization",
        description: "Continuously optimize and evolve technology solutions",
      },
    ],
  },
  "tech-staffing": {
    title: "Tech Staffing",
    headline: "Expert Technology Talent for Your Projects",
    intro:
      "Connect with skilled technology professionals for your development needs",
    description:
      "Access top-tier technology talent through our staffing services. We connect you with experienced developers, engineers, and technology professionals who can help you deliver exceptional results.",
    keyAreas: [
      "Development",
      "Engineering",
      "DevOps",
      "QA",
      "Project Management",
    ],
    cta: "Find your tech talent",
    benefits: [
      "Access to pre-vetted technology professionals",
      "Flexible staffing solutions for project needs",
      "Reduced hiring time and costs",
      "Expertise in various technologies and domains",
      "Ongoing support and management",
    ],
    process: [
      {
        step: "Requirements",
        description: "Define your staffing needs and project requirements",
      },
      {
        step: "Sourcing",
        description: "Identify and screen qualified candidates",
      },
      {
        step: "Selection",
        description: "Present top candidates for your review and selection",
      },
      {
        step: "Onboarding",
        description: "Facilitate smooth onboarding and ongoing support",
      },
    ],
  },
  "tech-audits": {
    title: "Technology Audits & Optimization",
    headline: "Comprehensive Technology Assessment and Optimization",
    intro: "Evaluate and optimize your technology infrastructure and processes",
    description:
      "Get a comprehensive assessment of your technology infrastructure, processes, and performance. Our audit services identify opportunities for improvement and provide actionable recommendations for optimization.",
    keyAreas: [
      "Infrastructure",
      "Security",
      "Performance",
      "Compliance",
      "Cost",
    ],
    cta: "Audit your technology",
    benefits: [
      "Comprehensive technology assessment and analysis",
      "Identification of optimization opportunities",
      "Improved performance and efficiency",
      "Enhanced security and compliance",
      "Cost optimization and resource planning",
    ],
    process: [
      {
        step: "Assessment",
        description: "Conduct comprehensive technology audit and analysis",
      },
      {
        step: "Analysis",
        description: "Identify issues, opportunities, and optimization areas",
      },
      {
        step: "Recommendations",
        description: "Provide detailed recommendations and action plan",
      },
      {
        step: "Implementation",
        description: "Support implementation of recommended improvements",
      },
    ],
  },
  "custom-solutions": {
    title: "Custom Solutions",
    headline: "Tailored Software Solutions for Your Business",
    intro:
      "Tailored software solutions designed to meet your specific business requirements",
    description:
      "Get custom software solutions that are perfectly tailored to your business needs. Our development team works closely with you to understand your requirements and deliver solutions that drive real business value.",
    keyAreas: ["Custom Development", "Integration", "Automation", "Analytics"],
    cta: "Build custom solutions",
    benefits: [
      "Solutions perfectly tailored to your business needs",
      "Scalable and maintainable architecture",
      "Seamless integration with existing systems",
      "Ongoing support and evolution",
      "Competitive advantage through custom technology",
    ],
    process: [
      {
        step: "Discovery",
        description: "Deep dive into your business requirements and goals",
      },
      {
        step: "Design",
        description: "Design custom solution architecture and user experience",
      },
      {
        step: "Development",
        description: "Build your custom solution with quality and security",
      },
      {
        step: "Deployment",
        description: "Deploy and provide ongoing support and evolution",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  if (!service) {
    return {
      title: "Service | Picoids Technology and Consulting",
    };
  }
  return {
    title: `${service.title} | Picoids Technology and Consulting`,
    description: service.description,
    openGraph: {
      title: service.headline,
      description: service.intro,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200/80 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
              {service.headline}
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
              {service.intro}
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              {service.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section-padding bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">
                About {service.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="mb-2">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
                  Key areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.keyAreas.map((area) => (
                    <span
                      key={area}
                      className="border border-slate-200 bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Why work with Picoids
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-slate-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      Expert team
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Practitioners with deep delivery experience across
                      enterprise environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-slate-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      Predictable delivery
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Cadence and transparency aligned to your governance needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-slate-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      Dedicated support
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Responsive engagement models from advisory through run.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-slate-50 border-b border-slate-200/80">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Benefits
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Outcomes clients seek from strong {service.title.toLowerCase()}{" "}
              execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-5 w-5 text-slate-700" />
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Our process
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A structured approach from discovery through steady-state support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6 bg-slate-50/50">
                <div className="w-10 h-10 bg-slate-900 rounded-md flex items-center justify-center mb-4 text-white font-semibold text-sm tabular-nums">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.step}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white border-t border-slate-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Discuss {service.title.toLowerCase()}
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Share context on priorities and timelines—we&apos;ll respond with
              a practical engagement outline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-medium text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
              >
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3.5 text-base font-medium text-white hover:bg-slate-800 transition-colors"
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
