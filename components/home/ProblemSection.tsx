import Link from 'next/link'
import Reveal from '@/components/shared/Reveal'

const problems = [
  'Informações espalhadas em planilhas',
  'Documentos importantes difíceis de localizar',
  'Histórico perdido nas mudanças de comissão técnica',
  'Logística organizada em conversas de WhatsApp',
  'Contratos sem acompanhamento centralizado',
  'Dificuldade para acompanhar a evolução dos atletas',
  'Decisões tomadas com base na memória',
]

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(0,166,81,0.08),_transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="section-kicker">Desafios do dia a dia</p>
            <h2 className="section-title mb-5 text-ink">Sua equipe ainda enfrenta isso?</h2>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              Processos descentralizados consomem tempo, comprometem o histórico do clube e
              dificultam decisões que precisam ser rápidas e seguras.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <div
                  key={problem}
                  className={`flex min-h-24 items-start gap-4 border border-black/5 bg-surface p-5 ${
                    index === problems.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <p className="font-medium leading-relaxed text-ink">{problem}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-12 flex flex-col gap-6 bg-dark p-7 text-white sm:flex-row sm:items-center sm:justify-between md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-soft">
                Uma plataforma. Um único histórico.
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                A BeatsCode resolve tudo isso.
              </h3>
            </div>
            <Link href="/solucoes" className="btn-primary shrink-0">
              Conheça as soluções
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
