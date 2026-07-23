'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Post } from '@/types'

interface PostFormProps {
  post?: Post
  mode: 'create' | 'edit'
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const categories = ['Notícias', 'Gestão', 'Tecnologia', 'Base', 'Saúde', 'Comunicação', 'Parceiros']

export default function PostForm({ post, mode }: PostFormProps) {
  const router = useRouter()
  const [form, setForm] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    cover_image: post?.cover_image || '',
    category: post?.category || 'Notícias',
    published: post?.published ?? true,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [slugManual, setSlugManual] = useState(!!post)

  useEffect(() => {
    if (!slugManual && mode === 'create') {
      setForm(f => ({ ...f, slug: slugify(f.title) }))
    }
  }, [form.title, slugManual, mode])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const url = mode === 'create' ? '/api/posts' : `/api/posts/${post?.id}`
    const method = mode === 'create' ? 'POST' : 'PUT'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Erro ao salvar')
      }

      router.push('/admin/noticias')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {error}
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
            <input required value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Título do post"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL) *</label>
            <div className="flex gap-2">
              <input required value={form.slug}
                onChange={e => { setSlugManual(true); setForm({...form, slug: slugify(e.target.value)}) }}
                className="flex-1 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                placeholder="url-do-post"
              />
              <button type="button" onClick={() => { setSlugManual(false); setForm({...form, slug: slugify(form.title)}) }}
                className="text-xs text-primary border border-primary px-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                Gerar
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">/noticias/{form.slug || 'slug-do-post'}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Resumo (Excerpt)</label>
            <textarea value={form.excerpt} rows={3}
              onChange={e => setForm({...form, excerpt: e.target.value})}
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Breve descrição exibida na listagem de posts"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo *</label>
            <p className="text-xs text-gray-400 mb-2">HTML aceito. Use &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;, etc.</p>
            <textarea required value={form.content} rows={20}
              onChange={e => setForm({...form, content: e.target.value})}
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-y font-mono"
              placeholder="<p>Conteúdo do artigo em HTML...</p>"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-gray-50 rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-dark">Publicação</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select value={form.published ? 'true' : 'false'}
                onChange={e => setForm({...form, published: e.target.value === 'true'})}
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                <option value="true">Publicado</option>
                <option value="false">Rascunho</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
              <select value={form.category}
                onChange={e => setForm({...form, category: e.target.value})}
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full text-center py-3">
              {loading ? 'Salvando...' : mode === 'create' ? 'Publicar' : 'Salvar alterações'}
            </button>

            <button type="button" onClick={() => router.push('/admin/noticias')}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700 py-2">
              Cancelar
            </button>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-dark">Imagem de Capa</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL da imagem</label>
              <input value={form.cover_image}
                onChange={e => setForm({...form, cover_image: e.target.value})}
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </div>
            {form.cover_image && (
              <img src={form.cover_image} alt="Preview" className="w-full rounded-lg object-cover h-32" />
            )}
            <p className="text-xs text-gray-400">Cole a URL de uma imagem hospedada online.</p>
          </div>
        </div>
      </div>
    </form>
  )
}
