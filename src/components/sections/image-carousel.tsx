"use client";

import React, { useState } from "react";

const ImageCarousel = ({ images, title, subtitle }: { images: string[]; title?: string; subtitle?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden bg-[#F5FBFF] pb-32"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      {(title || subtitle) && (
        <div className="mb-6 text-center">
          {title && <h1 className="text-2xl font-bold text-[#113D86] sm:text-4xl">{title}</h1>}
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>
      )}
      {/* Image Display */}
      <div
        className="flex gap-4 px-4 py-4 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(calc(-${currentIndex * 85}vw - ${currentIndex} * 1rem))` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-[85vw] h-auto flex-shrink-0 object-cover rounded-3xl shadow-sm"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 bg-black/50 hover:bg-black/70 transition-colors text-white w-10 h-10 flex items-center justify-center rounded-full transform -translate-y-1/2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 bg-black/50 hover:bg-black/70 transition-colors text-white w-10 h-10 flex items-center justify-center rounded-full transform -translate-y-1/2"
      >
        &#10095;
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
