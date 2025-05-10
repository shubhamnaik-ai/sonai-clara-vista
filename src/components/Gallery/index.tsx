
import React, { useEffect, useState } from 'react';
import GalleryHeader from './GalleryHeader';
import { galleryImages } from './galleryData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<{ scrollNext: () => void } | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Initialize autoplay when in view
  useEffect(() => {
    if (isInView && carouselRef.current) {
      // Start autoplay when component is in view
      autoplayIntervalRef.current = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollNext();
        }
      }, 5000); // Change image every 5 seconds
    } else {
      // Clear interval when component is out of view
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    }

    // Clean up on unmount
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isInView]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setDialogOpen(true);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return;
    
    const newIndex = selectedImageIndex === 0 
      ? galleryImages.length - 1 
      : selectedImageIndex - 1;
    
    setSelectedImageIndex(newIndex);
  };

  const handleNextImage = () => {
    if (selectedImageIndex === null) return;
    
    const newIndex = selectedImageIndex === galleryImages.length - 1 
      ? 0 
      : selectedImageIndex + 1;
    
    setSelectedImageIndex(newIndex);
  };

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setSelectedImageIndex(null);
    }
  };

  return (
    <section id="gallery" ref={ref} className="section-padding bg-white py-16">
      <div className="container-custom">
        <GalleryHeader />
        
        <div className="mt-12">
          <Carousel 
            setApi={(api) => { carouselRef.current = api; }}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-md aspect-video cursor-pointer"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center items-center mt-8">
              <CarouselPrevious className="relative inset-auto mx-2" />
              <CarouselNext className="relative inset-auto mx-2" />
            </div>
          </Carousel>
        </div>

        {/* Image Expanded Dialog */}
        <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
          <DialogContent className="max-w-4xl p-0 bg-black border-none" onInteractOutside={(e) => e.preventDefault()}>
            <div className="relative flex items-center justify-center w-full h-full">
              {selectedImageIndex !== null && (
                <img
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].alt}
                  className="max-h-[80vh] w-auto object-contain"
                />
              )}
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute left-4 bg-black/50 border-none hover:bg-black/70 rounded-full"
                onClick={handlePrevImage}
              >
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute right-4 bg-black/50 border-none hover:bg-black/70 rounded-full"
                onClick={handleNextImage}
              >
                <ArrowRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
