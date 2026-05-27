import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import instagramRoutes from './routes/instagram.js';
import inquiryRoutes from './routes/inquiries.js';

dotenv.config({ path: '.env.local' });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));
app.use(express.json({ limit: '1mb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.get('/health', (_req, res) => res.json({ status: 'ok', brand: 'THE VOW VINE' }));
app.use('/api/instagram', instagramRoutes);
app.use('/api/inquiries', inquiryRoutes);

app.listen(PORT, () => console.log(`THE VOW VINE API running on :${PORT}`));
