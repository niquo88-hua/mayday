export interface SlideData {
  id: number;
  imageUrl: string;
  lyric: string;
  subLyric: string; // The translation or secondary line
}

export interface SongData {
  title: string;
  artist: string;
  url: string; // URL to the audio file
}