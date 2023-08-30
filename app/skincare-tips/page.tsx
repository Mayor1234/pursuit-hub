import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

import { Suspense } from 'react';
import Loading from '../components/loading/Loading';

import SkincarePost from '../components/skincare-tips/SkincarePost';
import SkincareTrending from '../components/skincare-tips/SkincareTrending';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Skincare Tips and Products',
};

const query = groq`*[_type == 'category' && title == 'skincare-tips'][0]{
    ...,
    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{ name},
    } | order(publishedAt desc)[0...6]
  }
  `;

const queryAll = groq`*[_type == 'category' && title == 'skincare-tips'][0]{
    
    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{name},
    categories[]->,

    } | order(publishedAt desc)
  }
  `;

const page = async () => {
  const posts = await client.fetch(query);
  const trending = await client.fetch(queryAll);

  const news = trending.posts;

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <SkincarePost posts={posts} />
        <SkincareTrending trending={news} />
      </Suspense>
    </div>
  );
};

export default page;
