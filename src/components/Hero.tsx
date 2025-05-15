
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden"
    >
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/47a5c108-4ec6-4b54-97a7-615bfe0e3601.png")',
        }}
      >
        <div className="absolute inset-0 bg-deepblue/50 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-left pt-16 md:pt-20">
        <motion.div 
          className="max-w-4xl px-4 flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-start mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="font-nasalization text-white text-5xl md:text-7xl tracking-wider mb-2">
              SONAI CLARA
            </h1>
          </motion.div>
          
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Experience luxury in our palatial 2 & 3 BHK apartments. A harmonious blend of contemporary design and tranquil living, perfectly positioned in the heart of Ravet.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-start justify-start gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <Button 
              variant="outline" 
              className="bg-[#1b727b] border-white text-white hover:bg-[#155a61] text-base w-auto px-8 py-6 rounded-none hover:scale-105 transition-transform"
              onClick={() => navigate('/projects/sonai-clara')}
            >
              View Details
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator with animation */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
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
      </motion.div>
    </section>
  );
};

export default Hero;
