import fs from 'fs';
import path from 'path';
import { InstagramClient } from 'insta-fetch-cli/dist/client.js';

const ROOT = process.cwd();
const client = new InstagramClient();

const PATHS = {
  images: path.join(ROOT, 'public/assets/images/instagram'),
  videos: path.join(ROOT, 'public/assets/videos/instagram'),
  logo: path.join(ROOT, 'public/assets/logo'),
  manifest: path.join(ROOT, 'data/instagram-manifest.json'),
};

async function fetchProfileWithMedia(username) {
  const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
  const data = await client.request(url);
  const user = data.data?.user;
  if (!user) throw new Error('User not found');
  return { user, edges: user.edge_owner_to_timeline_media?.edges ?? [] };
}

function nodeToMedia(node) {
  const isVideo = node.is_video;
  const image = node.display_url || node.thumbnail_src;
  const video = node.video_url || node.video_versions?.[0]?.url || null;
  const carousel =
    node.edge_sidecar_to_children?.edges?.map(({ node: child }) => ({
      type: child.is_video ? 'video' : 'image',
      image: child.display_url || child.thumbnail_src,
      video: child.video_url || child.video_versions?.[0]?.url || null,
    })) ?? [];
  const items = carousel.length ? carousel : [{ type: isVideo ? 'video' : 'image', image, video }];
  return {
    id: node.id,
    shortcode: node.shortcode,
    caption: node.edge_media_to_caption?.edges?.[0]?.node?.text ?? '',
    type: isVideo ? 'video' : carousel.length ? 'carousel' : 'image',
    image,
    video,
    items,
    permalink: `https://www.instagram.com/p/${node.shortcode}/`,
  };
}

async function downloadFile(url, dest) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      Referer: 'https://www.instagram.com/',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  Object.values(PATHS).slice(0, 3).forEach((p) => fs.mkdirSync(p, { recursive: true }));

  const { user, edges } = await fetchProfileWithMedia('thevowvine_');
  const media = edges.map(({ node }) => nodeToMedia(node));
  console.error(`Fetched ${media.length} posts from @${user.username}`);

  const profilePic = user.profile_pic_url_hd || user.profile_pic_url;
  if (profilePic) {
    await downloadFile(profilePic, path.join(PATHS.logo, 'instagram-profile.jpg'));
    console.error('Saved profile logo');
  }

  const downloaded = [];

  for (let i = 0; i < media.length; i++) {
    const post = media[i];
    const localItems = [];

    for (let j = 0; j < post.items.length; j++) {
      const item = post.items[j];
      const isVideo = item.type === 'video' && item.video;
      const url = isVideo ? item.video : item.image;
      const ext = isVideo ? 'mp4' : 'jpg';
      const filename = `post-${String(i + 1).padStart(2, '0')}-${String(j + 1).padStart(2, '0')}.${ext}`;
      const folder = isVideo ? PATHS.videos : PATHS.images;
      const dest = path.join(folder, filename);
      const publicPath = `/assets/${isVideo ? 'videos' : 'images'}/instagram/${filename}`;

      try {
        await downloadFile(url, dest);
        localItems.push({ local: publicPath, type: item.type, filename });
        console.error(`Saved ${publicPath}`);
      } catch (err) {
        console.error(`Failed ${filename}: ${err.message}`);
        localItems.push({ remote: url, type: item.type });
      }
    }

    downloaded.push({ ...post, localItems });
  }

  fs.mkdirSync(path.dirname(PATHS.manifest), { recursive: true });
  fs.writeFileSync(
    PATHS.manifest,
    JSON.stringify({ username: user.username, fullName: user.full_name, bio: user.biography, posts: downloaded }, null, 2)
  );

  console.log(JSON.stringify({ posts: downloaded.length, synced: new Date().toISOString() }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
