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

  return (
    <>
      <section className="relative pitch-grain text-white pt-32 pb-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/noticias"
            className="text-primary-soft text-sm hover:underline mb-6 inline-flex items-center gap-1"
          >
            ← Voltar para Notícias
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-white/40 text-sm">
              {new Date(post.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.cover_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full mb-10 object-cover max-h-[480px]"
            />
          )}
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-muted prose-strong:text-ink prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-10 border-t border-black/10">
            <p className="font-display text-xl font-bold text-ink mb-2">Seja campeão</p>
            <p className="text-muted mb-6">
              Quer saber mais sobre nossas soluções e revolucionar a gestão do seu time de futebol?
            </p>
            <Link href="/contato" className="btn-primary">
              Entre em contato
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
