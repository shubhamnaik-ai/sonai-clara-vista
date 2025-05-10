
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface FeaturedImageProps {
  currentImage: {
    src: string;
    alt: string;
  };
  goToPrevious: () => void;
  goToNext: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeaturedImage = ({ currentImage, goToPrevious, goToNext }: FeaturedImageProps) => {
  return (
    <div className="relative max-w-4xl mx-auto mb-8">
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
              src={currentImage.src}
              alt={currentImage.alt}
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
              src={currentImage.src}
              alt={currentImage.alt}
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
  );
};

export default FeaturedImage;
