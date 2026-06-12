import { NextResponse } from 'next/server';

const EVENT_TYPES = new Set([
  'Wedding',
  'Destination Wedding',
  'Sangeet / Mehndi',
  'Engagement',
  'Corporate Gala',
  'Other Celebration',
]);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 422 });
  }

  const enquiry = {
    name,
    email,
    phone: String(body.phone ?? '').trim(),
    eventType: EVENT_TYPES.has(String(body.eventType)) ? String(body.eventType) : 'Other Celebration',
    guests: String(body.guests ?? '').trim(),
    message: String(body.message ?? '').trim(),
  };

  // TODO: send via email (Resend, Nodemailer) or save to a DB
  console.log('New enquiry:', enquiry);

  return NextResponse.json({ ok: true });
}
