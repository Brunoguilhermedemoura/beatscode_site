import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/shared/Reveal'

export const metadata: Metadata = {
  title: 'Planos',
  description: 'Conheça as possibilidades de contratação da plataforma BeatsCode para o seu clube.',
}

const plans = [
  {
    eyebrow: 'Estruturação',
    title: 'Formação',
    description:
      'Para projetos de base, academias e estruturas que precisam organizar o desenvolvimento de atletas.',
    features: [
      'Cadastro e histórico de atletas',
      'Planejamento de treinos e competições',
      'Acompanhamento da evolução',
      'Rotinas e documentos centralizados',
    ],
  },
  {
    eyebrow: 'Integração',
    title: 'Clube',
    description:
      'Para clubes que desejam conectar base, profissional e áreas de apoio em uma única operação.',
    features: [
      'Módulos integrados por departamento',
      'Gestão técnica e administrativa',
      'Saúde e performance',
      'Comunicação entre setores',
    ],
    featured: true,
  },
  {
    eyebrow: 'Personalização',
    title: 'Sob medida',
    description:
      'Uma composição criada de acordo com a estrutura, os processos e as prioridades do seu clube.',
    features: [
      'Diagnóstico das necessidades',
      'Seleção de módulos e recursos',
      'Implantação orientada',
      'Possibilidade de expansão',
    ],
  },
]

export default function PlanosPage() {
  return (
    <>
      <section className="pitch-grain relative overflow-hidden pb-20 pt-32 text-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Planos</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold md:text-6xl">
            A plataforma se adapta ao momento do seu clube
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            Escolha um ponto de partida e personalize a solução conforme a estrutura, os objetivos
            e a demanda da sua operação.
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">Possibilidades de contratação</p>
              <h2 className="section-title mb-4 text-ink">Uma solução para cada realidade</h2>
              <p className="text-lg leading-relaxed text-muted">
                Os recursos são definidos em conjunto com o clube. A proposta comercial considera
                os módulos, a quantidade de usuários e o escopo de implantação.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 80}>
                <article
                  className={`relative flex h-full flex-col border p-7 md:p-8 ${
                    plan.featured
                      ? 'border-primary bg-dark text-white shadow-xl shadow-primary/10'
                      : 'border-black/5 bg-white text-ink'
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Mais completo
                    </span>
                  )}
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    {plan.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold">{plan.title}</h3>
                  <p className={`mt-4 leading-relaxed ${plan.featured ? 'text-white/60' : 'text-muted'}`}>
                    {plan.description}
                  </p>
                  <ul className="my-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="mt-1 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.featured ? 'text-white/80' : 'text-ink'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contato" className={plan.featured ? 'btn-primary w-full' : 'btn-outline w-full'}>
                    Solicitar proposta
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="mt-12 border border-primary/20 bg-primary/5 p-7 text-center md:p-10">
              <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                Não encontrou uma configuração exata?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Isso é esperado: a composição final é personalizada para evitar recursos
                desnecessários e atender o fluxo real do clube.
              </p>
              <Link href="/contato" className="btn-primary mt-7">
                Conversar com um especialista
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
