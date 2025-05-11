
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
      
      {/* Content - Left aligned */}
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
            <div className="inline-flex items-center text-white">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.5,2C21.5,2,22,4.17,22,6V18C22,20.5,20.16,22,18,22H6C4.17,22,2,20.5,2,18V6C2,4.17,3.5,2,6,2H18.5Z M9.5,11.5C8.67,11.5,8,12.17,8,13S8.67,14.5,9.5,14.5H9.51C10.34,14.5,11.01,13.83,11.01,13S10.34,11.5,9.5,11.5Z M14.5,11.5C13.67,11.5,13,12.17,13,13S13.67,14.5,14.5,14.5H14.51C15.34,14.5,16.01,13.83,16.01,13S15.34,11.5,14.5,11.5Z" />
              </svg>
              <span className="uppercase text-sm font-medium tracking-wider">PREMIUM LIFESTYLE</span>
            </div>
            <h1 className="font-playfair text-white text-5xl md:text-7xl tracking-wider mb-2 mt-2">
              Exclusive Amenities
            </h1>
            <div className="relative h-1 w-20 bg-white mt-2">
              <div className="absolute inset-0 bg-white animate-expandLine"></div>
            </div>
          </motion.div>
          
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Experience luxury in our premium 2 & 3 BHK apartments. A harmonious blend of contemporary design and tranquil living, perfectly positioned in the heart of Ravet.
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
              onClick={() => navigate('/projects')}
            >
              Explore Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator with animation */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-10"
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
