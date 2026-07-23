export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image: string | null
  category: string
  published: boolean
  created_at: string
  updated_at: string
}

export type ContactMessage = {
  id: string
  name: string
  company: string | null
  email: string
  phone: string | null
  message: string
  created_at: string
}
