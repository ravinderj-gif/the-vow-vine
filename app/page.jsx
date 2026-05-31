import HomeClient from '@/components/sections/HomeClient';
import { getInstagramPosts, getReels } from '@/lib/instagram';

export default async function HomePage() {
  const posts = await getInstagramPosts();
  const reels = getReels(posts);
  const heroVideo = reels[0]?.video || '/assets/videos/instagram/post-08-01.mp4';

  return <HomeClient heroVideo={heroVideo} posts={posts} />;
}
