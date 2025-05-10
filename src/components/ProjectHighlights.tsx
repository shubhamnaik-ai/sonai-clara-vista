
import React from 'react';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    }
  }
};

const ProjectHighlights = () => {
  return (
    <section id="highlights" className="section-padding bg-white">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-logo">
            <CheckCircle2 size={24} />
            <span className="text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-3 mt-4"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal"
            >
              Sonai Clara Highlights
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-charcoal/80 font-light italic"
            >
              A Symphony of Luxury and Comfort
            </motion.p>
          </motion.div>
          
          <div className="divider mx-auto bg-logo"></div>
          
          <p className="text-charcoal/90 text-lg">
            We've crafted an exceptional living experience that combines modern design with timeless elegance.
          </p>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HighlightCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo"><path d="M20 22h-2"></path><path d="M20 15v7"></path><path d="M4 22h16"></path><path d="M15 22h-3"></path><path d="M4 15v7"></path><path d="M11 15v7"></path><path d="M11 4l5 1-1 4"></path><path d="M18 8v15"></path><path d="M18 8a4 4 0 0 0-8 0"></path><path d="M6 12h4"></path><path d="M2 12h2"></path><path d="M10 12h10"></path></svg>}
            title="Prime Location"
            description="Located in the heart of Ravet, close to schools, hospitals, and major highways for easy accessibility."
          />
          
          <HighlightCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo"><path d="M4 6V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4"></path><path d="M2 6h12v12H2z"></path><path d="m17 6 5 5"></path><path d="M22 6v5"></path></svg>}
            title="Vastu Compliant"
            description="Every apartment follows Vastu principles to ensure harmony and positive energy flow throughout your home."
          />
          
          <HighlightCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m7.5 12 3 3 6-6"></path></svg>}
            title="Quality Construction"
            description="Built with premium materials and expert craftsmanship to ensure durability and safety for generations."
          />
          
          <HighlightCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo"><path d="M22 9L12 5 2 9"></path><path d="M12 5v14"></path><path d="m4.2 10.4 7.8 4.6 7.8-4.6"></path></svg>}
            title="Elegant Interiors"
            description="Thoughtfully designed spaces with premium fixtures, quality finishes, and attention to every detail."
          />
          
          <HighlightCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo"><path d="M3 11h18"></path><path d="M5 11v4c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3v-4"></path><path d="m14 15 2-4"></path><path d="M8 15h6"></path><path d="M4 5v.5C4 7 5 8 6.5 8S9 7 9 5.5v-1C9 3 10 2 12 2s3 1 3 2.5v1c0 1.5 1 2.5 2.5 2.5S20 7 20 5.5V5"></path></svg>}
            title="Smart Features"
            description="Modern technology integrated throughout, from security systems to energy-efficient solutions."
          />
          
          <HighlightCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo"><path d="M21 12V7H5v5"></path><path d="M3 21h18"></path><path d="M7 12v9"></path><path d="M17 12v9"></path><path d="M5 7V3h14v4"></path></svg>}
            title="World-Class Amenities"
            description="From swimming pools to fitness centers, we've created spaces for relaxation, recreation, and community."
          />
        </div>
      </div>
    </section>
  );
};

const HighlightCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-ivory border border-gray-200 p-6 rounded-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="w-12 h-12 rounded-full bg-logo/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">{title}</h3>
      <p className="text-charcoal/70">{description}</p>
    </motion.div>
  );
};

export default ProjectHighlights;
