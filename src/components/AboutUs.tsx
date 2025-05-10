
import React from "react";
import { Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=800&auto=format" 
                alt="Sonai Realty Construction" 
                className="w-full h-auto object-cover shadow-xl"
              />
              {/* No box overlay as per previous changes */}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-logo">
              {React.createElement(Users, { size: 24 })}
              <span className="text-sm uppercase tracking-wider">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue">
              Creating Extraordinary Living Experiences
            </h2>
            
            <div className="divider bg-logo"></div>
            
            <p className="text-charcoal-light text-lg">
              Founded on the principles of quality, innovation, and client satisfaction, Sonai Realty has established itself as one of Pune's premier real estate developers, with a portfolio of exceptional residential and commercial properties.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo">
                    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 0 0-3.214-1.536c-.873.332-1.467 1.19-1.466 2.146v1.089c0 .787-.318 1.53-.885 2.075s-1.342.834-2.139.8a2.996 2.996 0 0 1-2.853-2.829c-.038-1.019-.812-1.82-1.793-1.82H5.118c-.639 0-1.25-.243-1.705-.679A2.294 2.294 0 0 1 2.8 11.85l.447-2.676A4.774 4.774 0 0 1 5.115 5.65c1.075-.824 2.485-1.013 3.717-.527l6.084 2.404c.591.233 1.043.737 1.195 1.345.151.606-.05 1.172-.471 1.558a2.25 2.25 0 0 1-1.442.52H12.75c-.38 0-.72-.155-.96-.405s-.375-.585-.345-.96l.072-.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-deepblue">Quality Craftsmanship</h4>
                  <p className="text-charcoal-light mt-1">We adhere to the highest quality standards in every aspect of construction.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-deepblue">Innovative Design</h4>
                  <p className="text-charcoal-light mt-1">Our designs blend aesthetics with functionality for modern living.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-deepblue">Customer Trust</h4>
                  <p className="text-charcoal-light mt-1">We build relationships based on trust, transparency and integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
