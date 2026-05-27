import {
  Camera, Film, Video, Heart, Users, Clapperboard,
  Plane, Sun, Sparkles, MapPin,
} from 'lucide-react';

import pricingRef from '../assets/images/pricing-reference.jpg';
import brandCard from '../assets/images/brand-card.jpg';
import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';
import p5 from '../assets/images/portfolio-5.jpg';
import p6 from '../assets/images/portfolio-6.jpg';

export const SERVICES = [
  { id: 1, title: 'Wedding Photography', icon: Camera, image: pricingRef },
  { id: 2, title: 'Wedding Films', icon: Film, image: brandCard },
  { id: 3, title: 'Cinematic Videography', icon: Video, image: p1 },
  { id: 4, title: 'Candid Photography', icon: Heart, image: p2 },
  { id: 5, title: 'Traditional Photography', icon: Users, image: p3 },
  { id: 6, title: 'Traditional Videography', icon: Clapperboard, image: p4 },
  { id: 7, title: 'Drone Wedding Shoots', icon: Plane, image: p5 },
  { id: 8, title: 'Haldi Coverage', icon: Sun, image: p6 },
  { id: 9, title: 'Reception Coverage', icon: Sparkles, image: pricingRef },
  { id: 10, title: 'Destination Weddings', icon: MapPin, image: brandCard },
];
