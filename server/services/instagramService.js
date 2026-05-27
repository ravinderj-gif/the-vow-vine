import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function refreshInstagramFeed() {
  const script = path.join(__dirname, '../../scripts/download-instagram.mjs');
  await execAsync(`node "${script}"`, { cwd: path.join(__dirname, '../..') });
  return { refreshed: true, at: new Date().toISOString() };
}

export async function getFeedStatus() {
  return { username: 'thevowvine_', source: process.env.INSTAGRAM_ACCESS_TOKEN ? 'graph-api' : 'manifest-cache' };
}
