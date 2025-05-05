
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled ? "py-2 shadow-md" : "py-4"
    } ${isHomePage ? "bg-white" : "bg-white"}`}>
      <div className="container-custom mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <img
            src="/lovable-uploads/b069e163-9f57-41f8-82e1-550ae81c592a.png"
            alt="Sonai Realty"
            className="h-14 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" isActive={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/projects" isActive={location.pathname === "/projects"}>
            Projects
          </NavLink>
          <NavLink to="/contact" isActive={location.pathname === "/contact"}>
            Contact
          </NavLink>
          <Button className="bg-gold hover:bg-gold-dark text-white ml-4 px-6">
            <a href="tel:+1234567890">Call Us</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white pt-24 z-0 lg:hidden overflow-auto"
            >
              <div className="container-custom mx-auto px-4 flex flex-col space-y-6 pb-8">
                <MobileNavLink to="/" isActive={location.pathname === "/"}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/projects" isActive={location.pathname === "/projects"}>
                  Projects
                </MobileNavLink>
                <MobileNavLink to="/contact" isActive={location.pathname === "/contact"}>
                  Contact
                </MobileNavLink>
                <Button className="bg-gold hover:bg-gold-dark text-white w-full py-6 mt-4">
                  <a href="tel:+1234567890">Call Us</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const NavLink = ({ children, to, isActive }) => (
  <Link 
    to={to} 
    className={`font-medium transition-colors hover:text-gold ${
      isActive ? "text-gold" : "text-charcoal"
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ children, to, isActive }) => (
  <Link 
    to={to} 
    className={`text-xl font-medium py-4 border-b border-gray-100 transition-colors ${
      isActive ? "text-gold" : "text-charcoal"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
