'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface SliderItem {
  image: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  items: SliderItem[];
  className?: string;
}

export default function ImageSlider({ items, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className={`relative group ${className}`}>
      <div 
        ref={sliderRef}
        className="relative overflow-hidden rounded-2xl shadow-2xl h-64 lg:h-96"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === currentIndex}
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Description Content */}
            <div className="absolute bottom-4 left-4 right-4 text-center lg:bottom-8 lg:left-6 lg:right-6">
              <h3 className="text-lg lg:text-2xl xl:text-3xl font-bold text-white mb-2 arabic-text-bold">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm lg:text-lg xl:text-xl arabic-text mb-3 lg:mb-4">
                {item.description}
              </p>
              <div className="flex justify-center gap-2">
                {items.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => goToSlide(dotIndex)}
                    className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                      dotIndex === currentIndex ? 'bg-amber-400' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows - Always Visible */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm border border-white/50 rounded-full p-2 hover:bg-white/50 transition-all duration-300 z-10"
      >
        <ArrowRight className="w-4 h-4 text-white rotate-180" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm border border-white/50 rounded-full p-2 hover:bg-white/50 transition-all duration-300 z-10"
      >
        <ArrowRight className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
