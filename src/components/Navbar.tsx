
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import BookVisitForm from "./BookVisitForm";
import { useIsMobile } from "@/hooks/use-mobile";

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
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Side Menu Button with Animation */}
          <button
            onClick={() => setSideMenuOpen(!sideMenuOpen)}
            className={cn(
              "relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none",
              isScrolled ? "text-charcoal" : "text-white"
            )}
            aria-label="Side menu"
          >
            <span className={cn(
              "block w-6 h-0.5 rounded-sm transition-all duration-300",
              isScrolled ? "bg-charcoal" : "bg-white",
              sideMenuOpen && "rotate-45 translate-y-1.5"
            )}></span>
            <span className={cn(
              "block w-6 h-0.5 rounded-sm my-1.5 transition-all duration-300",
              isScrolled ? "bg-charcoal" : "bg-white",
              sideMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "block w-6 h-0.5 rounded-sm transition-all duration-300",
              isScrolled ? "bg-charcoal" : "bg-white",
              sideMenuOpen && "-rotate-45 -translate-y-1.5"
            )}></span>
          </button>
          
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-deepblue">
              Sonai <span className="text-gold">Realty</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm tracking-wide hover:text-gold transition-colors",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              {item.label}
            </a>
          ))}
          {isMobile ? (
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="bg-gold hover:bg-gold-dark text-white font-medium rounded-none px-6 py-2">
                  Book Now
                </Button>
              </DrawerTrigger>
              <BookVisitForm />
            </Drawer>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gold hover:bg-gold-dark text-white font-medium rounded-none px-6 py-2">
                  Book Now
                </Button>
              </DialogTrigger>
              <BookVisitForm />
            </Dialog>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-charcoal hover:text-gold"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-charcoal hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {isMobile ? (
              <Drawer>
                <DrawerTrigger asChild>
                  <Button 
                    className="bg-gold hover:bg-gold-dark text-white font-medium rounded-none px-6 py-2 mt-4 w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </Button>
                </DrawerTrigger>
                <BookVisitForm />
              </Drawer>
            ) : (
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
            )}
          </div>
        </div>
      )}

      {/* Side Menu */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 bg-white shadow-lg w-64 transform transition-transform duration-300 ease-in-out z-50",
          sideMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-playfair font-bold text-deepblue">
              Sonai <span className="text-gold">Realty</span>
            </span>
            <button 
              onClick={() => setSideMenuOpen(false)}
              className="text-charcoal hover:text-gold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-charcoal hover:text-gold transition-colors border-b border-gray-100"
                onClick={() => setSideMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4">
              {isMobile ? (
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button 
                      className="bg-gold hover:bg-gold-dark text-white font-medium rounded-none px-6 py-2 w-full"
                      onClick={() => setSideMenuOpen(false)}
                    >
                      Book Now
                    </Button>
                  </DrawerTrigger>
                  <BookVisitForm />
                </Drawer>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-gold hover:bg-gold-dark text-white font-medium rounded-none px-6 py-2 w-full"
                      onClick={() => setSideMenuOpen(false)}
                    >
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <BookVisitForm />
                </Dialog>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay when side menu is open */}
      {sideMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSideMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
