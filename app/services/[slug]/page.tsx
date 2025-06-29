import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Clock, Award } from "lucide-react";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    slug: string;
  };
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

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {service.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {service.intro}
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              {service.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {service.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Key Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.keyAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600 text-sm">
                      Certified professionals with years of experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Fast Delivery
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Quick turnaround times without compromising quality
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      24/7 Support
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Round-the-clock support for your peace of mind
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our {service.title.toLowerCase()} can transform your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.step}
                </h3>
                <p className="text-gray-600">{step.description}</p>
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
              Let&apos;s discuss how our {service.title.toLowerCase()} can help
              transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Get a Free Consultation
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
