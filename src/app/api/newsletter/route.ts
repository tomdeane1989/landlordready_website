import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    // When RESEND_API_KEY is configured, send via Resend
    if (process.env.RESEND_API_KEY) {
      const { resend } = await import('@/lib/resend');
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID || '',
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
