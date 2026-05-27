import {
  bridePortrait,
  indianCouple,
  ceremony,
  coupleEmbrace,
  groomPortrait,
  haldiCelebration,
  reception,
  familyJoy,
  cinematicFrame,
  mandap,
  celebration,
  weddingDetail,
} from './images';
import reelVideo from '../assets/videos/cinematic-reel.mp4';

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Haldi Moments',
  'Couple Portraits',
  'Bride Portraits',
  'Groom Portraits',
  'Wedding Rituals',
  'Reception Highlights',
  'Family Emotions',
  'Cinematic Frames',
];

export const PORTFOLIO_ITEMS = [
  { id: 1, src: bridePortrait, category: 'Bride Portraits', alt: 'Traditional Indian bride portrait', tall: true },
  { id: 2, src: indianCouple, category: 'Couple Portraits', alt: 'Elegant wedding couple portrait', tall: false },
  { id: 3, src: cinematicFrame, category: 'Cinematic Frames', alt: 'Cinematic wedding frame', tall: false },
  { id: 4, src: familyJoy, category: 'Family Emotions', alt: 'Family wedding celebration', tall: true },
  { id: 5, src: mandap, category: 'Wedding Rituals', alt: 'Traditional wedding ceremony', tall: false },
  { id: 6, src: groomPortrait, category: 'Groom Portraits', alt: 'Groom portrait session', tall: true },
  { id: 7, src: haldiCelebration, category: 'Haldi Moments', alt: 'Haldi celebration moments', tall: false },
  { id: 8, src: reception, category: 'Reception Highlights', alt: 'Reception celebration highlights', tall: false },
  { id: 9, src: ceremony, category: 'Wedding Rituals', alt: 'Sacred wedding ceremony', tall: true },
  { id: 10, src: coupleEmbrace, category: 'Couple Portraits', alt: 'Romantic couple moment', tall: false },
  { id: 11, src: celebration, category: 'Cinematic Frames', alt: 'Cinematic storytelling frame', tall: true },
  { id: 12, src: weddingDetail, category: 'Haldi Moments', alt: 'Wedding detail shot', tall: false },
];

export const REEL_ITEMS = [
  { id: 1, video: reelVideo, thumbnail: ceremony, title: 'Cinematic Wedding Film' },
  { id: 2, video: reelVideo, thumbnail: coupleEmbrace, title: 'Love Story Reel' },
  { id: 3, video: reelVideo, thumbnail: haldiCelebration, title: 'Haldi Highlights' },
];
