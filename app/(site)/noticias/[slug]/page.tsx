import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getPublishedPosts } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post não encontrado' }
  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.cover_image ? [post.cover_image] : [],
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const category =
    !post.category || /sem categoria/i.test(post.category) ? 'Notícias' : post.category

  return (
    <>
      <section className="relative pitch-grain text-white pt-36 md:pt-40 pb-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-sm font-semibold text-primary-soft uppercase tracking-wider">
              {category}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-white/50 text-base">
              {new Date(post.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-12 md:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.cover_image && (
            <div className="mb-10 overflow-hidden bg-dark-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-auto max-h-[520px] object-contain mx-auto"
              />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-muted prose-strong:text-ink prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-10 border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-display text-xl font-bold text-ink mb-2">Seja campeão</p>
              <p className="text-muted">
                Quer saber mais sobre nossas soluções e revolucionar a gestão do seu time?
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/noticias" className="btn-outline">
                Ver todas as notícias
              </Link>
              <Link href="/contato" className="btn-primary">
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
