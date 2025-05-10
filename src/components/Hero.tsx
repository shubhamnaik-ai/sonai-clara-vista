
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BookVisitForm from "@/components/BookVisitForm";
import DownloadBrochureForm from "@/components/DownloadBrochureForm";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png")',
        }}
      >
        <div className="absolute inset-0 bg-deepblue/50 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-16 md:pt-20">
        <motion.div 
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h5 
            className="text-ivory text-base md:text-xl font-medium uppercase tracking-wider md:tracking-[0.2em] mb-4 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Premium Living Experience
          </motion.h5>
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-ivory mb-4 md:mb-6 font-playfair drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sonai Clara 
            <motion.span 
              className="block mt-1 md:mt-2 text-xl md:text-3xl lg:text-5xl text-logo drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Premium Residences
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-xl text-ivory-light mb-6 md:mb-10 max-w-3xl mx-auto font-light drop-shadow-lg font-raleway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Luxurious 2 & 3 BHK homes in Ravet with 5-star amenities, panoramic views, and impeccable craftsmanship
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-logo hover:bg-logo-dark text-white text-base w-full sm:w-auto px-8 py-6 rounded-none hover:scale-105 transition-transform"
                >
                  Book Your Visit
                </Button>
              </DialogTrigger>
              <BookVisitForm />
            </Dialog>

            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 text-base w-full sm:w-auto px-8 py-6 rounded-none hover:scale-105 transition-transform"
              onClick={() => navigate('/projects')}
            >
              Explore Project
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-10 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold drop-shadow-lg">
                <AnimatedCounter start={1} end={22} duration={2} className="inline-block" />
              </div>
              <p className="text-xs md:text-sm uppercase tracking-wider mt-1 font-medium drop-shadow-lg">Storeys High</p>
            </motion.div>
            <div className="hidden sm:block w-px h-12 md:h-16 bg-white/30"></div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold drop-shadow-lg">2 & 3</p>
              <p className="text-xs md:text-sm uppercase tracking-wider mt-1 font-medium drop-shadow-lg">BHK Options</p>
            </motion.div>
            <div className="hidden sm:block w-px h-12 md:h-16 bg-white/30"></div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold drop-shadow-lg">
                <AnimatedCounter start={1} end={15} duration={2} suffix="+" className="inline-block" />
              </div>
              <p className="text-xs md:text-sm uppercase tracking-wider mt-1 font-medium drop-shadow-lg">Premium Amenities</p>
            </motion.div>
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
