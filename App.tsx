import React, { useState } from 'react';
import Hero from './components/Hero';
import PhotoMV from './components/PhotoMV';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
    setIsPlaying(true);
  };

  return (
    <div className="w-full h-screen font-sans bg-black text-white overflow-hidden relative selection:bg-blue-500 selection:text-white">
      {/* Intro Overlay */}
      {!hasStarted && <Hero onStart={handleStart} />}

      {/* Main Experience */}
      {hasStarted && (
        <main className="relative w-full h-full animate-fade-in">
          
          {/* Visual Layer */}
          <PhotoMV />

          {/* Controls Layer */}
          <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          
          {/* Static Overlay Info (Top Left) */}
          <div className="absolute top-6 left-6 z-30 pointer-events-none opacity-80 mix-blend-difference">
            <h1 className="text-white font-bold text-xl tracking-tighter">MAYDAY</h1>
            <p className="text-xs tracking-[0.3em] uppercase">25th Anniversary Tour</p>
          </div>

        </main>
      )}
    </div>
  );
};

export default App;