import { Post } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  posts: Post[];
};

const PostCard = ({ posts }: Props) => {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-col-1  md:grid-cols-3 gap-8 ">
        {posts?.map((post, index) => (
          <div key={index} className="pb-5">
            <div className="relative z-20 w-full px-5 md:w-[330px] h-[200px] md:px-0">
              <Image
                src={urlForImage(post?.mainImage).url()}
                className="object-center object-fill rounded-sm w-full px-5 md:px-0"
                alt={post.title}
                fill
              />
            </div>
            <div className="px-5 pt-4 w-[330px] md:px-0">
              <Link href={`blog/post/${post.slug.current}`}>
                <p className="pb-3 text-lg font-medium tracking-wide leading-snug transition-all delay-150 duration-300 ease-in-out hover:text-pry">
                  {post?.title}
                </p>
              </Link>
              <div className="flex  text-sm font-light text-gray-600 capitalize">
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
    </section>
  );
};

export default PostCard;