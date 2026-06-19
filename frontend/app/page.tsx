import Link from 'next/link';
import { getPosts } from '@/features/test/services/test.service';

export default async function Home() {
  const posts = await getPosts();

  return (
    <section className="flex flex-col items-center py-24 text-center">
      <h1 className="mb-4 text-5xl font-bold">Descubrí y compartí reviews</h1>

      <p className="mb-8 max-w-xl text-gray-600">
        Publicá tus opiniones sobre videojuegos, descubrí nuevas experiencias y
        conocé qué piensa la comunidad.
      </p>

      <Link href="/games" className="rounded-md bg-black px-6 py-3 text-white">
        Explorar Juegos
      </Link>

      <hr />

      <h3 className="text-xl font-semibold my-3">
        Prueba de cliente HTTP con JSONPlaceholder.
      </h3>

      <div className="space-y-2">
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className="rounded border p-4">
            <h2 className="font-semibold">{post.title}</h2>

            <p className="text-sm text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

