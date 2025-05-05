import React from "react";
import { Star } from "lucide-react";

const ProjectHighlights = () => {
  return (
    <section id="sonai-clara" className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold">
            {React.createElement(Star, { size: 24 })}
            <span className="text-sm uppercase tracking-wider">Sonai Clara Highlights</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4">
            A Symphony of Luxury and Comfort
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-charcoal-light text-lg">
            Sonai Clara is more than just a residential tower; it's a masterpiece of architectural excellence and thoughtful design, offering a lifestyle of unprecedented luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M2 17h.31a2 2 0 0 0 1.83-1.19C4.9 13.73 6 12 8 12h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1Z" />
                <path d="M22 15v0a3 3 0 0 0-3-3h-2" />
                <path d="m18 9-3-5-1.5 5" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-deepblue">Panoramic Views</h3>
            <div className="w-10 h-1 bg-gold my-4"></div>
            <p className="text-charcoal-light">
              Enjoy breathtaking views of the city and surrounding landscape from our strategically positioned windows and spacious balconies.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M21 7v14h-5v-9-5" />
                <path d="M16 16h5" />
                <rect width="5" height="14" x="3" y="7" />
                <path d="M8 7V5c0-1.105.895-2 2-2h4c1.105 0 2 .895 2 2v2" />
                <path d="M8 7h8" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-deepblue">5-Star Amenities</h3>
            <div className="w-10 h-1 bg-gold my-4"></div>
            <p className="text-charcoal-light">
              Access to premium amenities like designer gardens, clubhouse, amphitheater, and more for an unparalleled lifestyle experience.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M3 11h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11Z" />
                <path d="M7 11V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5" />
                <path d="M13 13a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2h0a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-deepblue">Smart Security</h3>
            <div className="w-10 h-1 bg-gold my-4"></div>
            <p className="text-charcoal-light">
              State-of-the-art security systems with 24/7 surveillance, access control, and trained security personnel for peace of mind.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                <circle cx="16.5" cy="7.5" r=".5" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-deepblue">Spacious Layouts</h3>
            <div className="w-10 h-1 bg-gold my-4"></div>
            <p className="text-charcoal-light">
              Thoughtfully designed floor plans that maximize space and light, providing comfort and versatility for modern families.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <rect width="18" height="10" x="3" y="11" rx="1" />
                <circle cx="12" cy="16" r="1" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-deepblue">Premium Finishes</h3>
            <div className="w-10 h-1 bg-gold my-4"></div>
            <p className="text-charcoal-light">
              Exquisite interiors with premium fixtures, fittings, and materials that reflect sophistication and attention to detail.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-deepblue">Strategic Location</h3>
            <div className="w-10 h-1 bg-gold my-4"></div>
            <p className="text-charcoal-light">
              Located in Ravet with excellent connectivity to major business districts, educational institutions, and entertainment venues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
