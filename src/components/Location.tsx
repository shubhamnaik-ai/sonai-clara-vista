
import React from "react";
import { Compass, Map } from "lucide-react";

const LocationFeature = ({ title, description }) => (
  <div className="flex items-start space-x-4 px-6 py-4 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    </div>
    <div>
      <h4 className="text-xl font-playfair font-semibold text-deepblue">{title}</h4>
      <p className="text-charcoal-light mt-1">{description}</p>
    </div>
  </div>
);

const Location = () => {
  return (
    <section id="location" className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold">
            <Compass size={24} />
            <span className="text-sm uppercase tracking-wider">Strategic Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4">
            Location Advantages
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-charcoal-light text-lg">
            Sonai Clara is strategically located in Ravet, offering excellent connectivity and access to all essential amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LocationFeature 
                title="Educational Hub" 
                description="Multiple prestigious schools and colleges within 5km radius"
              />
              <LocationFeature 
                title="Medical Facilities" 
                description="Top hospitals and healthcare centers nearby"
              />
              <LocationFeature 
                title="Shopping Centers" 
                description="Premium malls and local markets within minutes"
              />
              <LocationFeature 
                title="Transportation" 
                description="Easy access to highways and public transit"
              />
              <LocationFeature 
                title="Business Districts" 
                description="Quick commute to major IT parks and business hubs"
              />
              <LocationFeature 
                title="Entertainment" 
                description="Restaurants, theaters and recreational facilities close by"
              />
            </div>
            
            <div className="p-6 bg-deepblue text-white">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Map size={24} className="text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-playfair font-bold">Key Distances</h4>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between border-b border-deepblue-light pb-2">
                      <span>Highway</span>
                      <span className="font-medium">0.5 km</span>
                    </div>
                    <div className="flex justify-between border-b border-deepblue-light pb-2">
                      <span>Railway Station</span>
                      <span className="font-medium">3 km</span>
                    </div>
                    <div className="flex justify-between border-b border-deepblue-light pb-2">
                      <span>Airport</span>
                      <span className="font-medium">25 km</span>
                    </div>
                    <div className="flex justify-between border-b border-deepblue-light pb-2">
                      <span>IT Park</span>
                      <span className="font-medium">10 km</span>
                    </div>
                    <div className="flex justify-between border-b border-deepblue-light pb-2">
                      <span>Hospital</span>
                      <span className="font-medium">1.5 km</span>
                    </div>
                    <div className="flex justify-between border-b border-deepblue-light pb-2">
                      <span>Mall</span>
                      <span className="font-medium">2 km</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-full flex flex-col justify-between">
            <div className="border-8 border-white shadow-lg w-full">
              <iframe
                title="Sonai Clara Location Map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.673685916859!2d73.73937799999999!3d18.650202999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzAxLjkiTiA3M8KwNDQnMjEuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
