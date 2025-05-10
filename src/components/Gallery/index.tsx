
import React, { useEffect } from 'react';
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

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<{ scrollNext: () => void } | null>(null);

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

  return (
    <section id="gallery" ref={ref} className="section-padding bg-neutral-900 py-16">
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
                    className="overflow-hidden rounded-md aspect-video"
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
              <div className="flex space-x-2">
                {galleryImages.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === 0 ? 'bg-logo' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <CarouselNext className="relative inset-auto mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
