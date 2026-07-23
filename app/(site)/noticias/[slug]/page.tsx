import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createServiceClient } from '@/lib/supabase'
import { Post } from '@/types'

async function getPost(slug: string): Promise<Post | null> {
  try {
    const supabase = createServiceClient()
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()
    return data
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
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
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <section className="bg-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/noticias" className="text-primary text-sm hover:underline mb-6 inline-flex items-center gap-1">
            ← Voltar para Notícias
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">
              {new Date(post.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">{post.title}</h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.cover_image && (
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full rounded-xl mb-10 object-cover max-h-[480px]"
            />
          )}
          <div
            className="prose prose-lg max-w-none prose-headings:text-dark prose-p:text-gray-600 prose-strong:text-dark prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t">
            <p className="text-sm font-semibold text-dark mb-4">Seja Campeão</p>
            <p className="text-gray-600 mb-4">Quer saber mais sobre nossas soluções e revolucionar a gestão do seu time de futebol?</p>
            <Link href="/contato" className="btn-primary">Entre em contato</Link>
          </div>
        </div>
      </article>
    </>
  )
}
