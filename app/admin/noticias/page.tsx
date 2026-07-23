'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Post } from '@/types'

export default function AdminNoticiasPage() {
  const { status } = useSession()
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/posts').then(r => r.json()).then(data => {
        setPosts(Array.isArray(data) ? data : [])
        setLoading(false)
      })
    }
  }, [status])

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Deletar "${title}"?`)) return
    setDeleting(id)
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    setPosts(posts.filter(p => p.id !== id))
    setDeleting(null)
  }

  const togglePublished = async (post: Post) => {
    const res = await fetch(`/api/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !post.published }),
    })
    const updated = await res.json()
    setPosts(posts.map(p => p.id === post.id ? updated : p))
  }

  if (status === 'loading' || loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"/>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-dark text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
              Dashboard
            </Link>
            <span className="text-gray-600">/</span>
            <span>Notícias</span>
          </div>
          <Link href="/admin/noticias/novo" className="btn-primary text-sm py-2 px-4">
            + Nova notícia
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-black text-dark mb-8">Gerenciar Notícias</h1>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">Nenhum post ainda.</p>
            <Link href="/admin/noticias/novo" className="btn-primary">Criar primeiro post</Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Título</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Categoria</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Data</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-dark text-sm line-clamp-1">{post.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">/noticias/{post.slug}</p>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{post.category}</span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-xs text-gray-500">
                        {new Date(post.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => togglePublished(post)}
                        className={`text-xs px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                          post.published ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}>
                        {post.published ? 'Publicado' : 'Rascunho'}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/noticias/${post.slug}`} target="_blank"
                          className="text-xs text-gray-500 hover:text-primary transition-colors px-2 py-1">
                          Ver
                        </Link>
                        <Link href={`/admin/noticias/${post.id}`}
                          className="text-xs text-primary hover:text-primary-dark transition-colors px-2 py-1 font-medium">
                          Editar
                        </Link>
                        <button onClick={() => handleDelete(post.id, post.title)}
                          disabled={deleting === post.id}
                          className="text-xs text-red-500 hover:text-red-700 transition-colors px-2 py-1">
                          {deleting === post.id ? '...' : 'Deletar'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
