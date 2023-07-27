'use client';

import { useState } from 'react';
import { Post } from '@/typings';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '../pagination/Pagination';

type Props = {
  trending: Post[];
};

const TrendingCard = ({ trending }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 2;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = trending.slice(indexOfFirstPost, indexOfLastPost);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(trending.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex flex-col gap-5 pb-8 px-5 md:px-0">
        {currentPosts?.map((post, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="relative w-[116px] h-[85px] md:w-[240px] md:h-[135px]">
              <Image
                src={urlForImage(post?.mainImage).url()}
                className="object-center object-fill rounded-sm w-full"
                alt={post.title}
                fill
              />
            </div>
            <div className="p-4 flex-1 self-center">
              <div className="flex-none">
                {post.categories.map((item, index) => (
                  <div key={index}>
                    <span className="uppercase mb-2 text-pry inline-block text-xs font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <Link href={`blog/post/${post.slug.current}`}>
                <p className="text-lg font-medium md:tracking-wide text-gray-700 line-clamp-1 md:line-clamp-2 md:leading-tight transition-all delay-150 duration-300 ease-in-out hover:text-pry">
                  {post?.title}
                </p>
              </Link>
              <div className="flex text-sm font-light text-gray-600 capitalize pt-2">
                <p className="pr-2">by {post.author.name}</p>
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
      <Pagination
        totalPosts={trending.length}
        paginate={paginate}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default TrendingCard;
