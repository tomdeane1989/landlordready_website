import { NextResponse } from 'next/server';

const SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbypwSgfKD-_R-xfr6KpnTSE32OplCd82DJ4bsRoJ6VnK89rDhC6Nqzxxgi49Gpbjok/exec';

export async function POST(request: Request) {
  try {
    const { email, phone, companyName, source = 'unknown' } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, phone: phone || '', companyName: companyName || '', source }),
    });

    if (!res.ok) {
      throw new Error(`Sheets webhook returned ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
