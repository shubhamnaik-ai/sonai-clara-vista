
import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Show content immediately after loading is complete
    setContentVisible(true);
    
    // Show enquiry form after a short delay
    setTimeout(() => {
      setShowEnquiry(true);
    }, 500);
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
      
      // Show back to top button only when scrolled down
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
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
        "/lovable-uploads/b069e163-9f57-41f8-82e1-550ae81c592a.png",    // Logo
        "/lovable-uploads/ea9317ca-85df-4253-8e37-5cd3882addfd.png"    // New Sonai Clara logo
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
        <EnquiryForm planType="Premium" />
      </Dialog>
      
      <div 
        className={`min-h-screen bg-white overflow-x-hidden transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Moved Navbar outside of transition container to make it appear on top of hero image */}
        <div className={`fixed top-0 left-0 w-full z-40 transition-opacity duration-500 bg-white shadow-md ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}>
          <Navbar />
        </div>
        
        {/* WhatsApp Button */}
        {contentVisible && <WhatsAppButton />}
        
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
          className="bg-white"
        >
          <Amenities />
        </motion.div>
        
        <motion.div 
          className="bg-white"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <FloorPlans />
        </motion.div>
        
        <motion.div 
          className="bg-white"
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
        
        {/* Back to top button with animation and conditional display */}
        {showBackToTop && (
          <motion.a 
            href="#home" 
            className="fixed right-6 bottom-6 w-14 h-14 rounded-full bg-logo hover:bg-logo-dark text-white flex items-center justify-center shadow-lg z-30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="17 11 12 6 7 11" />
              <polyline points="17 18 12 13 7 18" />
            </svg>
          </motion.a>
        )}
      </div>
    </>
  );
};

export default Index;
