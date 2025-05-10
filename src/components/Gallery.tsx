
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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

// Gallery images - update with actual project images
const galleryImages = [
  {
    src: "/lovable-uploads/7989d9f1-5ee3-4246-b7c9-7e1418151f9d.png",
    alt: "Building exterior",
    caption: "Elegant exterior design with premium finishes"
  },
  {
    src: "/lovable-uploads/8cfdc61d-ce9c-4d79-a035-9d830191d0eb.png",
    alt: "Lobby",
    caption: "Grand entrance lobby with luxury furnishings"
  },
  {
    src: "/lovable-uploads/3089f833-f203-4f0a-a2ad-ecef14d84975.png",
    alt: "Living area",
    caption: "Spacious living areas with premium finishes"
  },
  {
    src: "/lovable-uploads/c77fc28f-decf-4b7d-bb86-a20f26c79cba.png",
    alt: "Kitchen",
    caption: "Modern kitchen with high-end appliances"
  },
  {
    src: "/lovable-uploads/ede45a26-8fe4-4bad-be36-794da04365c3.png",
    alt: "Bathroom",
    caption: "Elegant bathroom with premium fixtures"
  },
  {
    src: "/lovable-uploads/7b273eb8-c16d-4d81-a8d4-e5024793dd04.png",
    alt: "Bedroom",
    caption: "Comfortable bedroom with ample natural light"
  }
];

const Gallery = () => {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const handleExpandImage = (index: number) => setExpandedImage(index);
  const handleCloseExpanded = () => setExpandedImage(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = Math.ceil(galleryImages.length / 3);
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === maxSlides - 1 ? 0 : prev + 1));
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlides - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-3"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Visual Tour
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-white/80 font-light italic">
              Glimpses of Exceptional Living
            </motion.p>
            <div className="divider mx-auto bg-logo"></div>
            <motion.p variants={itemVariants} className="text-white/90 max-w-3xl mx-auto">
              Explore the stunning spaces and premium features that await you at Sonai Clara.
            </motion.p>
          </motion.div>
        </div>

        {/* Desktop Gallery with Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  className="relative overflow-hidden group cursor-pointer rounded-md"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white">
                      <ImageIcon size={36} />
                      <p className="mt-2 text-sm font-medium tracking-wider uppercase">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-black bg-opacity-90 border-none">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  <p className="text-white text-center mt-3 font-light">{image.caption}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Mobile Gallery Carousel */}
        <div className="md:hidden relative">
          <Carousel 
            ref={useRef(null)}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        className="relative overflow-hidden rounded-md"
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="aspect-w-4 aspect-h-3">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full"
                          />
                        </div>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl bg-black bg-opacity-90 border-none">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full max-h-[80vh] object-contain"
                      />
                      <p className="text-white text-center mt-3 font-light">{image.caption}</p>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
