import { Post } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { Suspense, useState } from 'react';
import Loading from '../loading/Loading';

type Props = {
  posts: Post[];
};

const PostCard = ({ posts }: Props) => {
  return (
    <section className="max-w-5xl mx-auto">
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 gap-8  md:grid-cols-2 px-5 lg:grid-cols-3 lg:px-0 lg:gap-5 w-full">
          {posts?.map((post, index) => (
            <div key={index} className="pb-5 w-full">
              <Link href={`blog/post/${post?.slug.current}`}>
                <div className="relative z-20 w-full px-5 md:px-5 lg:w-full h-[250px] lg:px-0">
                  <Image
                    src={urlForImage(post?.mainImage).url()}
                    className="object-center object-fill rounded-sm"
                    alt={post.title}
                    fill
                  />
                </div>
              </Link>

              <div className="pt-4 w-full md:px-0 lg:px-0">
                <Link href={`blog/post/${post?.slug.current}`}>
                  <p className="pb-3 text-lg font-medium tracking-wide leading-snug transition-all delay-150 duration-300 ease-in-out hover:text-pry">
                    {post?.title}
                  </p>
                </Link>
                <div className="flex text-sm font-light text-gray-600 capitalize">
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
      </Suspense>
    </section>
  );
};

export default PostCard;
