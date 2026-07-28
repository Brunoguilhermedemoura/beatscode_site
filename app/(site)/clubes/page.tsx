import type { Metadata } from 'next'
import ClubsMapSection from '@/components/clubs/ClubsMapSection'

export const metadata: Metadata = {
  title: 'Clubes',
  description: 'Conheça os clubes que confiam na BeatsCode para transformar a gestão do futebol.',
}

export default function ClubesPage() {
  return (
    <>
      <section className="relative pitch-grain overflow-hidden pb-10 pt-28 text-white md:pb-12 md:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-kicker">Clientes</p>
          <h1 className="mb-3 font-display text-4xl font-bold md:text-6xl">
            Clubes
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/55">
            Quem entende que o futebol vai muito além do campo já está pronto para o futuro com a
            BeatsCode.
          </p>
        </div>
      </section>
      <ClubsMapSection />
    </>
  )
}
