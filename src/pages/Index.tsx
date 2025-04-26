
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProjectHighlights from "@/components/ProjectHighlights";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => {
  // Animation on scroll functionality
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 50) {
          element.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", animateOnScroll);
    // Initial check in case elements are already in view when the page loads
    animateOnScroll();
    
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <AboutUs />
      <ProjectHighlights />
      <Amenities />
      <FloorPlans />
      <Location />
      <Gallery />
      <ContactUs />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed right-6 bottom-6 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white flex items-center justify-center shadow-lg transition-all"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 11 12 6 7 11" />
          <polyline points="17 18 12 13 7 18" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
