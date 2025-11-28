import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { THEME_SONG } from '../constants';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.warn("Autoplay blocked, waiting for interaction", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg animate-fade-in">
      <div className="hidden md:block text-right mr-2">
        <p className="text-white text-xs font-bold tracking-widest">{THEME_SONG.title}</p>
        <p className="text-blue-300 text-[10px]">{THEME_SONG.artist}</p>
      </div>

      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="text-white hover:text-blue-400 transition-colors"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <button 
        onClick={toggleMute}
        className="text-white hover:text-blue-400 transition-colors"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <audio ref={audioRef} src={THEME_SONG.url} loop />
      
      {isPlaying && (
        <div className="absolute -bottom-1 left-0 w-full flex justify-center">
           <div className="flex gap-1 items-end h-3">
             <span className="w-1 bg-blue-500 animate-[bounce_1s_infinite] h-2"></span>
             <span className="w-1 bg-blue-400 animate-[bounce_1.2s_infinite] h-3"></span>
             <span className="w-1 bg-blue-300 animate-[bounce_0.8s_infinite] h-1"></span>
           </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
