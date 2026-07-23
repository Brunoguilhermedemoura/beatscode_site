import Link from 'next/link'
import { Post } from '@/types'

export default function NewsSection({ posts }: { posts: Post[] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-dark">Novidades e Informações</h2>
          <p className="text-gray-600 mt-2">Conheça as novidades da BeatsCode e informações importantes sobre o universo do futebol.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              {post.cover_image && (
                <img src={post.cover_image} alt={post.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{post.category}</span>
                <h3 className="font-bold text-lg text-dark leading-snug mb-3 flex-1">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <Link href={`/noticias/${post.slug}`} className="text-primary font-semibold text-sm hover:underline">
                  Ver mais →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/noticias" className="btn-outline">Ver todas as notícias</Link>
        </div>
      </div>
    </section>
  )
}
