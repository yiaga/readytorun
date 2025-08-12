import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "ELECTIVE OFFICES", href: "/offices" },
    { label: "IMPACT STORIES", href: "/stories" },
    { label: "RESOURCES", href: "/resources" },
    { label: "GET INVOLVED", href: "/get-involved" },
    { label: "CONTACT US", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">Ready</span>
              <span className="text-accent">ToRun</span>
            </div>
          </Link> */}
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <img
                  src="/assets/images/logo.jpeg"
                  alt="ReadyToRun Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="text-2xl font-bold">
              <span className="text-primary">Ready</span>
              <span className="text-accent">ToRun</span>
            </div>
            </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive(item.href) ? "text-accent" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="secondary" asChild>
              <Link to="/register">REGISTER NOW</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent px-4 py-2",
                    isActive(item.href) ? "text-accent" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <Button variant="secondary" asChild className="w-full">
                  <Link to="/register">REGISTER NOW</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;