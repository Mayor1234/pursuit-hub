'use client';

import { Suspense, useState } from 'react';
import { Post } from '@/typings';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import ClientRoute from '../ClientRoute';
import Link from 'next/link';
import Loading from '../loading/Loading';

type Props = {
  initial_trending: Post[];
  total?: number;
};

const loadMoreSteps = 5;

const TrendingCard = ({ initial_trending, total }: Props) => {
  const [currentPosts, setCurrentPosts] = useState(initial_trending);

  const [loadedAmout, setLoadedAmount] = useState(loadMoreSteps);
  const [isLoading, setIsloading] = useState(false);

  let showButton;
  if (total !== undefined) {
    showButton = total >= loadedAmout;
  }

  const getMorePosts = async () => {
    try {
      setIsloading(true);
      const data = await fetch(
        `/api/blog?start=${loadedAmout}&end=${loadedAmout + loadMoreSteps}`,
        {
          cache: 'no-store',
        }
      ).then((response) => response.json());
      setLoadedAmount(loadedAmout + loadMoreSteps);
      setCurrentPosts([...currentPosts, ...data.trending]);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col gap-5 pb-8 px-5 lg:px-0">
          {currentPosts?.map((post, index) => (
            <div key={index} className="flex items-center gap-2">
              <ClientRoute route={`blog/post/${post.slug.current}`}>
                <div className="relative w-[116px] h-[85px] md:w-[240px] md:h-[135px]">
                  <Image
                    src={urlForImage(post?.mainImage).url()}
                    className="object-center object-fill rounded-sm w-full"
                    alt={post.title}
                    fill
                  />
                </div>
              </ClientRoute>
              <div className="p-4 flex-1 self-center">
                <div className="flex-none">
                  {post?.categories?.map((category, index) => (
                    <Link href={`/${category.title}`} key={index}>
                      <span className="uppercase mb-2 text-pry inline-block text-xs font-medium transition-all delay-150 duration-300 ease-in-out hover:text-tertiary">
                        {category.title}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link href={`blog/post/${post.slug.current}`}>
                  <p className="text-lg font-medium md:tracking-wide line-clamp-1 md:line-clamp-2 md:leading-tight transition-all delay-150 duration-300 ease-in-out hover:text-pry">
                    {post?.title}
                  </p>
                </Link>
                <div className="flex text-sm font-light text-gray-600 capitalize pt-2">
                  <p className="pr-1">{post.author.name}</p>
                  <span className='before:content-["\a·\a"]'>
                    {new Date(post?.publishedAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
      {showButton && (
        <button
          onClick={getMorePosts}
          disabled={false}
          className="bg-pry py-2 mt-10 w-32 border-[1px] border-solid border-transparent text-base rounded-md text-[#f7f8f9] self-center lg:w-40 lg:text-lg lg:py-3 active:bg-tertiary transition-all delay-75 duration-300 ease-in-out"
        >
          {isLoading ? 'LOADING...' : 'SEE MORE'}
        </button>
      )}
    </div>
  );
};

export default TrendingCard;
