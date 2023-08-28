import { fetchData } from '@/app/components/FetchData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  const start = parseInt(request.nextUrl.searchParams.get('start') as string);
  const end = parseInt(request.nextUrl.searchParams.get('end') as string);

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return;
  }

  const { trending, total } = await fetchData(start, end);
  return NextResponse.json({ trending, total }, { status: 201 });
}
