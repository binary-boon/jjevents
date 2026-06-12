import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload/payload.config';

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

  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: 'enquiries',
      data: {
        name,
        email,
        phone: String(body.phone ?? '').trim(),
        eventType: EVENT_TYPES.has(String(body.eventType)) ? String(body.eventType) : 'Other Celebration',
        guests: String(body.guests ?? '').trim(),
        message: String(body.message ?? '').trim(),
        status: 'new',
      },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Enquiry create failed:', err);
    return NextResponse.json({ error: 'Could not save enquiry.' }, { status: 500 });
  }
}
