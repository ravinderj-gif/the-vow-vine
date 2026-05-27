import { NextResponse } from 'next/server';
import { getInstagramPosts } from '@/lib/instagram';

export const revalidate = 3600;

export async function GET() {
  try {
    const posts = await getInstagramPosts();
    return NextResponse.json({ success: true, count: posts.length, posts });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
