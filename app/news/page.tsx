import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

import { Suspense } from 'react';
import Loading from '../components/loading/Loading';

import TrendingCard from '../components/main/TrendingCard';

import NewsPost from '../components/news-component/NewsPost';
import NewsTrending from '../components/news-component/NewsTrending';

const query = groq`*[_type == 'category' && title == 'news'][0]{
    ...,
    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{ name},
    } | order(publishedAt desc)[0...6]
  }
  `;

const queryAll = groq`*[_type == 'category' && title == 'news'][0]{
    
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

  const news = trending.posts;

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <NewsPost posts={posts} />
        <NewsTrending trending={news} />
      </Suspense>
    </div>
  );
};

export default page;
