import { urlForImage } from '@/sanity/lib/image';
import { Post } from '@/typings';
import Image from 'next/image';
import ClientRoute from '../ClientRoute';
import { Suspense } from 'react';
import Loading from '../loading/Loading';

type Props = {
  bannerPost: Post;
};

const BannerPost = ({ bannerPost }: Props) => {
  const { categories } = bannerPost;

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col md:flex-row justify-center w-full pb-5 md:pb-0">
        <div className="px-5 w-full md:w-[70%] md:p-0">
          <ClientRoute route={`blog/banner/${bannerPost.slug.current}`}>
            <div className="relative h-[250px] md:h-[400px] w-full md:mb-6">
              <Image
                src={urlForImage(bannerPost?.mainImage).url()}
                alt={bannerPost?.title}
                fill
                className="object-center object-fill"
              />
            </div>
          </ClientRoute>
        </div>
        <div className="p-5 md:py-4 md:px-6 w-full md:w-[35%] self-center">
          <div className="">
            {categories.map((category, index) => (
              <ClientRoute route={`/${category.title}`} key={index}>
                <span className="uppercase p-2 mb-4 bg-pry text-white inline-block text-sm hover:bg-sec hover:text-slate-500 cursor-pointer">
                  {category.title}
                </span>
              </ClientRoute>
            ))}
          </div>
          <div>
            <ClientRoute route={`blog/banner/${bannerPost.slug.current}`}>
              <p className="pb-3 text-lg font-medium tracking-wide leading-snug transition-all delay-150 duration-300 ease-in-out hover:text-pry">
                {bannerPost?.title}
              </p>
            </ClientRoute>
            <div className="flex text-sm font-light text-gray-600 capitalize">
              <p className="pr-2">by {bannerPost.author.name}</p>
              <span className='before:content-["\a·\a"]'>
                {new Date(bannerPost?.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default BannerPost;
