import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="text-gray-600 m-10 mx-auto">
          <Image
            className="object-contain w-full rounded"
            src={urlForImage(value).url()}
            alt="blog post Image"
            width={600}
            height={200}
          />
        </div>
      );
    },
    youtube: (node: any) => {
      const url = node.value.url;
      const id = getYouTubeId(url) as string;

      return (
        <div className="py-12 rounded">
          <LiteYouTubeEmbed id={id} title="Youtube video" />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul
        className="ml-10 py-5 list-disc
        space-y-5"
      >
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal ml-5">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 text-gray-700 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="text-4xl py-10 text-gray-700 font-bold">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="text-3xl pt-10 text-gray-700 pb-6 font-bold">
        {children}
      </h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="text-4l py-10 text-gray-600 font-bold">{children}</h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#1890ff] border-l-4 text-gray-600 py-4 px-4 my-5 ">
        {children}
      </blockquote>
    ),
  },
  marks: {
    internalLink: ({ value, children }: any) => {
      const { slug = {} } = value;
      const href = `/${slug.current}`;
      return <Link href={href}>{children}</Link>;
    },
    link: ({ value, children }: any) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = value;
      return blank ? (
        <Link href={href} target="_blank" rel="noopener">
          {children}
        </Link>
      ) : (
        <Link
          href={href}
          className="text-blue-500 underline hover:text-purple-500"
        >
          {children}
        </Link>
      );
    },
  },
};
