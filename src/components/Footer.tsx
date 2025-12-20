/**
 * @file Footer.tsx
 * @description Global footer with brand details, navigation links, services, and contact info.
 * @module Components/Layout
 */

import React, { memo } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

/** Navigation link type */
interface NavLink {
  label: string;
  href: string;
}

/** Service type */
interface Service {
  label: string;
  href: string;
}

/** Social links type */
interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

const Footer: React.FC = memo(() => {
  const currentYear: number = new Date().getFullYear();

  const quickLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Bangles", href: "/bangles" },
    { label: "Clips & Accessories", href: "/clips" },
    { label: "All Accessories", href: "/accessories" },
    { label: "Contact", href: "/contact" },
  ];

  const services: Service[] = [
    { label: "Custom Bangle Design", href: "/contact" },
    { label: "Personalized Accessories", href: "/contact" },
    { label: "Color Customization", href: "/contact" },
    { label: "Bulk Orders", href: "/contact" },
    { label: "Gift Sets", href: "/contact" },
  ];

  const socialLinks: SocialLink[] = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/threaded_dreamsby_femmora/",
      icon: FaInstagram,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/santhiyachandru/",
      icon: FaLinkedin,
    },
  ];

  return (
    <footer
      className="bg-primary text-primary-foreground py-16"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* ---------- Brand Section (Updated with Logo) ---------- */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo-new.jpg"
                alt="Threaded Dreams Logo"
                className="h-10 w-10 object-contain"
              />

              <h3
                id="footer-heading"
                className="font-serif text-2xl font-bold"
              >
                Threaded Dreams
              </h3>
            </div>

            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Handcrafted silk thread bangles and accessories. As unique as you ✨
              Each piece is made with love and care by Femmora.
            </p>

            {/* Social Media */}
            <nav aria-label="Social Media">
              <ul className="flex space-x-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ---------- Quick Links ---------- */}
          <nav aria-label="Quick Links">
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Services ---------- */}
          <section aria-labelledby="footer-services-heading">
            <h4
              id="footer-services-heading"
              className="font-semibold text-lg mb-6"
            >
              Services
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Contact Info ---------- */}
          <address
            className="not-italic"
            aria-labelledby="footer-contact-heading"
          >
            <h4
              id="footer-contact-heading"
              className="font-semibold text-lg mb-6"
            >
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p>Tirupur, Tamil Nadu</p>
                  <p>641601</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:threadeddreams@femmora.com"
                  className="text-primary-foreground/80"
                >
                  threadeddreams@femmora.com
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* ---------- Bottom Bar ---------- */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Threaded Dreams by Femmora. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a
                    href="/legal#privacy"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/legal#terms"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/legal#cookies"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
