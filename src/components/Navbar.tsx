
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, FileText, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      scrolled ? "py-1 shadow-md" : "py-2"
    } ${isHomePage ? "bg-white" : "bg-white"}`}>
      <div className="container-custom mx-auto flex items-center justify-between px-4">
        {/* Logo - Always on the left */}
        <Link to="/" className="relative z-10 flex-shrink-0 logo-container">
          <img
            src="/lovable-uploads/b069e163-9f57-41f8-82e1-550ae81c592a.png"
            alt="Sonai Realty"
            className="h-10 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation - Always on the right */}
        <nav className="hidden lg:flex items-center space-x-8 justify-end nav-container">
          <NavLink to="/" isActive={location.pathname === "/"} icon={<Home size={18} />}>
            Home
          </NavLink>
          <NavLink to="/projects" isActive={location.pathname === "/projects"} icon={<FileText size={18} />}>
            Projects
          </NavLink>
          <NavLink to="/contact" isActive={location.pathname === "/contact"} icon={<Mail size={18} />}>
            Contact
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button - On the right */}
        <button 
          className="lg:hidden relative z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white pt-20 z-0 lg:hidden overflow-auto"
            >
              <div className="container-custom mx-auto px-4 flex flex-col space-y-4 pb-8">
                <MobileNavLink to="/" isActive={location.pathname === "/"} icon={<Home size={20} />}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/projects" isActive={location.pathname === "/projects"} icon={<FileText size={20} />}>
                  Projects
                </MobileNavLink>
                <MobileNavLink to="/contact" isActive={location.pathname === "/contact"} icon={<Mail size={20} />}>
                  Contact
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const NavLink = ({ children, to, isActive, icon }) => (
  <Link 
    to={to} 
    className={`font-nasalization text-sm tracking-wider flex items-center gap-2 transition-colors hover:text-logo ${
      isActive ? "text-logo" : "text-charcoal"
    }`}
  >
    {icon}
    {children}
  </Link>
);

const MobileNavLink = ({ children, to, isActive, icon }) => (
  <Link 
    to={to} 
    className={`font-nasalization text-xl flex items-center gap-3 py-4 border-b border-gray-100 transition-colors ${
      isActive ? "text-logo" : "text-charcoal"
    }`}
  >
    {icon}
    {children}
  </Link>
);

export default Navbar;
