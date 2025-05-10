
import React from "react";
import { Gem } from "lucide-react";
import { motion } from "framer-motion";

const AmenityCard = ({ icon, title }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-4 bg-white/80 backdrop-blur-sm rounded-sm hover:shadow-lg transition-shadow hover:bg-white"
    whileHover={{ 
      y: -5,
      transition: { duration: 0.2 }
    }}
  >
    <div className="w-12 h-12 rounded-full bg-logo/10 flex items-center justify-center mb-3">
      {icon}
    </div>
    <h4 className="text-base font-playfair font-semibold text-deepblue">{title}</h4>
  </motion.div>
);

const Amenities = () => {
  const amenities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo">
          <path d="M17 12a5 5 0 0 0-5-5c-2.76 0-5 2.24-5 5a5 5 0 0 0 5 5c2.76 0 5-2.24 5-5Z" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ),
      title: "Clubhouse",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M22 12h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z" />
          <path d="M7 12H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z" />
          <path d="M14.5 19.5h-5" />
          <path d="m14.5 4.5-5 5-5-5v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z" />
          <path d="m14.5 8.5-5-5" />
        </svg>
      ),
      title: "Designer Garden",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M12 2v20" />
          <path d="M2 5h20" />
          <path d="M5 2v3" />
          <path d="M19 2v3" />
          <path d="M2 10h20" />
          <path d="M2 14h20" />
          <path d="M2 19h20" />
        </svg>
      ),
      title: "Gazebo",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M10 11V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7" />
          <rect width="16" height="10" x="4" y="11" rx="2" />
          <path d="M12 11v8" />
          <path d="M12 19h4" />
        </svg>
      ),
      title: "Grand Entrance Gate",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M12 5a8.5 8.5 0 1 0 8.5 8.5c0-5.5-8.5-12-8.5-8.5Z" />
          <path d="M15 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 1 0 0-7Z" />
        </svg>
      ),
      title: "Toddlers Area",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      ),
      title: "Amphitheatre with Stage & Stepped Seating",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <circle cx="12" cy="12" r="10" />
          <path d="M15.2 10.712a1 1 0 0 0-1.4-1.425" />
          <path d="M8.797 13.303a1 1 0 0 0 1.414 0" />
          <path d="M13.803 14.713a1 1 0 0 0-1.414-1.414" />
          <path d="M10.199 17.01a1 1 0 0 0 1.414 0" />
          <path d="M7.394 8.793a1 1 0 0 0 1.414 0" />
        </svg>
      ),
      title: "Play Area",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M8 2c6 0 10 4 10 10v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12C4 6 8 2 14 2Z" />
          <path d="M6 12c0-6 4-10 10-10" />
        </svg>
      ),
      title: "Party Lawn",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M21 5c0 9-9 9-9 9s-9 0-9-9a9 9 0 0 1 9-9 9 9 0 0 1 9 9Z" />
          <path d="M3 17a5 5 0 0 0 10 0" />
          <path d="M21 17a5 5 0 0 0-10 0" />
        </svg>
      ),
      title: "Oxygen Park",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M20 21v-8a2 2 0 0 0-2-2h-6" />
          <path d="M14 19v-2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
          <circle cx="12" cy="5" r="3" />
          <path d="M9 11h4" />
          <path d="M5 9v1" />
          <path d="M19 9v1" />
        </svg>
      ),
      title: "Senior Citizens Area",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M4 20V10c0-4.4 3.6-8 8-8s8 3.6 8 8v10" />
          <polyline points="16 18 16 20 8 20 8 18" />
          <polyline points="12 18 12 12" />
          <rect x="8" y="12" width="8" height="2" />
        </svg>
      ),
      title: "Gym",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <rect width="18" height="12" x="3" y="8" rx="1" />
          <path d="M3 8v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8" />
          <path d="M7 8v7" />
          <path d="M17 8v7" />
          <path d="M17 12h-2" />
          <path d="M9 12h2" />
          <path d="M7 12h0" />
          <path d="m6 4 1 4" />
          <path d="m18 4-1 4" />
        </svg>
      ),
      title: "Buffet Counter",
    }
  ];

  // Animation variants for elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="amenities" className="section-padding relative bg-white">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            className="flex items-center justify-center space-x-2 text-logo"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {React.createElement(Gem, { size: 24 })}
            <span className="text-sm uppercase tracking-wider text-logo">Premium Lifestyle</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Exclusive Amenities
          </motion.h2>
          <motion.div 
            className="divider mx-auto bg-logo"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-charcoal-light text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Sonai Clara is designed to provide you with a 5-star lifestyle experience through our carefully curated amenities.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image on the left */}
          <motion.div 
            className="lg:w-1/2 overflow-hidden rounded-lg shadow-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="/lovable-uploads/0ec6ae24-70d9-4b4b-bf94-8d90832ebafb.png" 
              alt="Luxury Amenities" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Amenities grid on the right */}
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((amenity, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AmenityCard icon={amenity.icon} title={amenity.title} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
