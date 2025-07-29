"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [convertedHours, setConvertedHours] = useState({
    morning: "",
    evening: "",
  });

  // Convert IST time to user's timezone
  const convertTime = (istTime: string, targetTimezone: string) => {
    try {
      const [time, period] = istTime.split(" ");
      const [hours, minutes] = time.split(":");

      // Create IST date
      const istDate = new Date();
      let hour = parseInt(hours);
      if (period === "PM" && hour !== 12) hour += 12;
      if (period === "AM" && hour === 12) hour = 0;

      istDate.setHours(hour, parseInt(minutes), 0, 0);

      // Convert to target timezone
      const targetDate = new Date(
        istDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      const converted = targetDate.toLocaleString("en-US", {
        timeZone: targetTimezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      return converted;
    } catch {
      return istTime; // Fallback to IST if conversion fails
    }
  };

  // Convert business hours range
  const convertBusinessHours = useCallback(
    (startTime: string, endTime: string, targetTimezone: string) => {
      const startConverted = convertTime(startTime, targetTimezone);
      const endConverted = convertTime(endTime, targetTimezone);
      return `${startConverted} - ${endConverted}`;
    },
    []
  );

  // Detect user's timezone on component mount
  useEffect(() => {
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setSelectedTimezone(detectedTimezone);

    // Convert business hours to user's timezone
    const morningConverted = convertBusinessHours(
      "9:00 AM",
      "12:00 PM",
      detectedTimezone
    );
    const eveningConverted = convertBusinessHours(
      "9:00 PM",
      "12:00 AM",
      detectedTimezone
    );

    setConvertedHours({
      morning: morningConverted,
      evening: eveningConverted,
    });
  }, [convertBusinessHours]);

  // Update converted hours when timezone changes
  useEffect(() => {
    if (selectedTimezone) {
      const morningConverted = convertBusinessHours(
        "9:00 AM",
        "12:00 PM",
        selectedTimezone
      );
      const eveningConverted = convertBusinessHours(
        "9:00 PM",
        "12:00 AM",
        selectedTimezone
      );

      setConvertedHours({
        morning: morningConverted,
        evening: eveningConverted,
      });
    }
  }, [selectedTimezone, convertBusinessHours]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Cloud Services",
    "Application Development",
    "App Maintenance & Support",
    "App Modernization",
    "Going Mobile",
    "AI Integration",
    "Technology Consulting",
    "Tech Staffing",
    "Technology Audits & Optimization",
    "Other",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">connect@picoids.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone & WhatsApp
                    </h3>
                    <p className="text-gray-600">+91 8955225869</p>
                    <p className="text-sm text-green-600 font-medium mt-1">
                      Feel free to call directly or WhatsApp us anytime!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office
                    </h3>
                    <p className="text-gray-600">
                      Hanuman street, Jailwell
                      <br />
                      Bikaner, Rajasthan, India - 334001
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Best Business Enquiry Hours
                    </h3>
                  </div>
                  <Globe className="h-5 w-5 text-gray-500" />
                </div>

                {/* Timezone Selector */}
                <div className="mb-4">
                  <label
                    htmlFor="timezone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Timezone
                  </label>
                  <select
                    id="timezone"
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="Asia/Kolkata">
                      IST (India Standard Time)
                    </option>
                    <option value="America/New_York">
                      EST (Eastern Standard Time)
                    </option>
                    <option value="America/Chicago">
                      CST (Central Standard Time)
                    </option>
                    <option value="America/Denver">
                      MST (Mountain Standard Time)
                    </option>
                    <option value="America/Los_Angeles">
                      PST (Pacific Standard Time)
                    </option>
                    <option value="Europe/London">
                      GMT (Greenwich Mean Time)
                    </option>
                    <option value="Europe/Paris">
                      CET (Central European Time)
                    </option>
                    <option value="Asia/Dubai">GST (Gulf Standard Time)</option>
                    <option value="Asia/Shanghai">
                      CST (China Standard Time)
                    </option>
                    <option value="Asia/Tokyo">
                      JST (Japan Standard Time)
                    </option>
                    <option value="Australia/Sydney">
                      AEST (Australian Eastern Standard Time)
                    </option>
                  </select>
                </div>

                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Core Hours</span>
                    <span>{convertedHours.morning}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">After Hours</span>
                    <span>{convertedHours.evening}</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              {/* <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
