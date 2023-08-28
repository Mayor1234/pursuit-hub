import TrendingCard from './TrendingCard';

import { Post } from '@/typings';

type Props = {
  trending: Post[];
};

const Trending = ({ trending }: Props) => {
  return (
    <section className="max-w-5xl mx-auto lg:py-10">
      <div className="py-4 md:py-8 ">
        <h2 className="text-[32px] px-5 tracking-normal text-tertiary md:text-[43px] font-medium md:leading-[1em] md:px-0 lg:px-0 ">
          Trending Stories
        </h2>
      </div>
      <TrendingCard initial_trending={trending} />
    </section>
  );
};

export default Trending;
