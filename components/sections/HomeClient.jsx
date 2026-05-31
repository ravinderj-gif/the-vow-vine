'use client';

import { PageLoader } from '@/components/ui/Loader';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Storytelling from '@/components/sections/Storytelling';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import InstagramFeed from '@/components/sections/InstagramFeed';
import Booking from '@/components/sections/Booking';
import Contact from '@/components/sections/Contact';

export default function HomeClient({ heroVideo, posts }) {
  return (
    <PageLoader>
      <Hero videoSrc={heroVideo} />
      <About />
      <Services />
      <Portfolio />
      <Storytelling />
      <Pricing />
      <Testimonials />
      <InstagramFeed posts={posts} />
      <Booking />
      <Contact />
    </PageLoader>
  );
}
