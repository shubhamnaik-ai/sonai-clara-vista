import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Link, useLocation } from "react-router-dom";
import BookVisitForm from "@/components/BookVisitForm";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Sonai Clara", href: "#sonai-clara" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";
  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    // Check scroll position immediately on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter nav items for different pages
  const currentNavItems = isProjectsPage || isContactPage
    ? navItems.filter(item => !item.href.startsWith("#") || item.href === "#home")
    : navItems;

  return (
    <nav 
      className={cn(
        "transition-all duration-300",
        isProjectsPage || isContactPage
          ? "bg-deepblue py-3 shadow-md" 
          : isScrolled 
            ? "bg-white shadow-md py-3" 
            : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b069e163-9f57-41f8-82e1-550ae81c592a.png" 
            alt="Sonai Realty Logo"
            className="h-10" 
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {currentNavItems.map((item) => (
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={(isProjectsPage || isContactPage) ? "/" + item.href : item.href}
                className={cn(
                  "text-sm tracking-wide hover:text-gold transition-colors",
                  isProjectsPage || isContactPage
                    ? "text-white" 
                    : isScrolled 
                      ? "text-charcoal" 
                      : "text-white"
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm tracking-wide hover:text-gold transition-colors",
                  isProjectsPage || isContactPage
                    ? "text-white" 
                    : isScrolled 
                      ? "text-charcoal" 
                      : "text-white"
                )}
              >
                {item.label}
              </Link>
            )
          ))}
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-gold hover:bg-gold-dark text-white font-medium rounded-none px-6 py-2"
              >
                Book Now
              </Button>
            </DialogTrigger>
            <BookVisitForm />
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden hover:text-gold", 
            isProjectsPage || isContactPage
              ? "text-white" 
              : isScrolled 
                ? "text-charcoal" 
                : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={cn(
          "lg:hidden fixed top-[61px] left-0 right-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          {currentNavItems.map((item) => (
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={(isProjectsPage || isContactPage) ? "/" + item.href : item.href}
                className="block py-3 text-charcoal hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="block py-3 text-charcoal hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-gold hover:bg-gold-dark text-white font-medium rounded-none px-6 py-2 mt-4 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Button>
            </DialogTrigger>
            <BookVisitForm />
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
