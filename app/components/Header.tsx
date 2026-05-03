"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: "Cloud Services", href: "/services/cloud-services" },
    {
      name: "Application Development",
      href: "/services/application-development",
    },
    { name: "App Maintenance & Support", href: "/services/app-maintenance" },
    { name: "App Modernization", href: "/services/app-modernization" },
    { name: "Going Mobile", href: "/services/going-mobile" },
    { name: "AI Integration", href: "/services/ai-integration" },
    { name: "Technology Consulting", href: "/services/technology-consulting" },
    { name: "Tech Staffing", href: "/services/tech-staffing" },
    { name: "Technology Audits & Optimization", href: "/services/tech-audits" },
    { name: "Custom Solutions", href: "/services/custom-solutions" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (!isServicesOpen && !isMenuOpen) return;
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setIsServicesOpen(false);
      setIsMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isServicesOpen, isMenuOpen]);

  const getLinkClasses = (href: string) => {
    const baseClasses = "transition-colors";
    const activeClasses =
      "text-slate-900 font-medium border-b-2 border-slate-900";
    const inactiveClasses = "text-slate-600 hover:text-slate-900";

    return `${baseClasses} ${isActive(href) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 relative">
              <Image
                src="/picoids-logo-without-name.svg"
                alt="Picoids Logo"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <div className="w-28 h-5 relative">
              <Image
                src="/company-name-logo.svg"
                alt="Picoids Technology and Consulting"
                width={112}
                height={20}
                className="w-full h-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center text-slate-600 hover:text-slate-900 transition-colors ${
                  isActive("/services")
                    ? "text-slate-900 font-medium border-b-2 border-slate-900"
                    : ""
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="desktop-services-menu"
                onClick={() => setIsServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden />
              </button>

              {/* pt-2 bridges the gap below the trigger so hover stays inside this subtree (margin would not). */}
              <div
                id="desktop-services-menu"
                role="region"
                aria-label="Service offerings"
                aria-hidden={!isServicesOpen}
                className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                  isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
              >
                <div className="bg-white shadow-md rounded-lg border border-slate-200 py-1">
                  <div className="grid grid-cols-1 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        tabIndex={isServicesOpen ? undefined : -1}
                        className={`px-4 py-2 hover:bg-slate-50 transition-colors duration-200 ${getLinkClasses(
                          service.href
                        )}`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className={getLinkClasses("/about")}>
              About
            </Link>
            {/* <Link href="/case-studies" className={getLinkClasses("/case-studies")}>Case Studies</Link> */}
            <Link href="/blog" className={getLinkClasses("/blog")}>
              Insights
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact")}>
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-primary shadow-sm hover:shadow-md transition-all duration-300"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-primary-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-primary-nav"
            className="md:hidden border-t border-slate-200 py-4 bg-white"
          >
            <nav className="flex flex-col space-y-4" aria-label="Mobile primary">
              <Link href="/" className={getLinkClasses("/")}>
                Home
              </Link>
              <Link href="/services" className={getLinkClasses("/services")}>
                Services
              </Link>
              <Link href="/about" className={getLinkClasses("/about")}>
                About
              </Link>
              {/* <Link href="/case-studies" className={getLinkClasses("/case-studies")}>Case Studies</Link> */}
              <Link href="/blog" className={getLinkClasses("/blog")}>
                Insights
              </Link>
              <Link href="/contact" className={getLinkClasses("/contact")}>
                Contact
              </Link>
              <Link
                href="/contact"
                className="btn-primary inline-block text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                Get Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
