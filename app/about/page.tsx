import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Award,
  TrendingUp,
  Heart,
  Zap,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "About Us - Picoids Technology and Consulting",
  description:
    "Learn about our mission, values, and approach to delivering innovative technology solutions for modern businesses.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "We put our clients first, understanding their unique challenges and delivering solutions that exceed expectations.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We stay ahead of technology trends and leverage cutting-edge solutions to drive business transformation.",
    },
    {
      icon: Shield,
      title: "Quality",
      description:
        "We maintain the highest standards of quality in every project, ensuring reliable and scalable solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and foster strong partnerships with our clients and team members.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Combined Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "On Demand Support" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="theme-page-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-theme-fg mb-6 tracking-tight">
              About Picoids
            </h1>
            <p className="text-lg text-theme-muted leading-relaxed">
              A focused technology consultancy helping organizations execute on
              cloud, applications, and AI—with clarity and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="theme-page-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-theme-fg mb-6 tracking-tight">
                Our story
              </h2>
              <p className="text-lg text-theme-muted mb-6 leading-relaxed">
                Incorporated in 2025, Picoids Technology and Consulting Pvt.
                Ltd. was born from a vision to bridge the gap between
                traditional business practices and cutting-edge technology
                solutions.
              </p>
              <p className="text-lg text-theme-muted mb-6 leading-relaxed">
                As a focused firm incorporated in 2025, we bring
                together passionate technologists who believe that every
                business, regardless of size, deserves access to world-class
                technology solutions that drive growth and innovation.
              </p>
              <p className="text-lg text-theme-muted leading-relaxed">
                Though we&apos;re early in our journey, our team brings
                years of combined experience and expertise, ready to become a
                trusted partner for enterprises and startups alike, delivering
                transformative solutions that help our clients stay ahead in an
                increasingly digital world.
              </p>
            </div>
            <div className="bg-theme-surface-muted border border-theme-border rounded-xl p-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-theme-surface-soft rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-7 w-7 text-theme-icon-strong" />
                </div>
                <h3 className="text-xl font-semibold text-theme-fg mb-4">
                  Our mission
                </h3>
                <p className="text-theme-muted text-sm leading-relaxed">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and competitive advantage in
                  the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="theme-page-hero">
        <div className="container-custom">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-theme-fg mb-4 tracking-tight">
              Our values
            </h2>
            <p className="text-lg text-theme-muted leading-relaxed">
              The principles that guide everything we do and every solution we
              deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-theme-surface border border-theme-border rounded-xl p-6 text-left shadow-sm"
              >
                <div className="w-11 h-11 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5 text-theme-icon-strong" />
                </div>
                <h3 className="text-lg font-semibold text-theme-fg mb-2">
                  {value.title}
                </h3>
                <p className="text-theme-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-theme-inverse text-white border-y border-theme-inverse-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-semibold text-white mb-2 tabular-nums tracking-tight">
                  {stat.number}
                </div>
                <div className="text-theme-faint text-sm leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="theme-page-section">
        <div className="container-custom">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-theme-fg mb-4 tracking-tight">
              Our approach
            </h2>
            <p className="text-lg text-theme-muted leading-relaxed">
              We follow a proven methodology that ensures successful project
              delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-theme-border rounded-xl p-8 bg-theme-surface-muted/50">
              <div className="w-11 h-11 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-5 w-5 text-theme-icon-strong" />
              </div>
              <h3 className="text-lg font-semibold text-theme-fg mb-2">
                Strategic planning
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed">
                We begin by understanding your business goals and developing a
                comprehensive strategy that aligns technology with your
                objectives.
              </p>
            </div>

            <div className="border border-theme-border rounded-xl p-8 bg-theme-surface-muted/50">
              <div className="w-11 h-11 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-4">
                <Award className="h-5 w-5 text-theme-icon-strong" />
              </div>
              <h3 className="text-lg font-semibold text-theme-fg mb-2">
                Expert execution
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed">
                Our experienced team delivers solutions using best practices and
                cutting-edge technologies, ensuring quality and performance.
              </p>
            </div>

            <div className="border border-theme-border rounded-xl p-8 bg-theme-surface-muted/50">
              <div className="w-11 h-11 bg-theme-surface-soft rounded-lg flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-theme-icon-strong" />
              </div>
              <h3 className="text-lg font-semibold text-theme-fg mb-2">
                Ongoing support
              </h3>
              <p className="text-theme-muted text-sm leading-relaxed">
                We provide continuous support and maintenance to ensure your
                solutions remain optimal and continue to drive value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="theme-band-cta">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Work with Picoids
            </h2>
            <p className="text-lg text-theme-on-inverse-muted mb-8 leading-relaxed">
              Share your objectives—we&apos;ll respond with a concise view of
              how we can support delivery and advisory needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-theme-surface px-8 py-3.5 text-base font-medium text-theme-fg shadow-sm hover:bg-theme-surface-soft transition-colors"
            >
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
