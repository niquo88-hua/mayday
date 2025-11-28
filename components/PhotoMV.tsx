import React, { useState, useEffect } from 'react';
import { SLIDES } from '../constants';
import { SlideData } from '../types';

const TRANSITION_DURATION = 8000; // 8s transition

const PhotoMV: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, TRANSITION_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black group/container">
      {SLIDES.map((slide, index) => (
        <SlideItem 
          key={slide.id} 
          slide={slide} 
          isActive={index === currentIndex} 
        />
      ))}
      
      {/* Film Grain / Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div 
            key={currentIndex} 
            className="h-full bg-blue-500/80 shadow-[0_0_10px_#3b82f6]"
            style={{ 
              width: '100%',
              animation: `progress ${TRANSITION_DURATION}ms linear`
            }}
        ></div>
      </div>
    </div>
  );
};

const SlideItem: React.FC<{ slide: SlideData; isActive: boolean }> = ({ slide, isActive }) => {
  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      {/* Image with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={slide.imageUrl} 
          alt="Mayday Memory"
          className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-linear ${
            isActive ? 'scale-125 translate-x-4' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </div>

      {/* Lyrics Overlay - Smaller Text Size */}
      <div className="absolute bottom-12 md:bottom-20 left-0 w-full text-center px-6 pointer-events-none">
        <div className={`transition-all duration-1000 delay-500 transform ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-serif tracking-widest leading-relaxed">
            {slide.lyric}
          </h2>
          <p className="text-blue-200/80 text-xs md:text-sm font-light tracking-[0.2em] uppercase shadow-black drop-shadow-md">
            {slide.subLyric}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoMV;