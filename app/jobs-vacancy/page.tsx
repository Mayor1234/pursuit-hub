import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { Suspense } from 'react';
import Loading from '../components/loading/Loading';

import JobsComponent from '../components/jobs/JobsComponent';
import JobsTrending from '../components/jobs/JobsTrending';

export const revalidate = 60;
const query = groq`*[_type == 'category' && title == 'jobs'][0]{
    ...,
    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{ name},
    } | order(publishedAt desc)[0...6]
  }
  `;

const queryAll = groq`*[_type == 'category' && title == 'jobs'][0]{

    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{name},
    categories[]->,

    } | order(publishedAt desc)
  }
  `;

const page = async () => {
  const posts = await client.fetch(query);
  const trending = await client.fetch(queryAll);

  const jobsTrend = trending.posts;

  return (
    <div className="max-w-5xl mx-auto">
      <Suspense fallback={<Loading />}>
        <JobsComponent posts={posts} />
        <JobsTrending trending={jobsTrend} />
      </Suspense>
    </div>
  );
};

export default page;
