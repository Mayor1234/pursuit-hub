import { Post } from '@/typings';
import TrendingCard from '../main/TrendingCard';

type Props = {
  trending: Post[];
  total: number;
};

const BrainTrending = ({ trending, total }: Props) => {
  return (
    <section className="max-w-5xl mx-auto my-10">
      <div className=" py-4 md:py-8">
        <h2 className="text-[32px] md:text-[43px] px-5 font-medium md:leading-[1em] md:px-0 tracking-normal text-pry">
          Brain Teasers
        </h2>
      </div>
      <TrendingCard initial_trending={trending} total={total} />
    </section>
  );
};

export default BrainTrending;
