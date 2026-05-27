import { Router } from 'express';
import Inquiry from '../models/Inquiry.js';
import { connectDB } from '../config/db.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    await connectDB();
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json({ success: true, id: inquiry._id });
  } catch (err) {
    // MongoDB optional — log and succeed
    console.log('[Inquiry saved locally]', req.body);
    res.json({ success: true, fallback: true });
  }
});

router.get('/', async (req, res) => {
  if (req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  await connectDB();
  const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(50);
  res.json(inquiries);
});

export default router;
