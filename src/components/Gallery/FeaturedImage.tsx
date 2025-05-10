import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// This component is no longer being used as we've moved to a carousel-based layout
// Keeping it here for reference, but you can safely delete it if you're sure the new implementation works

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
      <motion.div
        className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg"
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={currentImage.src}
          alt={currentImage.alt}
          className="object-cover w-full h-full"
        />
      </motion.div>

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
