import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { Post } from '@/typings';

const SkincarePost = ({ posts }: any) => {
  const newsPosts: Post[] = posts.posts;

  return (
    <section className="max-w-5xl mx-auto my-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {newsPosts?.map((post, index) => (
          <div key={index}>
            <Link href={`blog/post/${post.slug.current}`}>
              <div className="relative z-20 w-full px-5 md:w-[330px] h-[250px] md:px-0">
                <Image
                  src={urlForImage(post?.mainImage).url()}
                  className="object-center object-fill rounded-sm w-full px-5 md:px-0"
                  alt={post.title}
                  fill
                />
              </div>
            </Link>
            <div className="px-5 pt-4 w-full md:px-0">
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

export default SkincarePost;
