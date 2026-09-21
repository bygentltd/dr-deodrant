"use client";

import React, { useState } from "react";

const ImageCarousel = ({
  images,
  title,
  subtitle,
  bgColor,
}: {
  images: string[];
  title?: string;
  subtitle?: string;
  bgColor?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
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

    if (isLeftSwipe && currentIndex < images.length - 1) {
      nextSlide();
    } else if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  const isAtFirst = currentIndex === 0;
  const isAtLast = currentIndex === images.length - 1;

  return (
    <div
      className="relative w-full overflow-hidden pt-10 pb-20 select-none"
      style={{ backgroundColor: bgColor || "#F5FBFF" }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      {(title || subtitle) && (
        <div className="mb-6 text-center px-4">
          {title && <h1 className="text-2xl font-bold text-[#113D86] sm:text-4xl font-inter">{title}</h1>}
          {subtitle && <p className="text-gray-600 mt-2 text-sm sm:text-base font-medium">{subtitle}</p>}
        </div>
      )}

      {/* Image Display Carousel */}
      <div
        className="flex gap-4 px-6 py-4 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(calc(-${currentIndex * 80}vw - ${currentIndex * 1}rem))` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="w-[80vw] sm:w-[280px] md:w-[320px] h-auto flex-shrink-0 object-cover rounded-3xl shadow-md border-2 border-white/60"
          />
        ))}
      </div>

      {/* Prev Navigation Button */}
      <button
        onClick={prevSlide}
        disabled={isAtFirst}
        aria-label="Previous Slide"
        className={`absolute top-1/2 left-3 bg-black/60 text-white w-9 h-9 flex items-center justify-center rounded-full transform -translate-y-1/2 backdrop-blur-md transition-all ${
          isAtFirst ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-black/80"
        }`}
      >
        &#10094;
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={nextSlide}
        disabled={isAtLast}
        aria-label="Next Slide"
        className={`absolute top-1/2 right-3 bg-black/60 text-white w-9 h-9 flex items-center justify-center rounded-full transform -translate-y-1/2 backdrop-blur-md transition-all ${
          isAtLast ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-black/80"
        }`}
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-[#113D86]" : "w-2 bg-[#113D86]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
