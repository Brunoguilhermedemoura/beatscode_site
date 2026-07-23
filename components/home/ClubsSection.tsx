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
          <p className="text-muted text-center max-w-xl mx-auto mb-14">
            Da elite ao desenvolvimento de base — clubes de todo o Brasil usam a plataforma.
          </p>
        </Reveal>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 md:gap-8">
          {clubs.map((club, i) => {
            const inner = (
              <div
                title={club.name}
                className="flex items-center justify-center p-2 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 min-h-[3.5rem]"
              >
                <ClubLogo club={club} />
              </div>
            )

            return (
              <Reveal key={club.name} delay={(i % 8) * 30}>
                {club.href ? (
                  <a
                    href={club.href}
                    target={club.href.startsWith('http') ? '_blank' : undefined}
                    rel={club.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
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
