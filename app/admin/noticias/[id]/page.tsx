'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import PostForm from '@/components/admin/PostForm'
import { Post } from '@/types'

export default function EditPostPage({ params }: { params: { id: string } }) {
  const { status } = useSession()
  const router = useRouter()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch(`/api/posts/${params.id}`)
        .then(r => r.json())
        .then(data => { setPost(data); setLoading(false) })
        .catch(() => { router.push('/admin/noticias') })
    }
  }, [status, params.id, router])

  if (loading || status === 'loading') return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"/>
    </div>
  )

  if (!post) return null

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-dark text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link href="/admin/noticias" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            Notícias
          </Link>
          <span className="text-gray-600">/</span>
          <span className="truncate max-w-xs">{post.title}</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-black text-dark mb-8">Editar Notícia</h1>
        <PostForm post={post} mode="edit" />
      </main>
    </div>
  )
}
