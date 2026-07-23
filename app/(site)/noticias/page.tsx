import type { Metadata } from 'next'
import Link from 'next/link'
import { createServiceClient } from '@/lib/supabase'
import { Post } from '@/types'

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Novidades da BeatsCode e informações importantes sobre o universo do futebol.',
}

async function getPosts(): Promise<Post[]> {
  try {
    const supabase = createServiceClient()
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    return data || []
  } catch {
    return []
  }
}

export default async function NoticiasPage() {
  const posts = await getPosts()

  return (
    <>
      <section className="bg-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Notícias</h1>
          <p className="text-gray-400 text-lg">Novidades e informações sobre gestão de futebol</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-20">Nenhuma notícia publicada ainda.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                  {post.cover_image && (
                    <img src={post.cover_image} alt={post.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(post.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <h2 className="font-bold text-lg text-dark leading-snug mb-3 flex-1">{post.title}</h2>
                    {post.excerpt && (
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    )}
                    <Link href={`/noticias/${post.slug}`}
                      className="text-primary font-semibold text-sm hover:underline mt-auto">
                      Ver mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
