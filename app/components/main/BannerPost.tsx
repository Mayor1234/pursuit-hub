import { urlForImage } from '@/sanity/lib/image';
import { Post } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  bannerPost: Post;
};

const BannerPost = ({ bannerPost }: Props) => {
  const { categories } = bannerPost;

  return (
    <div className="flex flex-col md:flex-row justify-center w-full pb-5 md:pb-0">
      <div className="px-5 w-full md:w-[70%] md:p-0">
        <div className="relative h-[200px] md:h-[400px] w-full md:mb-6">
          <Image
            src={urlForImage(bannerPost?.mainImage).url()}
            alt={bannerPost?.title}
            fill
            className="object-center object-fill"
          />
        </div>
      </div>
      <div className="p-5 md:py-4 md:px-6 w-full md:w-[35%] self-center">
        <div className="">
          {categories.map((item, index) => (
            <div key={index}>
              <span className="uppercase p-2 mb-4 bg-pry text-white inline-block text-sm hover:bg-sec hover:text-slate-500 cursor-pointer">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div>
          <Link href={`blog/bannerpost/${bannerPost.slug.current}`}>
            <p className="pb-3 text-lg font-medium tracking-wide leading-snug transition-all delay-150 duration-300 ease-in-out hover:text-pry">
              {bannerPost?.title}
            </p>
          </Link>
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
  );
};

export default BannerPost;
