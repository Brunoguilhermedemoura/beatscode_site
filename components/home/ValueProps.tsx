import Reveal from '@/components/shared/Reveal'

const benefits = [
  {
    title: 'Retenção de dados técnicos',
    desc: 'Histórico preservado mesmo com troca de gestão e comissão.',
  },
  {
    title: 'Padronização de processos',
    desc: 'Modelo de gestão alinhado entre base e profissional.',
  },
  {
    title: 'Comunicação eficiente',
    desc: 'App mobile e TV indoor com a mesma informação para todo o clube.',
  },
  {
    title: 'Evolução de atletas',
    desc: 'Acompanhe performance, saúde e desenvolvimento ao longo do tempo.',
  },
  {
    title: 'Legado e integridade',
    desc: 'Dados seguros na nuvem, com rastreabilidade e governança.',
  },
  {
    title: 'Engajamento do time',
    desc: 'Profissionais alinhados em um único ambiente de trabalho.',
  },
]

export default function ValueProps() {
  return (
    <section className="py-24 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,166,81,0.08),_transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-kicker">Por que BeatsCode</p>
          <h2 className="section-title text-ink max-w-3xl mb-4">
            A melhor tática é usar a gestão para conquistar resultados.
          </h2>
          <p className="text-muted text-xl max-w-2xl mb-16 leading-relaxed">
            Visão geral, online e prática do departamento de futebol — para decisões mais assertivas rumo à vitória.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <div className="border-t border-primary/30 pt-6">
                <h3 className="font-display text-2xl font-bold text-ink mb-2">{b.title}</h3>
                <p className="text-muted text-lg leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
