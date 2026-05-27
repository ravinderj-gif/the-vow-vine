import fs from 'fs';

const html = fs.readFileSync('instagram-page.html', 'utf8');

const patterns = [
  /https:\/\/[^"\\]+cdninstagram\.com[^"\\]*/g,
  /https:\/\/[^"\\]+fbcdn\.net[^"\\]*/g,
];

const all = new Set();
for (const pattern of patterns) {
  for (const match of html.matchAll(pattern)) {
    let url = match[0]
      .replace(/\\u0026/g, '&')
      .replace(/\\\//g, '/')
      .replace(/\\"/g, '');
    if (
      url.includes('scontent') ||
      url.includes('instagram.f') ||
      url.includes('e35_p')
    ) {
      all.add(url);
    }
  }
}

const media = [...all].filter(
  (u) =>
    u.includes('.jpg') ||
    u.includes('.webp') ||
    u.includes('.mp4') ||
    u.includes('e35')
);

console.log(JSON.stringify(media, null, 2));
console.error('Total URLs:', media.length);
