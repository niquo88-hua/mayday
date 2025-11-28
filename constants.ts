import { SlideData, SongData } from './types';

// Note: In a real deployment, replace the audio URL with the actual file for "happy.BIRTH.day"
// For this demo, we use a royalty-free placeholder that sounds celebratory/emotional.
export const THEME_SONG: SongData = {
  title: "happy.BIRTH.day",
  artist: "Mayday 五月天",
  url: "http://www.joyc.cn/md/hb.mp3" 
};

// Fixed 9 slides corresponding to local images ashin_1.jpg through ashin_9.jpg
export const SLIDES: SlideData[] = [
  {
    id: 1,
    imageUrl: "http://www.joyc.cn/md/1.jpg", 
    lyric: "Happy Birthday to You, Happy Birthday to Ashin",
    subLyric: "To the poet who sang our youth."
  },
  {
    id: 2,
    imageUrl: "http://www.joyc.cn/md/2.jpg",
    lyric: "活着其实很好，再吃一颗苹果",
    subLyric: "Being alive is good, just eat another apple."
  },
  {
    id: 3,
    imageUrl: "http://www.joyc.cn/md/3.jpg",
    lyric: "有些事现在不做，一辈子都不会做了",
    subLyric: "Some things, if not done now, will never be done."
  },
  {
    id: 4,
    imageUrl: "http://www.joyc.cn/md/4.jpg",
    lyric: "经过了漫长的等候，梦想是梦想，我还是一个我",
    subLyric: "After a long wait, dreams are still dreams, and I am still me."
  },
  {
    id: 5,
    imageUrl: "http://www.joyc.cn/md/5.jpg",
    lyric: "这一生志愿只要平凡快乐，谁说这样不伟大呢",
    subLyric: "My only wish is to be ordinary and happy. Who says that's not great?"
  },
  {
    id: 6,
    imageUrl: "http://www.joyc.cn/md/6.jpg",
    lyric: "我不愿让你一个人，一个人在人海浮沉",
    subLyric: "I don't want to let you be alone, drifting alone in the sea of people."
  },
  {
    id: 7,
    imageUrl: "http://www.joyc.cn/md/7.jpg",
    lyric: "我和我最后的倔强，握紧双手绝对不放",
    subLyric: "Me and my last stubbornness, holding hands tight and never letting go."
  },
  {
    id: 8,
    imageUrl: "http://www.joyc.cn/md/8.jpg",
    lyric: "逆风的方向，更适合飞翔",
    subLyric: "The direction against the wind is more suitable for flying."
  },
  {
    id: 9,
    imageUrl: "http://www.joyc.cn/md/9.jpg",
    lyric: "我就在这里，等着你，Happy Birthday",
    subLyric: "I am right here, waiting for you. Happy Birthday."
  }
];