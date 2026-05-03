"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Job Listings */}
      <section className="theme-page-hero">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <h1 className="text-4xl md:text-5xl font-semibold text-theme-fg mb-4 tracking-tight">
              Careers at Picoids
            </h1>
            <h2 className="text-xl font-semibold text-theme-fg-soft mb-4">
              Open positions
            </h2>
            <p className="text-lg text-theme-muted leading-relaxed">
              Join a focused consultancy building serious systems—mentorship,
              modern tooling, and growth without unnecessary hierarchy.
            </p>
          </div>

          {/* Jobs Grid */}
          <div className="max-w-4xl">
            <div className="bg-theme-surface rounded-xl border border-theme-border p-8 shadow-sm hover:border-theme-border-strong transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-theme-fg mb-3">
                    Assistant Engineer
                  </h3>
                  <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-theme-muted">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Bikaner, Rajasthan, India
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Entry Level
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium uppercase tracking-wide border border-theme-border bg-theme-surface-muted text-theme-icon-strong px-2.5 py-1 rounded-md">
                  New role
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-theme-fg mb-3">
                  Job description
                </h4>
                <p className="text-theme-muted mb-4 leading-relaxed">
                  We are looking for passionate Assistant Engineers who are
                  eager to learn and grow in a fast-paced technology
                  environment. This is an excellent opportunity for recent
                  graduates or early-career professionals to kickstart their
                  journey in software development.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-theme-fg mb-3">
                  Requirements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-theme-muted mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-theme-fg">
                          Programming Knowledge
                        </h5>
                        <p className="text-sm text-theme-muted leading-relaxed">
                          Knowledge of any programming language (Java, Python,
                          JavaScript, C++, etc.)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-theme-muted mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-theme-fg">
                          Learning Attitude
                        </h5>
                        <p className="text-sm text-theme-muted leading-relaxed">
                          Ready to work hard and learn any technology as
                          required
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-theme-muted mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-theme-fg">
                          Office Location
                        </h5>
                        <p className="text-sm text-theme-muted leading-relaxed">
                          Must be willing to work from office in Bikaner,
                          Rajasthan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-theme-muted mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-theme-fg">
                          Communication Skills
                        </h5>
                        <p className="text-sm text-theme-muted leading-relaxed">
                          Excellent verbal and written communication skills
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-theme-muted mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-theme-fg">
                          Academic Record
                        </h5>
                        <p className="text-sm text-theme-muted leading-relaxed">
                          Good academic track record throughout education
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-theme-muted mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-theme-fg">
                          Team Player
                        </h5>
                        <p className="text-sm text-theme-muted leading-relaxed">
                          Ability to work collaboratively in a team environment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-theme-fg mb-3">
                  What we offer
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Mentorship & training",
                    "Career growth",
                    "Modern tech stack",
                    "Competitive salary",
                    "Work-life balance",
                  ].map((label) => (
                    <span
                      key={label}
                      className="border border-theme-border bg-theme-surface-muted text-theme-icon-strong px-2.5 py-1 rounded-md text-xs font-medium"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Send Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="theme-page-section-divider-top">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-theme-fg mb-6 tracking-tight">
                Our culture
              </h2>
              <p className="text-lg text-theme-muted mb-6 leading-relaxed">
                At Picoids, we foster a culture of innovation, collaboration,
                and continuous learning. We believe in empowering our team
                members to take ownership of their work and make meaningful
                contributions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-theme-muted mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-theme-fg">
                      Innovation-Driven
                    </h3>
                    <p className="text-theme-muted text-sm leading-relaxed">
                      We encourage creative thinking and experimentation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-theme-muted mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-theme-fg">
                      Collaborative Environment
                    </h3>
                    <p className="text-theme-muted text-sm leading-relaxed">
                      Work with talented individuals across different
                      disciplines
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-theme-muted mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-theme-fg">
                      Growth Opportunities
                    </h3>
                    <p className="text-theme-muted text-sm leading-relaxed">
                      Continuous learning and career development support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-theme-surface-muted border border-theme-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-theme-fg mb-4">
                Don&apos;t see your role?
              </h3>
              <p className="text-theme-muted mb-6 text-sm leading-relaxed">
                We&apos;re always looking for talented individuals to join our
                team. Send us your resume and let us know how you can
                contribute.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center"
              >
                Send Your Resume
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
