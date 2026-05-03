import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Cloud Services", href: "/services/cloud-services" },
    {
      name: "Application Development",
      href: "/services/application-development",
    },
    { name: "App Maintenance & Support", href: "/services/app-maintenance" },
    { name: "App Modernization", href: "/services/app-modernization" },
    {
      name: "Enterprise Platforms",
      href: "/services/enterprise-platforms",
    },
    { name: "Going Mobile", href: "/services/going-mobile" },
    { name: "AI Integration", href: "/services/ai-integration" },
    { name: "Technology Consulting", href: "/services/technology-consulting" },
    { name: "Tech Staffing", href: "/services/tech-staffing" },
    { name: "Technology Audits & Optimization", href: "/services/tech-audits" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    // { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <footer className="theme-band-footer">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/picoids-logo-without-name.svg"
                  alt="Picoids Logo"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
              <div className="w-28 h-5 relative">
                <Image
                  src="/company-name-logo-white.svg"
                  alt="Picoids Technology and Consulting"
                  width={112}
                  height={20}
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="text-theme-faint mb-6 text-sm leading-relaxed">
              Technology consulting for cloud, applications, and AI—with
              disciplined delivery and direct practitioner access.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/picoids/"
                className="text-theme-subtle hover:text-white transition-colors"
                aria-label="Picoids on LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide text-theme-faint">
              Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-theme-faint hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide text-theme-faint">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-theme-faint hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide text-theme-faint">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-theme-subtle mt-0.5 shrink-0" />
                <div>
                  <p className="text-theme-faint text-sm">connect@picoids.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-theme-subtle mt-0.5 shrink-0" />
                <div>
                  <p className="text-theme-faint text-sm">+91 8955225869</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-theme-subtle mt-0.5 shrink-0" />
                <div>
                  <p className="text-theme-faint text-sm">
                    Hanuman street, Jailwell
                    <br />
                    Bikaner, Rajasthan, India - 334001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-theme-inverse-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-theme-subtle text-sm">
              © {currentYear} Picoids Technology and Consulting Pvt. Ltd. All
              rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-theme-subtle hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-theme-subtle hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
