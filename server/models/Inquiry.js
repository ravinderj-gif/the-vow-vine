import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  date: String,
  eventType: String,
  venue: String,
  budget: String,
  message: String,
  status: { type: String, default: 'new' },
}, { timestamps: true });

export default mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);
