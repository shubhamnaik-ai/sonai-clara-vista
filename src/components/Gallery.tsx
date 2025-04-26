import React, { useState } from "react";
import { Image } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=800&auto=format",
    title: "Building Exterior",
  },
  {
    url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800&auto=format",
    title: "Modern Living Room",
  },
  {
    url: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=800&auto=format",
    title: "Building Facade",
  },
  {
    url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=800&auto=format",
    title: "Glass Architecture",
  },
  {
    url: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=800&auto=format",
    title: "Tower View",
  },
  {
    url: "https://source.unsplash.com/random/800x600/?luxury-apartment",
    title: "Luxury Apartment",
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openModal = (url: string) => {
    setActiveImage(url);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold">
            {React.createElement(Image, { size: 24 })}
            <span className="text-sm uppercase tracking-wider">Visual Tour</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4">
            Project Gallery
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-charcoal-light text-lg">
            Explore Sonai Clara through our curated gallery showcasing the elegance and luxury of our premium residences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden cursor-pointer h-[300px]"
              onClick={() => openModal(image.url)}
            >
              <div className="absolute inset-0 bg-deepblue opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-deepblue to-transparent z-20">
                <h4 className="text-xl font-playfair font-semibold text-white">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {activeImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[80vh] w-full">
              <img 
                src={activeImage} 
                alt="Gallery Preview" 
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              <button 
                className="absolute top-4 right-4 text-white hover:text-gold"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-xl font-playfair text-deepblue">Experience the Sonai Clara lifestyle in person</p>
          <p className="text-charcoal-light mt-2 mb-6">Schedule a visit to our model apartment today</p>
          <button className="bg-gold hover:bg-gold-dark text-white px-8 py-3 uppercase tracking-wider font-medium">
            Book a Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
