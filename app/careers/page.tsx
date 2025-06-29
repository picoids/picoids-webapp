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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our team and grow with us in a dynamic technology
              environment.
            </p>
          </div>

          {/* Jobs Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Assistant Engineer
                  </h3>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
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
                <span className="text-sm text-gray-500 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  New Position
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Job Description
                </h4>
                <p className="text-gray-600 mb-4">
                  We are looking for passionate Assistant Engineers who are
                  eager to learn and grow in a fast-paced technology
                  environment. This is an excellent opportunity for recent
                  graduates or early-career professionals to kickstart their
                  journey in software development.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Requirements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Programming Knowledge
                        </h5>
                        <p className="text-sm text-gray-600">
                          Knowledge of any programming language (Java, Python,
                          JavaScript, C++, etc.)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Learning Attitude
                        </h5>
                        <p className="text-sm text-gray-600">
                          Ready to work hard and learn any technology as
                          required
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Office Location
                        </h5>
                        <p className="text-sm text-gray-600">
                          Must be willing to work from office in Bikaner,
                          Rajasthan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Communication Skills
                        </h5>
                        <p className="text-sm text-gray-600">
                          Excellent verbal and written communication skills
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Academic Record
                        </h5>
                        <p className="text-sm text-gray-600">
                          Good academic track record throughout education
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Team Player
                        </h5>
                        <p className="text-sm text-gray-600">
                          Ability to work collaboratively in a team environment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  What We Offer
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Mentorship & Training
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Career Growth
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Modern Tech Stack
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Competitive Salary
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Work-Life Balance
                  </span>
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Picoids, we foster a culture of innovation, collaboration,
                and continuous learning. We believe in empowering our team
                members to take ownership of their work and make meaningful
                contributions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Innovation-Driven
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We encourage creative thinking and experimentation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Collaborative Environment
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Work with talented individuals across different
                      disciplines
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Growth Opportunities
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Continuous learning and career development support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Don&apos;t See Your Role?
              </h3>
              <p className="text-gray-600 mb-6">
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
