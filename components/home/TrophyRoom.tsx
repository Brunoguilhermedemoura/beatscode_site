import Reveal from '@/components/shared/Reveal'

const trophies = [
  { img: 'https://beatscode.com/wp-content/uploads/2022/09/5-273x300.webp', label: 'Campeonatos Estaduais', value: 47 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/09/4-273x300.webp', label: 'Brasileirão Série B', value: 3 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/09/6-273x300.webp', label: 'Brasileirão Série A', value: 2 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/09/1-273x300.webp', label: 'Copa do Brasil', value: 2 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/12/supercopa-do-brasil-273x300.png', label: 'Super Copa do Brasil', value: 1 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/12/recopa-logo-273x300.png', label: 'Recopa Sulamericana', value: 1 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/10/teste-55-273x300.png', label: 'Copa Sulamericana', value: 1 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/10/teste22-273x300.png', label: 'Copa Libertadores', value: 1 },
]

export default function TrophyRoom() {
  return (
    <section className="py-24 md:py-28 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,166,81,0.12),_transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-kicker text-center">Sala de troféus</p>
          <h2 className="section-title text-white text-center mb-3">
            Soluções que entram em campo para conquistar vitórias
          </h2>
          <p className="text-white/55 text-center max-w-xl mx-auto mb-16 text-xl">
            Títulos conquistados por clubes que utilizam a plataforma BeatsCode.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10">
          {trophies.map((t, i) => (
            <Reveal key={t.label} delay={i * 50}>
              <div className="text-center group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.label}
                  className="w-20 h-24 md:w-24 md:h-28 object-contain mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="font-display text-4xl font-bold text-primary mb-1 tabular-nums">{t.value}</p>
                <p className="text-white/50 text-base md:text-lg">{t.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-white/30 text-xs mt-12">
          Dados considerados apenas para categoria profissional masculina.
        </p>
      </div>
    </section>
  )
}
