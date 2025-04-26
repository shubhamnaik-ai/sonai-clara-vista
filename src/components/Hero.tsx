import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png")',
        }}
      >
        <div className="absolute inset-0 bg-deepblue/30 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/7cdcc568-a688-4439-9c0e-809a33f0d43f.png" 
              alt="Sonai Realty Logo" 
              className="h-16 mx-auto"
            />
          </div>

          <h5 className="text-gold text-lg md:text-xl font-medium uppercase tracking-[0.2em] mb-4">
            Premium Living Experience
          </h5>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-playfair">
            Sonai Clara 
            <span className="block mt-2 text-2xl md:text-4xl lg:text-5xl text-gold/90">
              Premium Residences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            Luxurious 2 & 3 BHK homes in Ravet with 5-star amenities, panoramic views, and impeccable craftsmanship
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-gold hover:bg-gold-dark text-white text-base px-8 py-6 rounded-none"
            >
              Book Your Visit
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 text-base px-8 py-6 rounded-none"
            >
              Explore Project
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10 text-white">
            <div>
              <p className="text-3xl md:text-4xl font-playfair font-semibold">22</p>
              <p className="text-sm uppercase tracking-wider mt-1">Storeys High</p>
            </div>
            <div className="w-px h-16 bg-white/30"></div>
            <div>
              <p className="text-3xl md:text-4xl font-playfair font-semibold">2 & 3</p>
              <p className="text-sm uppercase tracking-wider mt-1">BHK Options</p>
            </div>
            <div className="w-px h-16 bg-white/30"></div>
            <div>
              <p className="text-3xl md:text-4xl font-playfair font-semibold">15+</p>
              <p className="text-sm uppercase tracking-wider mt-1">Premium Amenities</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
