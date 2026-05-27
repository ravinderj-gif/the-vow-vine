import pricingRef from '../assets/images/pricing-reference.jpg';
import brandCard from '../assets/images/brand-card.jpg';
import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';
import p5 from '../assets/images/portfolio-5.jpg';
import p6 from '../assets/images/portfolio-6.jpg';
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
  { id: 1, src: pricingRef, category: 'Bride Portraits', alt: 'Bride portrait - traditional wedding', tall: true },
  { id: 2, src: brandCard, category: 'Couple Portraits', alt: 'THE VOW VINE brand showcase', tall: false },
  { id: 3, src: p1, category: 'Cinematic Frames', alt: 'Cinematic wedding frame', tall: false },
  { id: 4, src: p2, category: 'Family Emotions', alt: 'Family wedding emotions', tall: true },
  { id: 5, src: p3, category: 'Wedding Rituals', alt: 'Traditional wedding rituals', tall: false },
  { id: 6, src: p4, category: 'Groom Portraits', alt: 'Groom portrait session', tall: true },
  { id: 7, src: p5, category: 'Haldi Moments', alt: 'Haldi celebration moments', tall: false },
  { id: 8, src: p6, category: 'Reception Highlights', alt: 'Reception celebration highlights', tall: false },
  { id: 9, src: pricingRef, category: 'Wedding Rituals', alt: 'Sacred wedding ceremony', tall: true },
  { id: 10, src: brandCard, category: 'Couple Portraits', alt: 'Elegant couple portrait', tall: false },
  { id: 11, src: p3, category: 'Cinematic Frames', alt: 'Cinematic storytelling frame', tall: true },
  { id: 12, src: p5, category: 'Haldi Moments', alt: 'Joyful haldi ceremony', tall: false },
];

export const REEL_ITEMS = [
  { id: 1, video: reelVideo, thumbnail: pricingRef, title: 'Cinematic Wedding Film' },
  { id: 2, video: reelVideo, thumbnail: brandCard, title: 'Love Story Reel' },
  { id: 3, video: reelVideo, thumbnail: p1, title: 'Haldi Highlights' },
];
