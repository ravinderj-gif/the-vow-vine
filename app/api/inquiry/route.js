import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const INQUIRIES_FILE = path.join(process.cwd(), 'data', 'inquiries.json');

function saveInquiry(body) {
  fs.mkdirSync(path.dirname(INQUIRIES_FILE), { recursive: true });
  let list = [];
  if (fs.existsSync(INQUIRIES_FILE)) {
    list = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf8'));
  }
  list.unshift({ ...body, id: Date.now(), createdAt: new Date().toISOString() });
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(list, null, 2));
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    saveInquiry(body);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET(request) {
  const secret = request.headers.get('x-admin-secret');
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!fs.existsSync(INQUIRIES_FILE)) return NextResponse.json([]);
  return NextResponse.json(JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf8')));
}
