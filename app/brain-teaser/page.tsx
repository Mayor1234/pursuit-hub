import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import BrainTeaserPost from '../components/brain-teaser-component/BrainTeaserPost';

const query = groq`*[_type == 'category' && title == 'Brain Teaser'][0]{
    ...,
    "posts": *[_type == 'post' && references(^._id)]{
        ...,
    author->{ name},
    } | order(publishedAt desc)[0...6]
  }
  `;

const page = async () => {
  const posts = await client.fetch(query);

  return (
    <div>
      <BrainTeaserPost posts={posts} />
    </div>
  );
};

export default page;
