import { clubs } from '@/lib/clubs'
import ClubLogo from '@/components/shared/ClubLogo'
import Reveal from '@/components/shared/Reveal'
import Link from 'next/link'

export default function ClubsSection() {
  return (
    <section className="py-24 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-kicker text-center">Clientes</p>
          <h2 className="section-title text-ink text-center mb-4">Clubes que confiam na BeatsCode</h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-12 text-lg">
            Da elite ao desenvolvimento de base — clubes de todo o Brasil usam a plataforma.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 max-w-5xl mx-auto">
          {clubs.map((club) => {
            const inner = (
              <div
                title={club.name}
                className="opacity-95 hover:opacity-100 transition-transform duration-300 hover:scale-110"
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

        <div className="text-center mt-12">
          <Link href="/contato" className="btn-outline">
            Quero meu clube aqui
          </Link>
        </div>
      </div>
    </section>
  )
}
