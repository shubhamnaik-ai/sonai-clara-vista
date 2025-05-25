
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
        <img 
          src="/lovable-uploads/15995bae-97a7-4a0f-ba4b-95f3a4208866.png" 
          alt="Clubhouse" 
          className="h-7 w-7"
        />
      ),
      title: "Clubhouse",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/20cbdfc2-ffba-4ee5-83f4-5ebfab6c22e2.png" 
          alt="Designer Garden" 
          className="h-7 w-7"
        />
      ),
      title: "Designer Garden",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/8f869c03-5f62-4136-a722-b7ba2c9c66f6.png" 
          alt="Gazebo" 
          className="h-7 w-7"
        />
      ),
      title: "Gazebo",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/289cb1bc-7722-4e0a-aa83-a7c10625cb81.png" 
          alt="Grand Entrance Gate" 
          className="h-7 w-7"
        />
      ),
      title: "Grand Entrance Gate",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/86050fe4-ccfa-4ce3-9f3f-b550147f17d4.png" 
          alt="Toddlers Area" 
          className="h-7 w-7"
        />
      ),
      title: "Toddlers Area",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/6a5867e2-bcd5-41dd-8bad-1b0359c293af.png" 
          alt="Gym" 
          className="h-7 w-7"
        />
      ),
      title: "Gym",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/0a73f98d-86fb-4044-b4a6-349cbaff07ba.png" 
          alt="Play Area" 
          className="h-7 w-7"
        />
      ),
      title: "Play Area",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/80a7f05f-d90b-468e-8cb8-29361efba169.png" 
          alt="Party Lawn" 
          className="h-7 w-7"
        />
      ),
      title: "Party Lawn",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/571f7dfa-1552-4342-a8d9-283b178f0ae8.png" 
          alt="Oxygen Park" 
          className="h-7 w-7"
        />
      ),
      title: "Oxygen Park",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/88f25c75-d06d-4b6e-b973-b75b983cbb01.png" 
          alt="Senior Citizens Area" 
          className="h-7 w-7"
        />
      ),
      title: "Senior Citizens Area",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/d6001c04-0a0f-412d-806c-25e26409d633.png" 
          alt="Buffet Counter" 
          className="h-7 w-7"
        />
      ),
      title: "Buffet Counter",
    },
    {
      icon: (
        <img 
          src="/lovable-uploads/6a964951-d9d3-4d59-b672-0ca3f1210b80.png" 
          alt="Amphitheatre" 
          className="h-7 w-7"
        />
      ),
      title: "Amphitheatre with Stage & Stepped Seating",
    },
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
