import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const hookUrl = process.env.VERCEL_DEPLOY_HOOK;
  if (!hookUrl) {
    return NextResponse.json({ error: 'Deploy hook not configured' }, { status: 500 });
  }

  await fetch(hookUrl, { method: 'POST' });

  return NextResponse.json({ success: true, triggered: new Date().toISOString() });
}
