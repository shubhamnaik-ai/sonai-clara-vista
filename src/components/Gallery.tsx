
import React, { useState, useEffect, useRef } from "react";
import { Image, Download } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DownloadBrochureForm from "./DownloadBrochureForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    url: "/lovable-uploads/f0aac734-d8e4-4e38-bb99-be6a38340274.png",
    title: "Premium Living Room",
  },
  {
    url: "/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png",
    title: "Building Exterior",
  },
  {
    url: "/lovable-uploads/f0aac734-d8e4-4e38-bb99-be6a38340274.png",
    title: "Modern Kitchen",
  },
  {
    url: "/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png",
    title: "Master Bedroom",
  },
  {
    url: "/lovable-uploads/f0aac734-d8e4-4e38-bb99-be6a38340274.png",
    title: "Swimming Pool",
  },
  {
    url: "/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png",
    title: "Fitness Center",
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const openModal = (url: string) => {
    setActiveImage(url);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    // Auto-scroll function
    const startAutoScroll = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      if (autoPlay) {
        intervalRef.current = window.setInterval(() => {
          if (carouselRef.current) {
            const scrollRight = document.querySelector('[data-carousel-next]');
            if (scrollRight) {
              (scrollRight as HTMLButtonElement).click();
            }
          }
        }, 3000);
      }
    };

    startAutoScroll();

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay]);

  // Pause autoplay when user interacts with carousel
  const handleInteraction = () => {
    setAutoPlay(false);
    
    // Resume after 10 seconds of inactivity
    setTimeout(() => {
      setAutoPlay(true);
    }, 10000);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold">
            <Image size={24} />
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

        {/* Auto-scrolling Carousel */}
        <div className="mb-12" onMouseEnter={handleInteraction} onTouchStart={handleInteraction}>
          <Carousel ref={carouselRef} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div 
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious data-carousel-prev className="left-2" />
            <CarouselNext data-carousel-next className="right-2" />
          </Carousel>
        </div>

        {/* Grid Gallery */}
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
          <p className="text-charcoal-light mt-2 mb-6">Schedule a visit to our model apartment today or download our brochure</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3 uppercase tracking-wider font-medium">
                  <Download size={18} />
                  Download Brochure
                </button>
              </DialogTrigger>
              <DownloadBrochureForm />
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
