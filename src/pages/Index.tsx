
import React, { useEffect, useState } from "react";
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
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setContentVisible(true), 100); // Small delay before showing content
  };
  
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

  // Preload critical images
  useEffect(() => {
    const preloadImages = () => {
      const imagesToPreload = [
        "/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png",  // Hero bg
        "/lovable-uploads/d742cfde-c5d6-4275-b50b-4e848cef3033.png"   // Floor plan
      ];
      
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div 
        className={`min-h-screen bg-dark-gradient transition-opacity duration-1000 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="subtle-pattern absolute inset-0 opacity-30 z-0"></div>
        <div className={`transition-all duration-1000 delay-100 transform ${
          contentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <Navbar />
        </div>
        <div className={`transition-all duration-1000 delay-200 transform ${
          contentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <Hero />
        </div>
        <div className={`transition-all duration-1000 delay-300 transform ${
          contentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <AboutUs />
        </div>
        <div className="geometric-pattern relative py-16">
          <ProjectHighlights />
        </div>
        <div>
          <Amenities />
        </div>
        <div className="bg-dark-pattern">
          <FloorPlans />
        </div>
        <div>
          <Location />
        </div>
        <div className="bg-dark-gradient">
          <Gallery />
        </div>
        <div>
          <ContactUs />
        </div>
        <div>
          <Footer />
        </div>
        
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
    </>
  );
};

export default Index;
