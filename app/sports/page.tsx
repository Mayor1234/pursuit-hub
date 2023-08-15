import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { Suspense } from 'react';
import Loading from '../components/loading/Loading';

import SportComponent from '../components/sport-component/SportComponent';
import SportTrending from '../components/sport-component/SportTrending';

const query = groq`*[_type == 'category' && title == 'sports'][0]{
    ...,
    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{ name},
    } | order(publishedAt desc)[0...6]
  }
  `;

const queryAll = groq`*[_type == 'category' && title == 'sports'][0]{

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

  const sportTrend = trending.posts;

  return (
    <div className="max-w-5xl mx-auto">
      <Suspense fallback={<Loading />}>
        <SportComponent posts={posts} />
        <SportTrending trending={sportTrend} />
      </Suspense>
    </div>
  );
};

export default page;
