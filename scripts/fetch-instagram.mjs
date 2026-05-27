import fs from 'fs';

const USER_ID = '76196954332';
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const X_IG_APP_ID = '936619743392459';

const DOC_IDS = [
  '7955681613501644',
  '10015901848480474',
  '23131786122035373',
  '8845758582119845',
];

async function getLsd() {
  const res = await fetch('https://www.instagram.com/thevowvine_/', {
    headers: { 'User-Agent': USER_AGENT },
  });
  const html = await res.text();
  const match = html.match(/"LSD",\[\],{"token":"([^"]+)"/);
  return match?.[1] ?? 'AVqbxe3J_YA';
}

async function fetchWithDocId(docId, lsd) {
  const variables = JSON.stringify({ id: USER_ID, first: 50, after: null });
  const body = new URLSearchParams({ lsd, variables, doc_id: docId });

  const res = await fetch('https://www.instagram.com/api/graphql', {
    method: 'POST',
    headers: {
      'User-Agent': USER_AGENT,
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-IG-App-ID': X_IG_APP_ID,
      'X-FB-LSD': lsd,
      'X-ASBD-ID': '129477',
      'X-Requested-With': 'XMLHttpRequest',
      Origin: 'https://www.instagram.com',
      Referer: 'https://www.instagram.com/thevowvine_/',
    },
    body,
  });

  const text = await res.text();
  try {
    return { docId, status: res.status, data: JSON.parse(text) };
  } catch {
    return { docId, status: res.status, data: text.slice(0, 500) };
  }
}

function parseEdges(data) {
  const paths = [
    data?.data?.user?.edge_owner_to_timeline_media?.edges,
    data?.data?.xdt_api__v1__feed__user_timeline_graphql_connection?.edges,
  ];

  for (const edges of paths) {
    if (edges?.length) return edges;
  }
  return [];
}

function nodeToMedia(node) {
  const isVideo = node.is_video;
  const image =
    node.display_url ||
    node.thumbnail_src ||
    node.display_resources?.at(-1)?.src;

  const video = node.video_url || node.video_versions?.[0]?.url || null;

  const carousel =
    node.edge_sidecar_to_children?.edges?.map(({ node: child }) => ({
      type: child.is_video ? 'video' : 'image',
      image: child.display_url || child.thumbnail_src,
      video: child.video_url || child.video_versions?.[0]?.url || null,
    })) ?? [];

  return {
    id: node.id,
    shortcode: node.shortcode,
    caption: node.edge_media_to_caption?.edges?.[0]?.node?.text ?? '',
    type: isVideo ? 'video' : carousel.length ? 'carousel' : 'image',
    image,
    video,
    carousel,
    permalink: `https://www.instagram.com/p/${node.shortcode}/`,
  };
}

async function main() {
  const lsd = await getLsd();
  console.error('LSD token acquired');

  for (const docId of DOC_IDS) {
    const result = await fetchWithDocId(docId, lsd);
    console.error(`doc_id ${docId}: status ${result.status}`);

    const edges = parseEdges(result.data);
    if (edges.length) {
      const media = edges.map(({ node }) => nodeToMedia(node));
      fs.writeFileSync('instagram-media.json', JSON.stringify(media, null, 2));
      console.log(JSON.stringify(media, null, 2));
      return;
    }
  }

  // Fallback: web profile info API used by insta-fetch
  const res = await fetch(
    `https://i.instagram.com/api/v1/users/web_profile_info/?username=thevowvine_`,
    {
      headers: {
        'User-Agent': USER_AGENT,
        'X-IG-App-ID': X_IG_APP_ID,
      },
    }
  );
  const profile = await res.json();
  const edges = profile?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

  if (!edges.length) {
    console.error('All methods failed');
    console.log(JSON.stringify(profile, null, 2).slice(0, 3000));
    process.exit(1);
  }

  const media = edges.map(({ node }) => nodeToMedia(node));
  fs.writeFileSync('instagram-media.json', JSON.stringify(media, null, 2));
  console.log(JSON.stringify(media, null, 2));
}

main().catch(console.error);
