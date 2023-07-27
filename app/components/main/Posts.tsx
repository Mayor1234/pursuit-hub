import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import PostCard from './PostCard';
import BannerPost from './BannerPost';
import Trending from './Trending';
import { Suspense } from 'react';
import Loading from '../loading/Loading';

const query = groq`*[_type=='post']{
    ...,
    author->{image, name},
    categories[]->,
  } | order(publishedAt desc)[1...4]
  `;

const query2 = groq`*[_type=='post']{
    ...,
    author->{image, name},
    categories[]->,
  } | order(publishedAt desc)[0]
  `;

const Posts = async () => {
  const posts = await client.fetch(query);
  const bannerPost = await client.fetch(query2);

  return (
    <section className="max-w-5xl mx-auto py-10">
      <Suspense fallback={<Loading />}>
        <BannerPost bannerPost={bannerPost} />
        <PostCard posts={posts} />
      </Suspense>
      {/* @ts-expect-error Async Server Component */}
      <Trending />
    </section>
  );
};

export default Posts;
