import Reveal from '@/components/shared/Reveal'

const highlights = [
  {
    number: '01',
    title: 'Visão integrada',
    text: 'Informações técnicas, administrativas e de performance reunidas no mesmo ambiente.',
  },
  {
    number: '02',
    title: 'Rotina organizada',
    text: 'Processos e atividades estruturados para facilitar o trabalho de cada setor.',
  },
  {
    number: '03',
    title: 'Histórico preservado',
    text: 'Dados do clube disponíveis para acompanhar atletas e apoiar decisões ao longo do tempo.',
  },
]

export default function ProductShowcase() {
  return (
    <section className="overflow-hidden bg-surface py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">Por dentro da plataforma</p>
            <h2 className="section-title mb-4 text-ink">Uma visão clara da operação do clube</h2>
            <p className="text-xl leading-relaxed text-muted">
              Conheça a experiência que conecta áreas, organiza rotinas e transforma informações
              em decisões mais seguras.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-2xl bg-dark shadow-2xl shadow-black/15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/solucoes/plataforma.png"
              alt="Plataforma BeatsCode em TV, tablet, notebook e smartphone"
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.number} delay={120 + index * 60}>
              <article className="h-full border border-black/5 bg-white p-6 md:p-7">
                <span className="font-display text-sm font-bold text-primary">{item.number}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
