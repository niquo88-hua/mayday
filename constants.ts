import { SlideData, SongData } from './types';

// Note: In a real deployment, replace the audio URL with the actual file for "happy.BIRTH.day"
// For this demo, we use a royalty-free placeholder that sounds celebratory/emotional.
export const THEME_SONG: SongData = {
  title: "happy.BIRTH.day",
  artist: "Mayday 五月天",
  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
};

// Fixed 9 slides corresponding to local images ashin_1.jpg through ashin_9.jpg
export const SLIDES: SlideData[] = [
  {
    id: 1,
    imageUrl: "ashin_1.jpg", 
    lyric: "Happy Birthday to You, Happy Birthday to Ashin",
    subLyric: "To the poet who sang our youth."
  },
  {
    id: 2,
    imageUrl: "ashin_2.jpg",
    lyric: "活着其实很好，再吃一颗苹果",
    subLyric: "Being alive is good, just eat another apple."
  },
  {
    id: 3,
    imageUrl: "ashin_3.jpg",
    lyric: "有些事现在不做，一辈子都不会做了",
    subLyric: "Some things, if not done now, will never be done."
  },
  {
    id: 4,
    imageUrl: "ashin_4.jpg",
    lyric: "经过了漫长的等候，梦想是梦想，我还是一个我",
    subLyric: "After a long wait, dreams are still dreams, and I am still me."
  },
  {
    id: 5,
    imageUrl: "ashin_5.jpg",
    lyric: "这一生志愿只要平凡快乐，谁说这样不伟大呢",
    subLyric: "My only wish is to be ordinary and happy. Who says that's not great?"
  },
  {
    id: 6,
    imageUrl: "ashin_6.jpg",
    lyric: "我不愿让你一个人，一个人在人海浮沉",
    subLyric: "I don't want to let you be alone, drifting alone in the sea of people."
  },
  {
    id: 7,
    imageUrl: "ashin_7.jpg",
    lyric: "我和我最后的倔强，握紧双手绝对不放",
    subLyric: "Me and my last stubbornness, holding hands tight and never letting go."
  },
  {
    id: 8,
    imageUrl: "ashin_8.jpg",
    lyric: "逆风的方向，更适合飞翔",
    subLyric: "The direction against the wind is more suitable for flying."
  },
  {
    id: 9,
    imageUrl: "ashin_9.jpg",
    lyric: "我就在这里，等着你，Happy Birthday",
    subLyric: "I am right here, waiting for you. Happy Birthday."
  }
];