import { createClient, SupabaseClient } from '@supabase/supabase-js'

function envUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || ''
}

function envAnon() {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() || ''
}

function envService() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || ''
}

/** True when Supabase env vars look configured (not placeholders). */
export function isSupabaseConfigured() {
  const url = envUrl()
  const key = envService() || envAnon()
  return Boolean(url && key && !url.includes('seu-projeto') && !key.includes('sua-'))
}

/**
 * Evita crash no `next build` da Netlify quando as env vars ainda não existem.
 * Em runtime sem config real, as queries falham e o app usa fallback local.
 */
function makeClient(url: string, key: string): SupabaseClient {
  return createClient(
    url || 'https://placeholder.supabase.co',
    key || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder'
  )
}

export function createServiceClient() {
  return makeClient(envUrl(), envService() || envAnon())
}

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
