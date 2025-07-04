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
  Star,
  Globe,
  Settings,
} from "lucide-react";

export default function Home() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      content:
        "Picoids transformed our legacy systems and helped us achieve 40% cost savings while improving performance.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content:
        "Their cloud migration expertise was invaluable. We went from on-premise to fully cloud-native in 6 months.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, Global Retail",
      content:
        "The AI integration project exceeded our expectations. Our customer service efficiency improved by 60%.",
      rating: 5,
    },
  ];

  const insights = [
    {
      title: "The Future of Cloud Computing in 2024",
      excerpt:
        "Explore the latest trends and technologies shaping the cloud computing landscape.",
      date: "Dec 15, 2024",
      category: "Cloud Services",
    },
    {
      title: "Building Scalable Microservices Architecture",
      excerpt:
        "Learn best practices for designing and implementing microservices for modern applications.",
      date: "Dec 10, 2024",
      category: "Application Development",
    },
    {
      title: "AI-Powered Business Transformation",
      excerpt:
        "How artificial intelligence is revolutionizing business processes and decision-making.",
      date: "Dec 5, 2024",
      category: "AI Integration",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-600 mb-8 drop-shadow-sm">
              Your Digital Transformation Partner
            </h1>
            <div className="mb-16">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-lg font-medium">
                <div className="flex flex-col items-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Brain className="h-8 w-8 text-blue-700" />
                  </div>
                  <span className="text-blue-700 font-semibold">
                    Vision & Innovation
                  </span>
                  <span className="text-slate-500 text-sm mt-2 text-center max-w-32">
                    Stay ahead with future-ready solutions
                  </span>
                </div>
                <div className="hidden sm:block h-20 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                <div className="flex flex-col items-center group">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-green-600 font-semibold">
                    Agility & Speed
                  </span>
                  <span className="text-slate-500 text-sm mt-2 text-center max-w-32">
                    Accelerate your time to market
                  </span>
                </div>
                <div className="hidden sm:block h-20 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                <div className="flex flex-col items-center group">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Shield className="h-8 w-8 text-purple-700" />
                  </div>
                  <span className="text-purple-700 font-semibold">
                    Trust & Reliability
                  </span>
                  <span className="text-slate-500 text-sm mt-2 text-center max-w-32">
                    Dependable, secure, and scalable
                  </span>
                </div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-8 tracking-wide uppercase">
              A decade in technology development and consulting
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="btn-primary inline-flex items-center text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center text-lg px-8 py-4 border-2 hover:bg-slate-50 transition-all duration-300"
              >
                Get a Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What You Get
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real benefits that drive your business forward and deliver
              measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Faster Time to Market
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Launch your products 50% faster with our streamlined development
                process and proven methodologies.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Cost Savings
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Reduce development costs by up to 40% while improving quality
                and performance.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Expert Support
              </h3>
              <p className="text-slate-600 leading-relaxed">
                24/7 technical support and dedicated account managers to ensure
                your success.
              </p>
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

      {/* Client Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by leading companies across industries for their digital
              transformation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed text-lg">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
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
