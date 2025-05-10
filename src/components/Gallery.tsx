
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Updated gallery images with new uploads
const galleryImages = [
  {
    src: "/lovable-uploads/8996af4a-d8ec-417f-b03c-c5eae0a5987c.png",
    alt: "Building exterior"
  },
  {
    src: "/lovable-uploads/6fd6c37a-a476-462d-8ce3-f03832ac3c49.png",
    alt: "Building facade"
  },
  {
    src: "/lovable-uploads/e181df11-4462-4456-b8a5-07892e105fe3.png",
    alt: "Building view"
  },
  {
    src: "/lovable-uploads/a2de3c79-c3ec-4255-a4de-1781654896a1.png",
    alt: "Building night view"
  },
  {
    src: "/lovable-uploads/e5b8ac9e-0bf6-4cf6-be66-1e4bb923b8e9.png",
    alt: "Kitchen"
  },
  {
    src: "/lovable-uploads/c983a06d-b61b-483f-97ec-43f143d6168a.png",
    alt: "Living room"
  },
  {
    src: "/lovable-uploads/a5a29687-f79b-4f46-a6e3-395429ca4ded.png",
    alt: "Living and dining area"
  },
  {
    src: "/lovable-uploads/0d0aafd4-1e4f-49de-985d-0704baab439f.png",
    alt: "Living room view"
  },
  {
    src: "/lovable-uploads/30905d77-4f6a-44e5-bd95-221733d89056.png",
    alt: "Interior view"
  },
  {
    src: "/lovable-uploads/3d8cb99b-4c14-45d8-8281-add6691006ab.png",
    alt: "Lobby"
  },
  {
    src: "/lovable-uploads/d985c90e-14b6-4020-aaa5-d8b04ab64a44.png",
    alt: "Lounge area"
  },
  {
    src: "/lovable-uploads/d0eb65d3-4ad9-443b-a025-748104252de4.png",
    alt: "Bedroom"
  }
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-3"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Visual Tour
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-charcoal/80 font-light italic">
              Glimpses of Exceptional Living
            </motion.p>
            <div className="divider mx-auto bg-logo"></div>
            <motion.p variants={itemVariants} className="text-charcoal/90 max-w-3xl mx-auto">
              Explore the stunning spaces and premium features that await you at Sonai Clara.
            </motion.p>
          </motion.div>
        </div>

        {/* Gallery display with navigation controls */}
        <div className="relative max-w-4xl mx-auto">
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg cursor-pointer"
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-medium">Click to expand</p>
                  </div>
                </div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-5xl bg-black bg-opacity-90 border-none">
              <div className="relative">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>

          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal rounded-full p-2 shadow-md z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal rounded-full p-2 shadow-md z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination indicators */}
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={goToPrevious} className="cursor-pointer" />
              </PaginationItem>
              
              {galleryImages.map((_, index) => (
                <PaginationItem key={index} className={cn(
                  "hidden md:inline-block",
                  index >= currentImageIndex - 2 && index <= currentImageIndex + 2 ? "block" : "hidden"
                )}>
                  <PaginationLink
                    isActive={currentImageIndex === index}
                    onClick={() => setCurrentImageIndex(index)}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext onClick={goToNext} className="cursor-pointer" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
