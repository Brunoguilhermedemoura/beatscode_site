import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import Solutions from '@/components/home/Solutions'
import ClubsSection from '@/components/home/ClubsSection'
import NewsSection from '@/components/home/NewsSection'
import Partners from '@/components/home/Partners'
import TrophyRoom from '@/components/home/TrophyRoom'
import ContactFormSection from '@/components/home/ContactFormSection'
import { createServiceClient } from '@/lib/supabase'
import { Post } from '@/types'

export const metadata: Metadata = {
  title: 'BeatsCode | Gestão Técnica Inteligente de Futebol',
  description: 'Plataforma de gestão técnica inteligente para clubes de futebol, da base à elite do futebol brasileiro.',
}

async function getPosts(): Promise<Post[]> {
  try {
    const supabase = createServiceClient()
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(6)
    return data || []
  } catch {
    return []
  }
}

export default async function HomePage() {
  const posts = await getPosts()
  return (
    <>
      <Hero />
      <Stats />
      <Solutions />
      <ClubsSection />
      <NewsSection posts={posts} />
      <Partners />
      <TrophyRoom />
      <ContactFormSection />
    </>
  )
}
