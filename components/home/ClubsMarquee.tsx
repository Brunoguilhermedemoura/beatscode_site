'use client'

import { clubs } from '@/lib/clubs'
import ClubLogo from '@/components/shared/ClubLogo'

export default function ClubsMarquee() {
  const row = [...clubs, ...clubs]

  return (
    <section className="bg-dark border-y border-white/5 py-8 overflow-hidden">
      <p className="text-center text-sm uppercase tracking-[0.25em] text-white/45 mb-6 font-medium">
        Clubes que confiam na BeatsCode
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-dark to-transparent z-10" />
        <div className="marquee-track flex items-center gap-8 md:gap-10 px-6">
          {row.map((club, i) => {
            const content = (
              <span className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300">
                <ClubLogo club={club} size={88} />
              </span>
            )

            const href = club.website || club.href
            if (!href) {
              return <span key={`${club.name}-${i}`}>{content}</span>
            }

            return (
              <a
                key={`${club.name}-${i}`}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={club.name}
              >
                {content}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
