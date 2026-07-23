import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ClubsMarquee from '@/components/home/ClubsMarquee'
import ValueProps from '@/components/home/ValueProps'
import Solutions from '@/components/home/Solutions'
import Stats from '@/components/home/Stats'
import TrophyRoom from '@/components/home/TrophyRoom'
import NewsSection from '@/components/home/NewsSection'
import Partners from '@/components/home/Partners'
import ContactFormSection from '@/components/home/ContactFormSection'
import { getPublishedPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'BeatsCode | Gestão Técnica Inteligente de Futebol',
  description:
    'Plataforma de gestão técnica inteligente para clubes de futebol, da base à elite do futebol brasileiro.',
}

export default async function HomePage() {
  const posts = await getPublishedPosts(6)
  return (
    <>
      <Hero />
      <ClubsMarquee />
      <ValueProps />
      <Solutions />
      <Stats />
      <TrophyRoom />
      <NewsSection posts={posts} />
      <Partners />
      <ContactFormSection />
    </>
  )
}
