import type { Metadata } from 'next'
import ClubsSection from '@/components/home/ClubsSection'

export const metadata: Metadata = {
  title: 'Clubes',
  description: 'Conheça os clubes que confiam na BeatsCode para transformar a gestão do futebol.',
}

export default function ClubesPage() {
  return (
    <>
      <section className="relative pitch-grain text-white pt-28 pb-10 md:pt-32 md:pb-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-kicker">Clientes</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-3">
            Clubes
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            Quem entende que o futebol vai muito além do campo já está pronto para o futuro com a
            BeatsCode.
          </p>
        </div>
      </section>
      <ClubsSection />
    </>
  )
}
