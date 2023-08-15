import { PortableTextComponents } from '@/app/components/main/PortableText';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { Post } from '@/typings';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']{
        slug
    }
    `;

  const posts: Post[] = await client.fetch(query);
  const paths = posts.map((post) => post.slug.current);

  return paths.map((slug) => ({
    slug,
  }));
}

const page = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->{image, name},
        categories[]->
    }
    `;
  const post: Post = await client.fetch(query, { slug });

  return (
    <section className="max-w-5xl mx-auto my-10 flex flex-col lg:flex-row">
      <article className="max-w-3xl px-5 h-full lg:flex-[3]">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl font-medium pb-4">{post.title}</h2>
          <p className="pb-3">{post.description}</p>
          <div className="flex text-sm font-light text-gray-600 uppercase pb-3">
            <p className="pr-2">by {post.author.name}</p>
            <span className='before:content-["\a·\a"]'>
              {new Date(post?._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          <div className="relative w-full h-[250px] md:h-[507px]">
            <Image
              src={urlForImage(post?.mainImage).url()}
              alt={post?.title}
              fill
              className="object-center object-fill"
            />
          </div>
          <div className="text-gray-600 leading-relaxed py-8">
            <PortableText
              value={post?.body}
              components={PortableTextComponents}
            />
          </div>
        </div>
      </article>
      <div className="w-full lg:flex-[1] lg:sticky relative top-8 bg-slate-100">
        <h2 className="font-semibold text-tertiary p-8 text-center text-2xl capitalize">
          Advertise here
        </h2>
      </div>
    </section>
  );
};

export default page;
