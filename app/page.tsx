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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Picoids Technology and Consulting | Your Digital Transformation Partner",
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
      <section className="bg-slate-50 border-b border-slate-200/80 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div className="text-left">
              <p className="inline-block text-xs font-medium uppercase tracking-widest text-slate-500 mb-6 border border-slate-200 rounded-md px-3 py-1.5 bg-white">
                Est. 2025 · Technology consulting
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight text-balance leading-tight">
                Your digital transformation partner
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-5 leading-relaxed max-w-xl font-normal">
                We bridge traditional operations and modern engineering—cloud,
                applications, and AI—with disciplined delivery.
              </p>

              <p className="text-base text-slate-600 mb-10 leading-relaxed max-w-xl">
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
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 rounded-lg p-3 shrink-0">
                    <Brain className="h-7 w-7 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Vision & innovation
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Future-ready architecture and roadmaps aligned to your
                      business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 rounded-lg p-3 shrink-0">
                    <Zap className="h-7 w-7 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Agility & speed
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Iterative delivery without compromising governance or
                      quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 rounded-lg p-3 shrink-0">
                    <Shield className="h-7 w-7 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      Trust & reliability
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Why Picoids
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A focused consultancy model: senior expertise, direct access, and
              delivery discipline across cloud, applications, and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                  <Brain className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Fresh perspective, proven expertise
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    While we&apos;re a 2025 startup, our team brings over 10+
                    years of combined experience in technology development and
                    consulting. We offer the energy and innovation of a new
                    company with the wisdom of seasoned professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Modern methods, traditional reliability
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We combine the speed and innovation of modern methodologies
                    with the reliability and thoroughness of traditional
                    consulting. You get agile delivery without compromising on
                    quality, security, or stability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Reliable delivery at agile pace
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our proven agile methodology delivers faster time-to-market
                    while maintaining enterprise-grade reliability. We provide
                    regular client feedback, rapid adaptation to changes, and
                    incremental value delivery without sacrificing quality or
                    stability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Direct access to practitioners
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    As a smaller, focused team, we provide direct access to our
                    experts. No layers of management or junior consultants—you
                    work directly with the team that will deliver your project.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                      <div className="text-xl font-semibold text-slate-900 mb-1 tabular-nums">
                        2–4
                      </div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">
                        Week sprints
                      </div>
                    </div>
                    <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                      <div className="text-xl font-semibold text-slate-900 mb-1 tabular-nums">
                        8+
                      </div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">
                        Industries
                      </div>
                    </div>
                    <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                      <div className="text-xl font-semibold text-slate-900 mb-1 tabular-nums">
                        10+
                      </div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">
                        Yrs experience
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-slate-200 p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-4">
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
                          className="flex items-center justify-between text-slate-700"
                        >
                          <span>{label}</span>
                          <span className="text-slate-400" aria-hidden>
                            ✓
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg border border-slate-200 p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-4">
                      Industry exposure
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-700">
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
                          className="flex items-center justify-between border-b border-slate-100 pb-2"
                        >
                          <span>{label}</span>
                          <span className="text-slate-400" aria-hidden>
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
      <section className="section-padding bg-slate-50 border-t border-slate-200/80">
        <div className="container-custom">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Capabilities
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              End-to-end technology services—from strategy and architecture to
              build, modernization, and operational support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/services/web-development"
              className="group flex flex-col bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700">
                Web development
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                Responsive web applications engineered for performance,
                accessibility, and maintainability.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-slate-900">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/mobile-development"
              className="group flex flex-col bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700">
                Mobile development
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                Native and cross-platform mobile solutions for iOS and Android.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-slate-900">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/cloud-solutions"
              className="group flex flex-col bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700">
                Cloud solutions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                Migration, platform engineering, and cost-aware operations on
                major cloud providers.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-slate-900">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/technology-consulting"
              className="group flex flex-col bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700">
                Technology consulting
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                Architecture, vendor alignment, and transformation planning with
                measurable outcomes.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-slate-900">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/going-mobile"
              className="group flex flex-col bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700">
                Going mobile
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                Mobile-first strategy, product design, and rollout support for
                field and customer channels.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-slate-900">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/services/custom-solutions"
              className="group flex flex-col bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700">
                Custom solutions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                Bespoke software and integrations tailored to regulated and
                complex environments.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-slate-900">
                View capability
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      {/*
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest technology trends and insights from
              our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 group"
              >
                <div className="p-8">
                  <span className="text-sm text-slate-600 font-semibold uppercase tracking-wide">
                    {insight.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 font-medium">
                      {insight.date}
                    </span>
                    <Link
                      href="/blog"
                      className="text-slate-900 hover:text-slate-700 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
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
              className="btn-secondary text-lg px-8 py-4 border-2 hover:bg-slate-50 transition-all duration-300"
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white border-t border-slate-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 tracking-tight text-balance">
              Discuss your next initiative
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Share objectives, constraints, and timelines—we&apos;ll respond
              with a concise view of how we can help, without a lengthy sales
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-medium text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
              >
                Contact us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3.5 text-base font-medium text-white hover:bg-slate-800 transition-colors"
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
