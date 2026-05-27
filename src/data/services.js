import {
  Camera, Film, Video, Heart, Users, Clapperboard,
  Plane, Sun, Sparkles, MapPin,
} from 'lucide-react';
import { SERVICE_IMAGES } from './images';

export const SERVICES = [
  { id: 1, title: 'Wedding Photography', icon: Camera, image: SERVICE_IMAGES[0] },
  { id: 2, title: 'Wedding Films', icon: Film, image: SERVICE_IMAGES[1] },
  { id: 3, title: 'Cinematic Videography', icon: Video, image: SERVICE_IMAGES[2] },
  { id: 4, title: 'Candid Photography', icon: Heart, image: SERVICE_IMAGES[3] },
  { id: 5, title: 'Traditional Photography', icon: Users, image: SERVICE_IMAGES[4] },
  { id: 6, title: 'Traditional Videography', icon: Clapperboard, image: SERVICE_IMAGES[5] },
  { id: 7, title: 'Drone Wedding Shoots', icon: Plane, image: SERVICE_IMAGES[6] },
  { id: 8, title: 'Haldi Coverage', icon: Sun, image: SERVICE_IMAGES[7] },
  { id: 9, title: 'Reception Coverage', icon: Sparkles, image: SERVICE_IMAGES[8] },
  { id: 10, title: 'Destination Weddings', icon: MapPin, image: SERVICE_IMAGES[9] },
];
