import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { Suspense } from 'react';
import Loading from '../components/loading/Loading';

import ShopComponent from '../components/shop-component/ShopComponent';
import ShopTrending from '../components/shop-component/ShopTrending';

export const revalidate = 60;

const query = groq`*[_type == 'category' && title == 'shopping'][0]{
    ...,
    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{ name},
    } | order(publishedAt desc)[0...6]
  }
  `;

const queryAll = groq`*[_type == 'category' && title == 'shopping'][0]{

    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{name},
    categories[]->,

    } | order(publishedAt desc)
  }
  `;

const page = async () => {
  const posts = await client.fetch(query, {
    cache: 'no-store',
  });
  const trending = await client.fetch(queryAll, {
    cache: 'no-store',
  });

  const shopTrend = trending.posts;

  return (
    <div className="max-w-5xl mx-auto">
      <Suspense fallback={<Loading />}>
        <ShopComponent posts={posts} />
        <ShopTrending trending={shopTrend} />
      </Suspense>
    </div>
  );
};

export default page;
