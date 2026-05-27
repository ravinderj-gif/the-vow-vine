import fs from 'fs';
import { InstagramClient } from 'insta-fetch-cli/dist/client.js';

const client = new InstagramClient();

async function fetchProfileWithMedia(username) {
  const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
  const data = await client.request(url);
  const user = data.data?.user;
  if (!user) throw new Error('User not found');

  const edges = user.edge_owner_to_timeline_media?.edges ?? [];
  return { user, edges };
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

  const items = carousel.length
    ? carousel
    : [{ type: isVideo ? 'video' : 'image', image, video }];

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
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Referer: 'https://www.instagram.com/',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  const { user, edges } = await fetchProfileWithMedia('thevowvine_');
  const media = edges.map(({ node }) => nodeToMedia(node));
  console.error(`Fetched ${media.length} posts from @${user.username}`);

  fs.mkdirSync('src/assets/images/instagram', { recursive: true });
  fs.mkdirSync('src/assets/videos/instagram', { recursive: true });
  fs.mkdirSync('src/assets/logo', { recursive: true });

  const profilePic = user.profile_pic_url_hd || user.profile_pic_url;
  if (profilePic) {
    await downloadFile(profilePic, 'src/assets/logo/instagram-profile.jpg');
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
      const dest = isVideo
        ? `src/assets/videos/instagram/${filename}`
        : `src/assets/images/instagram/${filename}`;

      try {
        await downloadFile(url, dest);
        localItems.push({ local: dest, type: item.type, filename });
        console.error(`Saved ${dest}`);
      } catch (err) {
        console.error(`Failed ${filename}: ${err.message}`);
        localItems.push({ remote: url, type: item.type });
      }
    }

    downloaded.push({ ...post, localItems });
  }

  fs.writeFileSync(
    'src/data/instagram-manifest.json',
    JSON.stringify({
      username: user.username,
      fullName: user.full_name,
      bio: user.biography,
      posts: downloaded,
    }, null, 2)
  );

  console.log(JSON.stringify(downloaded.map((p) => ({
    shortcode: p.shortcode,
    type: p.type,
    caption: p.caption.slice(0, 60),
    files: p.localItems.map((x) => x.filename || 'remote'),
  })), null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
