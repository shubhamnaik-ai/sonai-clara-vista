
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProjectHighlights from "@/components/ProjectHighlights";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Show content immediately after loading is complete
    setContentVisible(true);
    
    // Show enquiry form after a short delay
    setTimeout(() => {
      setShowEnquiry(true);
    }, 1000);
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
  }, [contentVisible]);

  // Preload critical images
  useEffect(() => {
    const preloadImages = () => {
      const imagesToPreload = [
        "/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png",  // Hero bg
        "/lovable-uploads/d742cfde-c5d6-4275-b50b-4e848cef3033.png",   // Floor plan
        "/lovable-uploads/b069e163-9f57-41f8-82e1-550ae81c592a.png"    // Logo
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
      
      {/* Enquiry Form Dialog that appears after loading */}
      <Dialog open={showEnquiry} onOpenChange={setShowEnquiry}>
        <EnquiryForm />
      </Dialog>
      
      <div 
        className={`min-h-screen bg-dark-gradient overflow-x-hidden transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="subtle-pattern absolute inset-0 opacity-30 z-0"></div>
        
        {/* Moved Navbar outside of transition container to make it appear on top of hero image */}
        <div className={`fixed top-0 left-0 w-full z-40 transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}>
          <Navbar />
        </div>
        
        <div className={`transition-all duration-1000 delay-200 transform ${
          contentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <Hero />
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <AboutUs />
        </motion.div>
        
        <motion.div 
          className="geometric-pattern relative py-16"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ProjectHighlights />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Amenities />
        </motion.div>
        
        <motion.div 
          className="bg-dark-pattern"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <FloorPlans />
        </motion.div>
        
        <motion.div 
          className="bg-dark-gradient"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Gallery />
        </motion.div>
        
        <div>
          <Footer />
        </div>
        
        {/* Back to top button with animation */}
        <motion.a 
          href="#home" 
          className="fixed right-6 bottom-6 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white flex items-center justify-center shadow-lg z-30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 11 12 6 7 11" />
            <polyline points="17 18 12 13 7 18" />
          </svg>
        </motion.a>
      </div>
    </>
  );
};

export default Index;
