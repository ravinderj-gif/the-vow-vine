import fs from 'fs';
import path from 'path';

const MANIFEST_PATH = path.join(process.cwd(), 'data', 'instagram-manifest.json');

function localPathFromFilename(filename, type) {
  if (!filename) return null;
  const folder = type === 'video' ? 'videos' : 'images';
  return `/assets/${folder}/instagram/${filename}`;
}

function toPublicPath(p) {
  if (!p) return null;
  if (p.startsWith('/assets/')) return p;
  return p.replace(/^src\//, '/').replace(/^public/, '');
}

function normalizeManifestPost(post) {
  const items = (post.localItems || []).map((item) => ({
    type: item.type,
    src: toPublicPath(item.local) || localPathFromFilename(item.filename, item.type),
    remote: item.remote,
  }));

  if (!items.length && post.items?.length) {
    post.items.forEach((item, idx) => {
      items.push({
        type: item.type,
        src: localPathFromFilename(`post-${post.shortcode}-${idx + 1}.${item.type === 'video' ? 'mp4' : 'jpg'}`, item.type),
        remote: item.image || item.video,
      });
    });
  }

  const primary = items[0];
  const videoItem = items.find((i) => i.type === 'video');
  return {
    id: post.id,
    shortcode: post.shortcode,
    caption: post.caption || '',
    type: post.type,
    permalink: post.permalink || `https://www.instagram.com/p/${post.shortcode}/`,
    thumbnail: primary?.src || post.image,
    video: videoItem?.src || null,
    items,
    category: categorizePost(post),
  };
}

function categorizePost(post) {
  const cap = (post.caption || '').toLowerCase();
  if (post.type === 'video') return 'Reels';
  if (cap.includes('haldi')) return 'Traditional';
  if (cap.includes('sangeet')) return 'Cinematic';
  if (cap.includes('pre-wedding') || cap.includes('pre wedding')) return 'Pre-Wedding';
  if (cap.includes('engagement')) return 'Engagement';
  if (cap.includes('wedding')) return 'Weddings';
  return 'Cinematic';
}

export function getManifestPosts() {
  const raw = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  return raw.posts.map(normalizeManifestPost);
}

export async function fetchInstagramGraph() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) return null;

  const res = await fetch(
    `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_type,media_url,thumbnail_url}&access_token=${token}&limit=50`
  );
  if (!res.ok) return null;
  const data = await res.json();

  return (data.data || []).map((item) => ({
    id: item.id,
    shortcode: item.permalink?.split('/p/')[1]?.replace('/', '') || item.id,
    caption: item.caption || '',
    type: item.media_type?.toLowerCase() === 'video' ? 'video' : item.media_type?.toLowerCase() === 'carousel_album' ? 'carousel' : 'image',
    permalink: item.permalink,
    thumbnail: item.thumbnail_url || item.media_url,
    video: item.media_type === 'VIDEO' ? item.media_url : null,
    items: [{ type: item.media_type === 'VIDEO' ? 'video' : 'image', src: item.media_url, remote: item.media_url }],
    category: categorizePost({ caption: item.caption, type: item.media_type }),
  }));
}

export async function getInstagramPosts() {
  try {
    const live = await fetchInstagramGraph();
    if (live?.length) return live;
  } catch {
    /* fallback */
  }
  return getManifestPosts();
}

export function getGalleryItems(posts) {
  const items = [];
  posts.forEach((post) => {
    post.items.forEach((item, i) => {
      if (item.src) {
        items.push({
          id: `${post.id}-${i}`,
          src: item.src,
          type: item.type,
          category: post.category,
          caption: post.caption,
          permalink: post.permalink,
          postType: post.type,
        });
      }
    });
  });
  return items;
}

export function getReels(posts) {
  return posts.filter((p) => p.type === 'video' && p.video);
}

export function getTestimonialsFromCaptions(posts) {
  return posts
    .filter((p) => p.caption && p.caption.length > 30)
    .slice(0, 6)
    .map((p, i) => ({
      id: p.id,
      quote: p.caption.split('\n')[0].replace(/#\S+/g, '').trim().slice(0, 120),
      name: extractCoupleName(p.caption) || `Happy Couple ${i + 1}`,
      location: 'South India',
      image: p.thumbnail,
    }));
}

function extractCoupleName(caption) {
  const match = caption.match(/^([A-Z&\s]{2,20})\/\//);
  return match?.[1]?.trim();
}
