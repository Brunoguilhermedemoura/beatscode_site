import { clubs } from '@/lib/clubs'
import ClubLogo from '@/components/shared/ClubLogo'
import Link from 'next/link'

const serieA2026 = [
  'Flamengo',
  'Palmeiras',
  'São Paulo FC',
  'Santos FC',
  'CR Vasco da Gama',
  'Atlético Mineiro',
  'Cruzeiro',
  'Sport Club Internacional',
  'Bahia',
  'Coritiba',
  'Chapecoense',
]

const orderedClubs = [...clubs].sort((a, b) => {
  const aIndex = serieA2026.indexOf(a.name)
  const bIndex = serieA2026.indexOf(b.name)

  if (aIndex === -1 && bIndex === -1) return 0
  if (aIndex === -1) return 1
  if (bIndex === -1) return -1
  return aIndex - bIndex
})

export default function ClubsSection() {
  return (
    <section className="bg-surface pb-20 pt-8 md:pb-24 md:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10">
          {orderedClubs.map((club) => {
            const inner = (
              <div
                title={club.name}
                className="flex h-[72px] w-[72px] items-center justify-center opacity-95 transition-transform duration-300 hover:scale-110 hover:opacity-100 md:h-[84px] md:w-[84px]"
              >
                <ClubLogo club={club} size={84} />
              </div>
            )

            return club.href ? (
              <a
                key={club.name}
                href={club.href}
                target={club.href.startsWith('http') ? '_blank' : undefined}
                rel={club.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={club.name}>{inner}</div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contato" className="btn-outline">
            Quero meu clube aqui
          </Link>
        </div>
      </div>
    </section>
  )
}
