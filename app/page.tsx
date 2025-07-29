import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 section-padding relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-ping"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Fresh Perspective • 2025 Incorporated
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-600 mb-6 drop-shadow-sm">
                Your Digital Transformation Partner
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-6 leading-relaxed">
                We bridge the gap between traditional business practices and
                cutting-edge technology solutions
              </p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Incorporated in 2025, we bring a fresh, dynamic approach to
                technology consulting. Our team combines years of industry
                experience with modern methodologies to deliver innovative
                solutions that drive real business transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Link
                  href="/services"
                  className="btn-primary inline-flex items-center text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center text-lg px-8 py-4 border-2 hover:bg-slate-50 transition-all duration-300 transform hover:scale-105"
                >
                  Get a Consultation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Key Benefits */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      Vision & Innovation
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Stay ahead with future-ready solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      Agility & Speed
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Accelerate your time to market
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      Trust & Reliability
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Dependable, secure, and scalable
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine fresh perspectives with proven expertise to deliver
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Fresh Perspective, Proven Expertise
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    While we&apos;re a 2025 startup, our team brings over 10+
                    years of combined experience in technology development and
                    consulting. We offer the energy and innovation of a new
                    company with the wisdom of seasoned professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Modern Approach with Traditional Reliability
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We combine the speed and innovation of modern methodologies
                    with the reliability and thoroughness of traditional
                    consulting. You get agile delivery without compromising on
                    quality, security, or stability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Reliable Delivery with Agile Speed
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

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Personalized Partnership
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
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        2-4
                      </div>
                      <div className="text-sm text-slate-600">Week Sprints</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        8+
                      </div>
                      <div className="text-sm text-slate-600">Industries</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        10+
                      </div>
                      <div className="text-sm text-slate-600">
                        Years Experience
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">
                        Enterprise Security
                      </span>
                      <span className="text-sm font-bold text-blue-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">
                        Agile Methodology
                      </span>
                      <span className="text-sm font-bold text-blue-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">
                        Modern Tech Stack
                      </span>
                      <span className="text-sm font-bold text-blue-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">
                        Direct Expert Access
                      </span>
                      <span className="text-sm font-bold text-blue-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">
                        Quality Assurance
                      </span>
                      <span className="text-sm font-bold text-blue-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        24/7 Support
                      </span>
                      <span className="text-sm font-bold text-blue-600">✓</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 mt-4">
                    <div className="text-sm font-medium text-slate-600 mb-3 text-center">
                      Industry Experience
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Insurance</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">E-commerce</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Hospitality</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Education</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Law Enforcement</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Telecom</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Banks & Finance</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">ERPs</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/services/web-development"
              className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Web Development
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Modern, responsive websites and web applications built with
                cutting-edge technologies.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services/mobile-development"
              className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                Mobile Development
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Native and cross-platform mobile applications for iOS and
                Android platforms.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services/cloud-solutions"
              className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cloud className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Cloud Solutions
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Scalable cloud infrastructure and migration services for modern
                businesses.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services/consulting"
              className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Technology Consulting
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Strategic technology guidance to optimize your digital
                transformation journey.
              </p>
              <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services/going-mobile"
              className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                Going Mobile
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Transform your business with mobile-first strategies and
                solutions.
              </p>
              <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services/custom-solutions"
              className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                Custom Solutions
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Tailored software solutions designed to meet your specific
                business requirements.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
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
                  <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                    {insight.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
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
      <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s discuss how our technology solutions can drive your
              business forward and accelerate your digital transformation
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-slate-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center text-lg shadow-lg hover:shadow-xl"
              >
                Get a Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center text-lg"
              >
                Explore Services
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
