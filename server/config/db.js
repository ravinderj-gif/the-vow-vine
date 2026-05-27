import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  if (mongoose.connection.readyState >= 1) return mongoose.connection;
  return mongoose.connect(uri);
}
