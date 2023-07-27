import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import TrendingCard from './TrendingCard';
import { Suspense } from 'react';
import Loading from '../loading/Loading';

const query = groq`*[_type=='post' ]{
    ...,
    author->{image, name},
    categories[]->,
  } | order(publishedAt desc)[0...100] 
  `;

const Trending = async () => {
  const trending = await client.fetch(query);

  return (
    <section className="max-w-5xl mx-auto my-10">
      <div className=" py-4 md:py-8">
        <h2 className="text-[32px] md:text-[43px] px-5 font-medium md:leading-[1em] md:px-0 tracking-normal text-pry">
          Trending Stories
        </h2>
      </div>
      <Suspense fallback={<Loading />}>
        <TrendingCard trending={trending} />
      </Suspense>
    </section>
  );
};

export default Trending;
