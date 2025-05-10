
import React, { useState } from 'react';
import GalleryHeader from './GalleryHeader';
import FeaturedImage from './FeaturedImage';
import ThumbnailStrip from './ThumbnailStrip';
import { galleryImages } from './galleryData';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <GalleryHeader />
        
        <FeaturedImage 
          currentImage={galleryImages[currentImageIndex]}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
        />
        
        <ThumbnailStrip 
          images={galleryImages} 
          currentIndex={currentImageIndex} 
          onSelect={setCurrentImageIndex} 
        />
      </div>
    </section>
  );
};

export default Gallery;
