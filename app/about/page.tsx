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

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in technology consulting and digital transformation.",
      image: "/team/alex.jpg",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Technology expert specializing in cloud architecture and AI integration.",
      image: "/team/sarah.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      bio: "Experienced engineering leader focused on scalable application development.",
      image: "/team/michael.jpg",
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
              About <span className="text-blue-600">Picoids</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We are a forward-thinking technology consulting firm dedicated to
              helping businesses achieve digital transformation through
              innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Incorporated in 2025, Picoids Technology and Consulting Pvt.
                Ltd. was born from a vision to bridge the gap between
                traditional business practices and cutting-edge technology
                solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a fresh, dynamic startup less than a year old, we bring
                together passionate technologists who believe that every
                business, regardless of size, deserves access to world-class
                technology solutions that drive growth and innovation.
              </p>
              <p className="text-lg text-gray-600">
                Though we&apos;re just beginning our journey, our team brings
                years of combined experience and expertise, ready to become a
                trusted partner for enterprises and startups alike, delivering
                transformative solutions that help our clients stay ahead in an
                increasingly digital world.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we
              deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology that ensures successful project
              delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Strategic Planning
              </h3>
              <p className="text-gray-600">
                We begin by understanding your business goals and developing a
                comprehensive strategy that aligns technology with your
                objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Execution
              </h3>
              <p className="text-gray-600">
                Our experienced team delivers solutions using best practices and
                cutting-edge technologies, ensuring quality and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                We provide continuous support and maintenance to ensure your
                solutions remain optimal and continue to drive value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who drive our success and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg p-6 text-center shadow-sm"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our expertise can help transform your
              business and drive success.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
