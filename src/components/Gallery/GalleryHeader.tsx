
import React from 'react';
import { motion } from 'framer-motion';

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

const GalleryHeader = () => {
  return (
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
  );
};

export default GalleryHeader;
