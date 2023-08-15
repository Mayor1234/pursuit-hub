import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';

// export default async function POST(
//   request: NextRequest,
//   response: NextResponse
// ) {
//   // const url = new URL(request.url)
//   // const start = url.searchParams.get('start')
//   // const end = url.searchParams.get('end')

//   const { start } = request.nextUrl.searchParams.get('start');
//   const { end } = request.nextUrl.searchParams.get('end');

//   if (isNaN(Number(start)) || isNaN(Number(end))) {
//     return NextResponse.json({ status: 400 });
//   }

//   const { posts, total } = fetchData(start, end);
// }

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json();

  return NextResponse.json(data, { status: 201 });
}

// export async function fetchData(start: number, end: number) {
//   const query = groq`{
//          "posts": *[_type=='post'] | order(publishedAt desc)[${start}...${end}]{
//       ...,
//       author->{name},
//       categories[]->,
//     },
//           "bannerPost": *[_type=='post']{
//       ...,
//       author->{name},
//       categories[]->,
//     } | order(publishedAt desc)[0],

//           "trending": *[_type=='post']{
//       ...,
//       author->{name},
//       categories[]->,
//     } | order(publishedAt desc)[0...100],

//          "total": count(*[_type=='post'])
//         }`;

//   const { posts, bannerPost, trending, total } = await client.fetch(query);

//   return {
//     posts,
//     bannerPost,
//     trending,
//     total,
//   };
// }
