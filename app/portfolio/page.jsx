import PortfolioGallery from '@/components/sections/PortfolioGallery';
import { getInstagramPosts, getGalleryItems } from '@/lib/instagram';
import { BRAND } from '@/lib/constants';

export const metadata = { title: `Portfolio | ${BRAND.name}` };

export default async function PortfolioPage() {
  const posts = await getInstagramPosts();
  const items = getGalleryItems(posts);

  return (
    <div className="pt-24 section-padding bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Our Work</span>
          <h1 className="luxury-heading text-elegant-black mt-4">Portfolio Gallery</h1>
          <p className="mt-4 font-[family-name:var(--font-cormorant)] text-xl text-elegant-black/60">Curated wedding moments from @thevowvine_</p>
        </div>
        <PortfolioGallery items={items} />
      </div>
    </div>
  );
}
