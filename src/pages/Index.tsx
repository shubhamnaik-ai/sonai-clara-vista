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
import { QrCode, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Show content immediately after loading is complete
    setContentVisible(true);
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

  // Address QR Code Dialog
  const AddressQR = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <QrCode className="h-5 w-5" />
          <span>Get Location</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white p-6">
        <h3 className="text-xl font-semibold mb-4">Scan QR Code for Directions</h3>
        <div className="flex flex-col items-center">
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://maps.google.com/?q=18.650203,73.739368`} 
            alt="Office Location QR Code" 
            className="w-64 h-64 object-contain mb-4"
          />
          <p className="text-sm text-gray-500 text-center">
            Scan this QR code to get directions to our office
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div 
        className={`min-h-screen bg-dark-gradient transition-opacity duration-500 ${
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

        {/* Site & Office Address Banner */}
        <div className={`bg-deepblue py-6 transition-all duration-1000 delay-300 transform ${
          contentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Site Address</h4>
                  <p className="text-white/80 mt-1">
                    Sr.No 76/1/1, 76/1/2, 76/1/3, 76/1/1/1/2/1/3<br />
                    Chandrabhaga Corner, Ravet, 412101
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">Office Address</h4>
                  <div className="flex justify-between items-start">
                    <p className="text-white/80 mt-1">
                      14, Brt Rd, Malakar Vasti, Ravet,<br />
                      Pimpri-Chinchwad, Maharashtra 412101
                    </p>
                    <AddressQR />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
