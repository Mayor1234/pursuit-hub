import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function fetchData(start: number, end: number) {
  const query = groq`{
       "posts": *[_type=='post'] | order(publishedAt desc)[${start}...${end}]{
    ...,
    author->{name},
    categories[]->,
  },
        "bannerPost": *[_type=='post']{
    ...,
    author->{name},
    categories[]->,
  } | order(publishedAt desc)[0],

        "trending": *[_type=='post']{
    ...,
    author->{name},
    categories[]->,
  } | order(publishedAt desc)[0...100],

       "total": count(*[_type=='post'])
      }`;

  const { posts, bannerPost, trending, total } = await client.fetch(query);

  return {
    posts,
    bannerPost,
    trending,
    total,
  };
}
