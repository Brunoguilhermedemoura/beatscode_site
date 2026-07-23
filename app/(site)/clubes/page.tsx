import type { Metadata } from 'next'
import ClubsSection from '@/components/home/ClubsSection'

export const metadata: Metadata = {
  title: 'Clubes',
  description: 'Conheça os clubes que confiam na BeatsCode para transformar a gestão do futebol.',
}

export default function ClubesPage() {
  return (
    <>
      <section className="relative pitch-grain text-white pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-kicker">Clientes</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Clubes
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            Quem entende que o futebol vai muito além do campo já está pronto para o futuro com a
            BeatsCode.
          </p>
        </div>
      </section>
      <section className="pt-12 pb-4 bg-surface">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-muted leading-relaxed">
            Cases de peso em todas as séries do futebol brasileiro — tecnologia como ferramenta para
            resultados dentro e fora de campo.
          </p>
        </div>
      </section>
      <ClubsSection />
    </>
  )
}
