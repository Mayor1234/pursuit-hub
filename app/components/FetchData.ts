import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function fetchData(start: number, end: number) {
  const query = groq`{
      "posts": *[_type=='post'] | order(publishedAt desc)[0...6]{
    ...,
    author->{name},
    categories[]->,
  },

      "trending": *[_type=='post']{
    ...,
    author->{name},
    categories[]->,
  } | order(publishedAt desc)[${start}...${end}],

      "total": count(*[_type=='post'])
  }`;

  const { posts, trending, total } = await client.fetch(query, {
    cache: 'no-store',
  });

  return {
    posts,
    trending,
    total,
  };
}
