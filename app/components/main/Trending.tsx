import TrendingCard from './TrendingCard';

import { Post } from '@/typings';

type Props = {
  trending: Post[];
  total?: number;
};

const Trending = ({ trending, total }: Props) => {
  if (total === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen w-screen text-2xl text-gray-800">
        There is no post
      </div>
    );
  }
  return (
    <section className="max-w-5xl mx-auto lg:py-10">
      <div className="py-4 md:py-8 ">
        <h2 className="text-[32px] px-5 tracking-normal text-tertiary md:text-[43px] font-medium md:leading-[1em] md:px-0 lg:px-0 ">
          Trending Stories
        </h2>
      </div>
      <TrendingCard initial_trending={trending} total={total} />
    </section>
  );
};

export default Trending;
