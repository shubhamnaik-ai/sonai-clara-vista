
import React, { useState, useEffect, useRef } from "react";
import { Image, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DownloadBrochureForm from "./DownloadBrochureForm";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Updated gallery images with new uploaded images
const galleryImages = [
  {
    url: "/lovable-uploads/7989d9f1-5ee3-4246-b7c9-7e1418151f9d.png",
  },
  {
    url: "/lovable-uploads/ddcbbfca-c64a-413d-ac52-285a9b3ac740.png",
  },
  {
    url: "/lovable-uploads/41eacf57-7168-4445-8f9f-732a628425b7.png",
  },
  {
    url: "/lovable-uploads/3089f833-f203-4f0a-a2ad-ecef14d84975.png",
  },
  {
    url: "/lovable-uploads/116afe75-ebed-4347-b441-4ca55b81ca69.png",
  },
  {
    url: "/lovable-uploads/8cfdc61d-ce9c-4d79-a035-9d830191d0eb.png",
  },
  {
    url: "/lovable-uploads/de560ccb-f796-4f5e-a51d-cdd30f4f4eef.png",
  },
  {
    url: "/lovable-uploads/7b273eb8-c16d-4d81-a8d4-e5024793dd04.png",
  },
  {
    url: "/lovable-uploads/6fbb8d4c-1eb5-4de1-a5a5-1e4e632515c3.png",
  }
];

const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const openModal = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = "";
  };
  
  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
    }
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    // Auto-scroll function
    const startAutoScroll = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      if (autoPlay) {
        intervalRef.current = window.setInterval(() => {
          if (carouselRef.current) {
            const scrollRight = document.querySelector('[data-carousel-next]');
            if (scrollRight) {
              (scrollRight as HTMLButtonElement).click();
            }
          }
        }, 3000);
      }
    };

    startAutoScroll();

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay]);

  // Pause autoplay when user interacts with carousel
  const handleInteraction = () => {
    setAutoPlay(false);
    
    // Resume after 10 seconds of inactivity
    setTimeout(() => {
      setAutoPlay(true);
    }, 10000);
  };

  return (
    <motion.section 
      id="gallery" 
      className="section-padding bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-2 text-logo">
            <Image size={24} />
            <span className="text-sm uppercase tracking-wider">Visual Tour</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4">
            Project Gallery
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-charcoal-light text-lg">
            Explore Sonai Clara through our curated gallery showcasing the elegance and luxury of our premium residences.
          </p>
        </motion.div>

        {/* Single Line Gallery Carousel - Adjusted to start from the first image */}
        <div className="mb-12" onMouseEnter={handleInteraction} onTouchStart={handleInteraction}>
          <Carousel ref={carouselRef} className="w-full max-w-full mx-auto" defaultIndex={0}>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div 
                    className="group relative overflow-hidden cursor-pointer h-[250px]"
                    onClick={() => openModal(index)}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-deepblue opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
                    <img 
                      src={image.url} 
                      alt="Sonai Clara property" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-deepblue to-transparent z-20">
                      <h4 className="text-lg font-playfair font-semibold text-white">View Image</h4>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious data-carousel-prev className="left-2" />
            <CarouselNext data-carousel-next className="right-2" />
          </Carousel>
        </div>

        {/* Image Lightbox with Previous and Next buttons */}
        {activeImageIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[80vh] w-full">
              <img 
                src={galleryImages[activeImageIndex].url} 
                alt="Gallery Preview" 
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              
              {/* Previous Button */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-logo text-white p-2 rounded-full"
                onClick={goToPrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              
              {/* Next Button */}
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-logo text-white p-2 rounded-full"
                onClick={goToNextImage}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
              
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-white hover:text-logo"
                onClick={closeModal}
                aria-label="Close gallery"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xl font-playfair text-deepblue">Experience the Sonai Clara lifestyle in person</p>
          <p className="text-charcoal-light mt-2 mb-6">Schedule a visit to our model apartment today or download our brochure</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 bg-logo hover:bg-logo-dark text-white px-8 py-3 uppercase tracking-wider font-medium">
                  <Download size={18} />
                  Download Brochure
                </button>
              </DialogTrigger>
              <DownloadBrochureForm />
            </Dialog>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
