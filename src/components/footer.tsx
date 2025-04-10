import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/banking-and-finance" className="hover:text-blue-500 transition-colors">
                Banking and Finance
              </Link>
            </li>
            <li>
              <Link href="/corporate" className="hover:text-blue-500 transition-colors">
                Corporate
              </Link>
            </li>
            <li>
              <Link href="/dispute-resolution-litigation" className="hover:text-blue-500 transition-colors">
                Dispute Resolution
              </Link>
            </li>
            <li>
              <Link href="/intellectual-property" className="hover:text-blue-500 transition-colors">
                Intellectual Property
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span className="block text-gray-400">Phone:</span>
              <a href="tel:+1234567890" className="hover:text-blue-500 transition-colors">
                +1 234 567 890
              </a>
            </li>
            <li>
              <span className="block text-gray-400">Email:</span>
              <a href="mailto:info@example.com" className="hover:text-blue-500 transition-colors">
                info@example.com
              </a>
            </li>
            <li>
              <span className="block text-gray-400">Address:</span>
              <p>123 Main Street, City, Country</p>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sayyid & Shaykh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;