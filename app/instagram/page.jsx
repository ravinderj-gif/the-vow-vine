import { InstagramPreview } from '@/components/sections/InstagramGrid';
import { getInstagramPosts } from '@/lib/instagram';
import { BRAND } from '@/lib/constants';

export const metadata = { title: `Instagram | ${BRAND.name}` };

export default async function InstagramPage() {
  const posts = await getInstagramPosts();
  return (
    <div className="pt-24">
      <InstagramPreview posts={posts} />
    </div>
  );
}
