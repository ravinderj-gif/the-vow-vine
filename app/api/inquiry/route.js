import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    const res = await fetch(`${apiUrl}/api/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).catch(() => null);

    if (res?.ok) {
      return NextResponse.json({ success: true });
    }

    // Fallback: accept locally if backend unavailable
    console.log('[Inquiry]', body);
    return NextResponse.json({ success: true, fallback: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
