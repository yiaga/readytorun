import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/logo-blue.png";
import Sponsors from "./Sponsors";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Sponsors />
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src={Logo}
                alt="ReadyToRun Logo"
                className="w-[140px] h-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              A movement dedicated to inspiring young men and women to run for
              elective office in Nigeria. Providing the responsive, accountable,
              innovative, and transformative leadership Nigeria needs.
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary" asChild>
                <Link to="/register">Register to Run</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-secondary text-primary hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/volunteer">Volunteer</Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/offices"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Elective Offices
                </Link>
              </li>
              <li>
                <Link
                  to="/stories"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@readytorunng.org</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 ReadyToRun Nigeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
