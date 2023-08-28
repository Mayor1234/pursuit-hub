import PostCard from './components/main/PostCard';
import Trending from './components/main/Trending';
import { fetchData } from './components/FetchData';

export const revalidate = 60;

export default async function Home() {
  const { posts, trending } = await fetchData(0, 5);

  return (
    <main className="flex flex-col">
      <section className="max-w-5xl mx-auto py-10">
        <PostCard posts={posts} />
        <Trending trending={trending} />
      </section>
    </main>
  );
}
