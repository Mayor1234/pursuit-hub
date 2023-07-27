import Posts from './components/main/Posts';

export default async function Home() {
  return (
    <main className="min-h-screen">
      {/* @ts-expect-error Async Server Component */}
      <Posts />
    </main>
  );
}
