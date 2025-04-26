import React from "react";
import { Gem } from "lucide-react";

const AmenityCard = ({ icon, title }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-sm hover:shadow-lg transition-shadow hover:bg-white">
    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
      {icon}
    </div>
    <h4 className="text-xl font-playfair font-semibold text-deepblue">{title}</h4>
  </div>
);

const Amenities = () => {
  const amenities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
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
      title: "Designer Gardens",
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
      title: "Amphitheater",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M6 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z" />
          <path d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" />
          <path d="M8 17v4" />
          <path d="M16 17v4" />
          <path d="M12 17v1" />
          <path d="M2 7v10" />
          <path d="M22 7v10" />
        </svg>
      ),
      title: "Swimming Pool",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M4.93 4.93 9.17 9.17" />
          <path d="M14.83 14.83 19.07 19.07" />
          <path d="M14.83 4.93 19.07 9.17" />
          <path d="M14.83 4.93 18.36 5.64" />
          <path d="M4.93 19.07 9.17 14.83" />
        </svg>
      ),
      title: "Fitness Center",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
          <path d="M17 7A5 5 0 0 0 7 7" />
          <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
        </svg>
      ),
      title: "Spa & Sauna",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M12 2v3" />
          <path d="M19.07 5.93 17 8" />
          <path d="M22 12h-3" />
          <path d="M19.07 18.07 17 16" />
          <path d="M12 22v-3" />
          <path d="M7 16 4.93 18.07" />
          <path d="M2 12h3" />
          <path d="M7 8 4.93 5.93" />
          <path d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
      ),
      title: "Lounge",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M12 5a8.5 8.5 0 1 0 8.5 8.5c0-5.5-8.5-12-8.5-8.5Z" />
          <path d="M15 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 1 0 0-7Z" />
        </svg>
      ),
      title: "Kids Play Area",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M12 22v-1" />
          <path d="M9 21v-1" />
          <path d="M15 21v-1" />
          <path d="m8.5 14.5-1 1" />
          <path d="M7 17h1" />
          <path d="M16 17h1" />
          <path d="m15.5 14.5 1 1" />
          <path d="M9 2v2" />
          <path d="M15 2v2" />
          <path d="M8 10h8" />
          <path d="M7 7h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
        </svg>
      ),
      title: "Home Automation",
    }
  ];

  return (
    <section id="amenities" className="section-padding relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=1920&auto=format")',
        }}>
        <div className="absolute inset-0 bg-deepblue bg-opacity-80"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold">
            {React.createElement(Gem, { size: 24 })}
            <span className="text-sm uppercase tracking-wider text-gold">Premium Lifestyle</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Exclusive Amenities
          </h2>
          <div className="divider mx-auto bg-gold"></div>
          <p className="text-white/80 text-lg">
            Sonai Clara is designed to provide you with a 5-star lifestyle experience through our carefully curated amenities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} icon={amenity.icon} title={amenity.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
