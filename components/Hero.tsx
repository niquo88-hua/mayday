import React from 'react';
import { PlayCircle } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-[60] bg-slate-900 flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/concert/1920/1080')] bg-cover bg-center opacity-30 blur-sm scale-105"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-blue-400 tracking-[0.5em] text-sm md:text-lg mb-4 uppercase animate-pulse">
          Mayday 25th Anniversary
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          HAPPY<br/>BIRTH<br/>DAY
        </h1>
        
        <p className="text-slate-300 text-lg mb-12 max-w-md font-light">
          To Ashin & The Day We Met<br/>
          <span className="text-sm opacity-70">2025.12.06 Guangzhou</span>
        </p>

        <button 
          onClick={onStart}
          className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        >
          <PlayCircle className="w-5 h-5 group-hover:animate-spin-slow" />
          <span className="tracking-widest">ENTER MEMORY</span>
        </button>
      </div>

      <div className="absolute bottom-10 text-slate-500 text-xs">
         Created for the Love of Music
      </div>
    </div>
  );
};

export default Hero;
