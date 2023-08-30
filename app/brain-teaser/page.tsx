import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import BrainTeaserPost from '../components/brain-teaser-component/BrainTeaserPost';
import { Suspense } from 'react';
import Loading from '../components/loading/Loading';

import BrainTrending from '../components/brain-teaser-component/BrainTrending';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Brain Teasers',
};
const query = groq`*[_type == 'category' && title == 'brain-teaser'][0]{
    ...,
    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{ name},
    } | order(publishedAt desc)[0...6]
  }
  `;

const queryAll = groq`*[_type == 'category' && title == 'brain-teaser'][0]{

    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{name},
    categories[]->,

    } | order(publishedAt desc)
  }
  `;
export const revalidate = 60;

const page = async () => {
  const posts = await client.fetch(query);
  const trending = await client.fetch(queryAll);

  const brainTrend = trending.posts;

  return (
    <div className="max-w-5xl mx-auto">
      <Suspense fallback={<Loading />}>
        <BrainTeaserPost posts={posts} />
        <BrainTrending trending={brainTrend} />
      </Suspense>
    </div>
  );
};

export default page;
