import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring the
              security of your personal information.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Last Updated: December 2024
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                Version: 1.0
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 mb-4">
                  Picoids Technology and Consulting Pvt. Ltd. ("we," "our," or
                  "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website or use our
                  services.
                </p>
                <p className="text-gray-600">
                  By using our website and services, you consent to the data
                  practices described in this policy.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Personal Information
                    </h3>
                    <p className="text-gray-600 mb-3">
                      We may collect personal information that you voluntarily
                      provide to us, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>
                        Name and contact information (email, phone number)
                      </li>
                      <li>Company name and job title</li>
                      <li>Project requirements and business information</li>
                      <li>
                        Resume and employment history (for job applications)
                      </li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Automatically Collected Information
                    </h3>
                    <p className="text-gray-600 mb-3">
                      When you visit our website, we automatically collect
                      certain information, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website and search terms</li>
                      <li>Device information and operating system</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect for various purposes,
                  including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Providing and improving our services</li>
                  <li>Responding to your inquiries and requests</li>
                  <li>Sending you relevant information about our services</li>
                  <li>Processing job applications and recruitment</li>
                  <li>Analyzing website usage and improving user experience</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in
                  the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>
                    With trusted service providers who assist us in operating
                    our website and services
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Data Security
                </h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience, analyze website traffic, and
                  understand where our visitors are coming from. You can control
                  cookie settings through your browser preferences.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Third-Party Links
                </h2>
                <p className="text-gray-600 mb-4">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  external sites. We encourage you to review their privacy
                  policies.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-600 mb-4">
                  Our services are not intended for children under the age of
                  13. We do not knowingly collect personal information from
                  children under 13. If you believe we have collected such
                  information, please contact us immediately.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last Updated" date.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-900 font-medium">Email:</span>
                      <span className="text-gray-600 ml-2">
                        connect@picoids.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-900 font-medium">
                        Address:
                      </span>
                      <span className="text-gray-600 ml-2">
                        Bikaner, Rajasthan, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
