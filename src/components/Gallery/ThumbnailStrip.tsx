
import React from 'react';
import { motion } from 'framer-motion';

interface ThumbnailStripProps {
  images: Array<{ src: string; alt: string }>;
  currentIndex: number;
  onSelect: (index: number) => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ThumbnailStrip = ({ images, currentIndex, onSelect }: ThumbnailStripProps) => {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-2 min-w-max">
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'ring-2 ring-offset-2 ring-logo' : ''
            }`}
            onClick={() => onSelect(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-16 w-24 object-cover rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailStrip;
