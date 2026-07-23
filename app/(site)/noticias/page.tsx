import type { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Novidades da BeatsCode e informações importantes sobre o universo do futebol.',
}

export default async function NoticiasPage() {
  const posts = await getPublishedPosts()

  return (
    <>
      <section className="relative pitch-grain text-white pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-kicker">Conteúdo</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Notícias
          </h1>
          <p className="text-white/55 text-lg">Novidades e informações sobre gestão de futebol</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-muted py-20">Nenhuma notícia publicada ainda.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col border-b border-black/10 pb-8"
                >
                  {post.cover_image && (
                    <div className="overflow-hidden mb-5 aspect-[16/10] bg-dark-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">
                      {new Date(post.created_at).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-ink leading-snug mb-3 flex-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-muted text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  )}
                  <Link
                    href={`/noticias/${post.slug}`}
                    className="text-primary font-semibold text-sm hover:underline underline-offset-4 mt-auto"
                  >
                    Ler artigo →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
