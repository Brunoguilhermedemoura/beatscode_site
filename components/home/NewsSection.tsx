import Link from 'next/link'
import { Post } from '@/types'
import Reveal from '@/components/shared/Reveal'

export default function NewsSection({ posts }: { posts: Post[] }) {
  if (!posts.length) return null

  return (
    <section className="py-24 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="section-kicker">Conteúdo</p>
              <h2 className="section-title text-ink">Novidades e informações</h2>
              <p className="text-muted mt-3 max-w-lg">
                Acompanhe as novidades da BeatsCode e o universo do futebol.
              </p>
            </div>
            <Link href="/noticias" className="btn-outline self-start sm:self-auto">
              Ver todas
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post, i) => (
            <Reveal key={post.id} delay={i * 60}>
              <article className="group flex flex-col h-full border-b border-black/10 pb-8">
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
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h3 className="font-display text-xl font-bold text-ink leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                <Link
                  href={`/noticias/${post.slug}`}
                  className="text-primary font-semibold text-sm hover:underline underline-offset-4"
                >
                  Ler artigo →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
