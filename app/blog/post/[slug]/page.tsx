import { PortableTextComponents } from '@/app/components/main/PortableText';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { Post } from '@/typings';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import { Suspense } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->{image, name},
        "comment": *[_type=='comment' && post._ref==^._id && approved == true],
        categories[]->
    }
    `;
  const post: Post = await client.fetch(query, { slug });

  return (
    <section className="max-w-5xl mx-auto my-10">
      <article className="max-w-3xl px-5">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl font-medium pb-4">{post?.title}</h2>
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

          <div className="relative w-full h-[200px] md:h-[507px]">
            <Image
              src={urlForImage(post?.mainImage).url()}
              alt={post?.title}
              fill
              className="object-center object-fill"
            />
          </div>

          <section className="text-gray-600 leading-relaxed py-8">
            <PortableText
              value={post?.body}
              components={PortableTextComponents}
            />
          </section>
        </div>
      </article>
    </section>
  );
};

export default page;
