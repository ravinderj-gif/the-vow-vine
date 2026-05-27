// THE VOW VINE — Instagram portfolio (@thevowvine_)

import brandLogo from '../assets/logo/instagram-profile.jpg';

const imageModules = import.meta.glob('../assets/images/instagram/*.jpg', {
  eager: true,
  import: 'default',
});

const videoModules = import.meta.glob('../assets/videos/instagram/*.mp4', {
  eager: true,
  import: 'default',
});

const img = (path) => imageModules[path];
const vid = (path) => videoModules[path];

export const BRAND_LOGO = brandLogo;

export const INSTAGRAM_IMAGES = Object.keys(imageModules)
  .sort()
  .map((key) => imageModules[key]);

export const INSTAGRAM_VIDEOS = Object.keys(videoModules)
  .sort()
  .map((key) => videoModules[key]);

export const heroVideo =
  vid('../assets/videos/instagram/post-08-01.mp4') ||
  vid('../assets/videos/instagram/post-01-01.mp4');

export const cinematicReel =
  vid('../assets/videos/instagram/post-04-01.mp4') ||
  INSTAGRAM_VIDEOS[0];

export const aboutImage = img('../assets/images/instagram/post-07-03.jpg');
export const pricingImage = img('../assets/images/instagram/post-09-01.jpg');
export const contactBg = img('../assets/images/instagram/post-11-05.jpg');
export const testimonialBg = img('../assets/images/instagram/post-06-02.jpg');

export const SERVICE_IMAGES = [
  img('../assets/images/instagram/post-09-01.jpg'),
  img('../assets/images/instagram/post-07-05.jpg'),
  img('../assets/images/instagram/post-05-06.jpg'),
  img('../assets/images/instagram/post-02-03.jpg'),
  img('../assets/images/instagram/post-11-03.jpg'),
  img('../assets/images/instagram/post-05-04.jpg'),
  img('../assets/images/instagram/post-10-02.jpg'),
  img('../assets/images/instagram/post-02-01.jpg'),
  img('../assets/images/instagram/post-03-05.jpg'),
  img('../assets/images/instagram/post-12-04.jpg'),
];

export const PORTFOLIO_ITEMS = [
  { id: 1, src: img('../assets/images/instagram/post-07-01.jpg'), category: 'Bride Portraits', alt: 'Bride portrait — THE VOW VINE', tall: true },
  { id: 2, src: img('../assets/images/instagram/post-09-02.jpg'), category: 'Couple Portraits', alt: 'Couple portrait — Akshay & Niharika', tall: false },
  { id: 3, src: img('../assets/images/instagram/post-09-05.jpg'), category: 'Cinematic Frames', alt: 'Cinematic couple moment', tall: false },
  { id: 4, src: img('../assets/images/instagram/post-06-01.jpg'), category: 'Family Emotions', alt: 'Family wedding emotions', tall: true },
  { id: 5, src: img('../assets/images/instagram/post-11-04.jpg'), category: 'Wedding Rituals', alt: 'Wedding ceremony ritual', tall: false },
  { id: 6, src: img('../assets/images/instagram/post-05-03.jpg'), category: 'Groom Portraits', alt: 'Groom portrait session', tall: true },
  { id: 7, src: img('../assets/images/instagram/post-02-02.jpg'), category: 'Haldi Moments', alt: 'Haldi celebration — A&N', tall: false },
  { id: 8, src: img('../assets/images/instagram/post-03-03.jpg'), category: 'Reception Highlights', alt: 'Sangeet reception highlights', tall: false },
  { id: 9, src: img('../assets/images/instagram/post-10-04.jpg'), category: 'Wedding Rituals', alt: 'Sacred wedding ceremony', tall: true },
  { id: 10, src: img('../assets/images/instagram/post-09-04.jpg'), category: 'Couple Portraits', alt: 'Elegant couple portrait', tall: false },
  { id: 11, src: img('../assets/images/instagram/post-07-07.jpg'), category: 'Cinematic Frames', alt: 'Cinematic storytelling frame', tall: true },
  { id: 12, src: img('../assets/images/instagram/post-02-05.jpg'), category: 'Haldi Moments', alt: 'Joyful haldi ceremony', tall: false },
  { id: 13, src: img('../assets/images/instagram/post-11-06.jpg'), category: 'Bride Portraits', alt: 'Bride on wedding day', tall: false },
  { id: 14, src: img('../assets/images/instagram/post-05-07.jpg'), category: 'Family Emotions', alt: 'Wedding day emotions', tall: true },
  { id: 15, src: img('../assets/images/instagram/post-03-07.jpg'), category: 'Reception Highlights', alt: 'Sangeet night celebration', tall: false },
];

export const REEL_ITEMS = [
  {
    id: 1,
    video: vid('../assets/videos/instagram/post-08-01.mp4'),
    thumbnail: img('../assets/images/instagram/post-09-01.jpg'),
    title: 'Love Story Reel — A&N',
  },
  {
    id: 2,
    video: vid('../assets/videos/instagram/post-04-01.mp4'),
    thumbnail: img('../assets/images/instagram/post-05-01.jpg'),
    title: 'Cinematic Wedding Film — D&K',
  },
  {
    id: 3,
    video: vid('../assets/videos/instagram/post-01-01.mp4'),
    thumbnail: img('../assets/images/instagram/post-03-01.jpg'),
    title: 'Sangeet Teaser — A&N',
  },
];

export const STORY_IMAGES = [
  img('../assets/images/instagram/post-11-02.jpg'),
  img('../assets/images/instagram/post-09-03.jpg'),
  img('../assets/images/instagram/post-02-04.jpg'),
];

export const INSTAGRAM_FEED = [
  img('../assets/images/instagram/post-02-01.jpg'),
  img('../assets/images/instagram/post-03-02.jpg'),
  img('../assets/images/instagram/post-05-02.jpg'),
  img('../assets/images/instagram/post-07-02.jpg'),
  img('../assets/images/instagram/post-09-02.jpg'),
  img('../assets/images/instagram/post-10-03.jpg'),
  img('../assets/images/instagram/post-11-01.jpg'),
  img('../assets/images/instagram/post-06-03.jpg'),
  img('../assets/images/instagram/post-12-02.jpg'),
];

export const REEL_THUMBNAILS = [
  img('../assets/images/instagram/post-03-01.jpg'),
  img('../assets/images/instagram/post-05-01.jpg'),
  img('../assets/images/instagram/post-07-01.jpg'),
];
