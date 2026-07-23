import { createServiceClient } from '@/lib/supabase'
import { Post } from '@/types'
import localPosts from '@/data/noticias.json'

function getLocalPosts(): Post[] {
  return (localPosts as Post[])
    .filter((p) => p.published !== false)
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
}

function supabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  return Boolean(
    url &&
      key &&
      !url.includes('seu-projeto') &&
      !key.includes('sua-')
  )
}

export async function getPublishedPosts(limit?: number): Promise<Post[]> {
  if (supabaseConfigured()) {
    try {
      const supabase = createServiceClient()
      let query = supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (limit) query = query.limit(limit)

      const { data, error } = await query
      if (!error && data && data.length > 0) {
        return data
      }
    } catch {
      // Supabase indisponível — usa notícias locais
    }
  }

  const posts = getLocalPosts()
  return typeof limit === 'number' ? posts.slice(0, limit) : posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (supabaseConfigured()) {
    try {
      const supabase = createServiceClient()
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (!error && data) return data
    } catch {
      // fallback local
    }
  }

  return getLocalPosts().find((p) => p.slug === slug) || null
}
