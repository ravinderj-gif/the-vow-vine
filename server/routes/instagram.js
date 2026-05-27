import { Router } from 'express';
import { refreshInstagramFeed, getFeedStatus } from '../services/instagramService.js';

const router = Router();

router.get('/status', async (_req, res) => {
  res.json(await getFeedStatus());
});

router.post('/refresh', async (req, res) => {
  if (req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const result = await refreshInstagramFeed();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
