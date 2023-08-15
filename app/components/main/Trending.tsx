import TrendingCard from './TrendingCard';

import { Post } from '@/typings';

type Props = {
  trending: Post[];
};

const Trending = ({ trending }: Props) => {
  // const [trendPost, setTrendPost] = useState(trending);

  // const getMorePosts = async () => {
  //   try {
  //     const data = await fetch(
  //       'http://localhost:3000/api/blog?start=2&end=5'
  //     ).then((res) => console.log(res.json()));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <section className="max-w-5xl mx-auto my-10">
      <div className=" py-4 md:py-8">
        <h2 className="text-[32px] md:text-[43px] px-5 font-medium md:leading-[1em] md:px-0 tracking-normal text-tertiary">
          Trending Stories
        </h2>
      </div>
      <TrendingCard trending={trending} />
    </section>
  );
};

export default Trending;
