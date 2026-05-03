import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Cloud,
  Shield,
  Zap,
  Smartphone,
  Brain,
  Users,
  Globe,
  Settings,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Picoids Technology and Consulting | Your Digital Transformation Partner",
  },
  description:
    "Fresh technology consulting for cloud, applications, AI integration, and digital transformation. Incorporated in 2025—we combine proven delivery with modern methodologies.",
  openGraph: {
    title: "Picoids — Your Digital Transformation Partner",
    description:
      "Technology consulting, cloud services, application development, and AI integration for modern businesses.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="theme-page-hero">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div className="text-left">
              <p className="inline-block text-xs font-medium uppercase tracking-widest text-theme-subtle mb-6 border border-theme-border rounded-md px-3 py-1.5 bg-theme-surface">
                Est. 2025 · Technology consulting
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold text-theme-fg mb-6 tracking-tight text-balance leading-tight">
                Your digital transformation partner
              </h1>

              <p className="text-lg md:text-xl text-theme-muted mb-5 leading-relaxed max-w-xl font-normal">
                We bridge traditional operations and modern engineering—cloud,
                applications, and AI—with disciplined delivery.
              </p>

              <p className="text-base text-theme-muted mb-10 leading-relaxed max-w-xl">
                Incorporated in 2025, Picoids combines senior practitioner
                experience with a focused, client-direct model built for
                outcomes—not overhead.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="btn-primary inline-flex items-center justify-center text-base px-8 py-3.5 shadow-sm"
                >
                  Explore services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center text-base px-8 py-3.5"
                >
                  Request a consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Key Benefits */}
            <div className="space-y-4">
              <div className="bg-theme-surface rounded-xl border border-theme-border p-6 shadow-sm hover:border-theme-border-strong transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-theme-surface-soft rounded-lg p-3 shrink-0">
                    <Brain className="h-7 w-7 text-theme-icon-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-theme-fg mb-1">
                      Vision & innovation
                    </h3>
                    <p className="text-theme-muted text-sm leading-relaxed">
                      Future-ready architecture and roadmaps aligned to your
                      business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-theme-surface rounded-xl border border-theme-border p-6 shadow-sm hover:border-theme-border-strong transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-theme-surface-soft rounded-lg p-3 shrink-0">
                    <Zap className="h-7 w-7 text-theme-icon-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-theme-fg mb-1">
                      Agility & speed
                    </h3>
                    <p className="text-theme-muted text-sm leading-relaxed">
                      Iterative delivery without compromising governance or
                      quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-theme-surface rounded-xl border border-theme-border p-6 shadow-sm hover:border-theme-border-strong transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-theme-surface-soft rounded-lg p-3 shrink-0">
                    <Shield className="h-7 w-7 text-theme-icon-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-theme-fg mb-1">
                      Trust & reliability
                    </h3>
                    <p className="text-theme-muted text-sm leading-relaxed">
                      Security-minded engineering and operational resilience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-theme-surface">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-theme-fg mb-4 tracking-tight">
              Why Picoids
            </h2>
            <p className="text-lg text-theme-muted leading-relaxed">
              A focused consultancy model: senior expertise, direct access, and
              delivery discipline across cloud, applications, and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-theme-surface-soft rounded-lg flex items-center justify-center shrink-0">
                  <Brain className="h-5 w-5 text-theme-icon-strong" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-fg mb-2">
                    Fresh perspective, proven expertise
                  </h3>
                  <p className="text-theme-muted leading-relaxed">
                    While we&apos;re a 2025 startup, our team brings over 10+
                    years of combined experience in technology development and
                    consulting. We offer the energy and innovation of a new
                    company with the wisdom of seasoned professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-theme-surface-soft rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-theme-icon-strong" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-fg mb-2">
                    Modern methods, traditional reliability
                  </h3>
                  <p className="text-theme-muted leading-relaxed">
                    We combine the speed and innovation of modern methodologies
                    with the reliability and thoroughness of traditional
                    consulting. You get agile delivery without compromising on
                    quality, security, or stability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-theme-surface-soft rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 text-theme-icon-strong" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-fg mb-2">
                    Reliable delivery at agile pace
                  </h3>
                  <p className="text-theme-muted leading-relaxed">
                    Our proven agile methodology delivers faster time-to-market
                    while maintaining enterprise-grade reliability. We provide
                    regular client feedback, rapid adaptation to changes, and
                    incremental value delivery without sacrificing quality or
                    stability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-theme-surface-soft rounded-lg flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-theme-icon-strong" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-fg mb-2">
                    Direct access to practitioners
                  </h3>
                  <p className="text-theme-muted leading-relaxed">
                    As a smaller, focused team, we provide direct access to our
                    experts. No layers of management or junior consultants—you
                    work directly with the team that will deliver your project.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div>
              <div className="rounded-xl border border-theme-border bg-theme-surface-muted/80 p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-4 text-center">
                      <div className="text-xl font-semibold text-theme-fg mb-1 tabular-nums">
                        2–4
                      </div>
                      <div className="text-xs text-theme-muted uppercase tracking-wide">
                        Week sprints
                      </div>
                    </div>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-4 text-center">
                      <div className="text-xl font-semibold text-theme-fg mb-1 tabular-nums">
                        8+
                      </div>
                      <div className="text-xs text-theme-muted uppercase tracking-wide">
                        Industries
                      </div>
                    </div>
                    <div className="bg-theme-surface rounded-lg border border-theme-border p-4 text-center">
                      <div className="text-xl font-semibold text-theme-fg mb-1 tabular-nums">
                        10+
                      </div>
                      <div className="text-xs text-theme-muted uppercase tracking-wide">
                        Yrs experience
                      </div>
                    </div>
                  </div>

                  <div className="bg-theme-surface rounded-lg border border-theme-border p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-theme-subtle mb-4">
                      Delivery standards
                    </p>
                    <ul className="space-y-3 text-sm">
                      {[
                        "Enterprise security posture",
                        "Agile governance",
                        "Modern tech stack",
                        "Direct expert access",
                        "Quality assurance",
                        "Operational support",
                      ].map((label) => (
                        <li
                          key={label}
                          className="flex items-center justify-between text-theme-icon-strong"
                        >
                          <span>{label}</span>
                          <span className="text-theme-faint" aria-hidden>
                            ✓
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-theme-surface rounded-lg border border-theme-border p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-theme-subtle mb-4">
                      Industry exposure
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-theme-icon-strong">
                      {[
                        "Insurance",
                        "E-commerce",
                        "Hospitality",
                        "Education",
                        "Law enforcement",
                        "Telecom",
                        "Banks & finance",
                        "ERPs",
                      ].map((label) => (
                        <div
                          key={label}
                          className="flex items-center justify-between border-b border-theme-border-light pb-2"
                        >
                          <span>{label}</span>
                          <span className="text-theme-faint" aria-hidden>
                            ✓
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="theme-page-section-muted">
        <div className="container-custom">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-theme-fg mb-4 tracking-tight">
              Capabilities
            </h2>
            <p className="text-lg text-theme-muted leading-relaxed">
              End-to-end technology services—from strategy and architecture to
              build, modernization, and operational support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/services/web-development"
              className="group flex flex-col bg-theme-surface rounded-xl border border-theme-border p-8 shadow-sm hover:shadow-md hover:border-theme-border-strong transition-all duration-200"
            >
              <div className="w-14 h-14 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-theme-icon-strong" />
              </div>
              <h3 className="text-xl font-semibold text-theme-fg mb-3 group-hover:text-theme-icon-strong">
                Web development
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed mb-8 flex-1">
                Responsive web applications engineered for performance,
                accessibility, and maintainability.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-theme-fg">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/cloud-solutions"
              className="group flex flex-col bg-theme-surface rounded-xl border border-theme-border p-8 shadow-sm hover:shadow-md hover:border-theme-border-strong transition-all duration-200"
            >
              <div className="w-14 h-14 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-6">
                <Cloud className="h-7 w-7 text-theme-icon-strong" />
              </div>
              <h3 className="text-xl font-semibold text-theme-fg mb-3 group-hover:text-theme-icon-strong">
                Cloud solutions
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed mb-8 flex-1">
                Migration, platform engineering, and cost-aware operations on
                major cloud providers.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-theme-fg">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/enterprise-platforms"
              className="group flex flex-col bg-theme-surface rounded-xl border border-theme-border p-8 shadow-sm hover:shadow-md hover:border-theme-border-strong transition-all duration-200"
            >
              <div className="w-14 h-14 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-6">
                <Layers className="h-7 w-7 text-theme-icon-strong" />
              </div>
              <h3 className="text-xl font-semibold text-theme-fg mb-3 group-hover:text-theme-icon-strong">
                Enterprise platforms
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed mb-8 flex-1">
                SAP, Salesforce, ServiceNow, and similar stacks—integrations,
                migrations, and governed delivery.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-theme-fg">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/technology-consulting"
              className="group flex flex-col bg-theme-surface rounded-xl border border-theme-border p-8 shadow-sm hover:shadow-md hover:border-theme-border-strong transition-all duration-200"
            >
              <div className="w-14 h-14 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-theme-icon-strong" />
              </div>
              <h3 className="text-xl font-semibold text-theme-fg mb-3 group-hover:text-theme-icon-strong">
                Technology consulting
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed mb-8 flex-1">
                Architecture, vendor alignment, and transformation planning with
                measurable outcomes.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-theme-fg">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/going-mobile"
              className="group flex flex-col bg-theme-surface rounded-xl border border-theme-border p-8 shadow-sm hover:shadow-md hover:border-theme-border-strong transition-all duration-200"
            >
              <div className="w-14 h-14 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-theme-icon-strong" />
              </div>
              <h3 className="text-xl font-semibold text-theme-fg mb-3 group-hover:text-theme-icon-strong">
                Going mobile
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed mb-8 flex-1">
                Mobile-first strategy, product design, and rollout support for
                field and customer channels.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-theme-fg">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/custom-solutions"
              className="group flex flex-col bg-theme-surface rounded-xl border border-theme-border p-8 shadow-sm hover:shadow-md hover:border-theme-border-strong transition-all duration-200"
            >
              <div className="w-14 h-14 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-7 w-7 text-theme-icon-strong" />
              </div>
              <h3 className="text-xl font-semibold text-theme-fg mb-3 group-hover:text-theme-icon-strong">
                Custom solutions
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed mb-8 flex-1">
                Bespoke software and integrations tailored to regulated and
                complex environments.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-theme-fg">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      {/*
      <section className="section-padding bg-theme-surface">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-theme-fg mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-theme-muted max-w-3xl mx-auto">
              Stay updated with the latest technology trends and insights from
              our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-theme-surface-muted rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-theme-border-light hover:border-theme-border group"
              >
                <div className="p-8">
                  <span className="text-sm text-theme-muted font-semibold uppercase tracking-wide">
                    {insight.category}
                  </span>
                  <h3 className="text-xl font-bold text-theme-fg mt-3 mb-4 group-hover:text-theme-icon-strong transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-theme-muted mb-6 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-theme-subtle font-medium">
                      {insight.date}
                    </span>
                    <Link
                      href="/blog"
                      className="text-theme-fg hover:text-theme-icon-strong font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="btn-secondary text-lg px-8 py-4 border-2 hover:bg-theme-surface-muted transition-all duration-300"
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="theme-band-cta">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 tracking-tight text-balance">
              Discuss your next initiative
            </h2>
            <p className="text-lg text-theme-on-inverse-muted mb-10 leading-relaxed">
              Share objectives, constraints, and timelines—we&apos;ll respond
              with a concise view of how we can help, without a lengthy sales
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-theme-surface px-8 py-3.5 text-base font-medium text-theme-fg shadow-sm hover:bg-theme-surface-soft transition-colors"
              >
                Contact us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-theme-inverse-outline px-8 py-3.5 text-base font-medium text-white hover:bg-theme-inverse-hover transition-colors"
              >
                All services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
