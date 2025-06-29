import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft, FileText, Calendar, Scale, Users } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Please read these terms carefully before using our website and
              services.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Last Updated: December 2024
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Effective Date: December 1, 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                  Agreement to Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  These Terms of Service (&quot;Terms&quot;) govern your use of
                  the website and services provided by Picoids Technology and
                  Consulting Pvt. Ltd. (&quot;Company,&quot; &quot;we,&quot;
                  &quot;our,&quot; or &quot;us&quot;).
                </p>
                <p className="text-gray-600">
                  By accessing or using our website and services, you agree to
                  be bound by these Terms. If you disagree with any part of
                  these terms, you may not access our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Description of Services
                </h2>
                <p className="text-gray-600 mb-4">
                  Picoids provides technology consulting and development
                  services, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Cloud services and infrastructure solutions</li>
                  <li>Application development and modernization</li>
                  <li>AI integration and machine learning solutions</li>
                  <li>Mobile application development</li>
                  <li>Technology consulting and strategy</li>
                  <li>App maintenance and support services</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  User Responsibilities
                </h2>
                <p className="text-gray-600 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account and information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-gray-600 mb-4">
                  All content, features, and functionality on our website,
                  including but not limited to text, graphics, logos, and
                  software, are owned by Picoids and are protected by copyright,
                  trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-600">
                  You may not reproduce, distribute, modify, or create
                  derivative works of our content without our express written
                  consent.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Payment Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  For paid services, the following terms apply:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>
                    All fees are quoted in Indian Rupees (INR) unless otherwise
                    specified
                  </li>
                  <li>Payment is due upon receipt of invoice</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>Prices are subject to change with prior notice</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, Picoids shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including but not limited to loss of
                  profits, data, or use.
                </p>
                <p className="text-gray-600">
                  Our total liability shall not exceed the amount paid by you
                  for the specific service giving rise to the claim.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Disclaimers
                </h2>
                <p className="text-gray-600 mb-4">
                  Our services are provided &quot;as is&quot; and &quot;as
                  available&quot; without warranties of any kind, either express
                  or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Our services will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>
                    Our website is free of viruses or other harmful components
                  </li>
                  <li>
                    The results obtained from using our services will be
                    accurate or reliable
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Termination
                </h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your access to our services
                  immediately, without prior notice, for any reason, including
                  breach of these Terms.
                </p>
                <p className="text-gray-600">
                  Upon termination, your right to use our services will cease
                  immediately, and we may delete your account and data.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Governing Law
                </h2>
                <p className="text-gray-600 mb-4">
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes arising from these Terms
                  shall be subject to the exclusive jurisdiction of the courts
                  in Bikaner, Rajasthan.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these Terms at any time. We
                  will notify users of any material changes by posting the new
                  Terms on this page and updating the &quot;Last Updated&quot;
                  date.
                </p>
                <p className="text-gray-600">
                  Your continued use of our services after such changes
                  constitutes acceptance of the new Terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Scale className="h-5 w-5 text-blue-600 mr-3" />
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
