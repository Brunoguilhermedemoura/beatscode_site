import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/shared/Reveal'

export const metadata: Metadata = {
  title: 'Depoimentos',
  description: 'Histórias de clubes e profissionais que utilizam a BeatsCode.',
}

const profiles = [
  {
    title: 'Clubes de elite',
    text: 'Operações complexas, múltiplos departamentos e decisões que exigem informação confiável.',
  },
  {
    title: 'Formação de atletas',
    text: 'Projetos que acompanham o desenvolvimento e preservam o histórico desde as categorias de base.',
  },
  {
    title: 'Diferentes modalidades',
    text: 'Estruturas masculinas, femininas, academias e projetos com necessidades próprias de gestão.',
  },
]

export default function DepoimentosPage() {
  return (
    <>
      <section className="pitch-grain relative overflow-hidden pb-20 pt-32 text-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Histórias de clientes</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold md:text-6xl">
            Quem vive o futebol entende o valor de uma gestão conectada
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            Experiências de profissionais e clubes que transformam processos, informação e rotina
            com a BeatsCode.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Diferentes realidades</p>
              <h2 className="section-title mb-5 text-ink">
                Resultados construídos em todos os níveis do futebol
              </h2>
              <p className="text-lg leading-relaxed text-muted">
                Estamos reunindo relatos em texto e vídeo para apresentar, com a voz de cada
                cliente, como a plataforma participa da sua operação.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {profiles.map((profile, index) => (
              <Reveal key={profile.title} delay={index * 80}>
                <article className="h-full border border-black/5 bg-surface p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">{profile.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{profile.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-white">
        <Reveal>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="section-kicker">Conheça na prática</p>
            <h2 className="section-title mb-4 text-white">Veja como a BeatsCode pode apoiar seu clube</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/60">
              Converse com nossa equipe e conheça uma configuração adequada para sua realidade.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/clubes" className="btn-ghost">Conheça nossos clientes</Link>
              <Link href="/contato" className="btn-primary">Agende uma demonstração</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
