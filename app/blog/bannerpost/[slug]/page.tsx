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
  const query2 = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->{image, name},
        "comment": *[_type=='comment' && post._ref==^._id && approved == true],
        categories[]->
    }
    `;
  const bannerPost: Post = await client.fetch(query2, { slug });
  return (
    <section className="max-w-5xl mx-auto my-10">
      <article className="max-w-3xl px-5 md:px-0">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium pb-4">{bannerPost.title}</h2>
          <p className="pb-3">{bannerPost.description}</p>
          <div className="flex text-sm font-light text-gray-600 uppercase pb-3">
            <p className="pr-2">by {bannerPost.author.name}</p>
            <span className='before:content-["\a·\a"]'>
              {new Date(bannerPost._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[200px] md:h-[507px]">
            <Image
              src={urlForImage(bannerPost?.mainImage).url()}
              alt={bannerPost?.title}
              fill
              className="object-center object-fill"
            />
          </div>
        </div>
        <section className="text-gray-600 py-8 leading-relaxed">
          <PortableText
            value={bannerPost?.body}
            components={PortableTextComponents}
          />
        </section>
      </article>
    </section>
  );
};

export default page;
