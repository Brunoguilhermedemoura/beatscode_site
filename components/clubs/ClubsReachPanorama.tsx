'use client'

import { useMemo } from 'react'
import {
  clubs,
  clubsCount,
  getStateRegion,
  STATE_NAMES,
} from '@/lib/clubs'
import ClubLogo from '@/components/shared/ClubLogo'

export default function ClubsReachPanorama() {
  const coverage = useMemo(() => {
    const states = new Set(clubs.map((c) => c.state))
    const regions = new Set(
      clubs.map((c) => getStateRegion(c.state)).filter(Boolean)
    )

    return {
      clubs: clubsCount,
      states: states.size,
      regions: regions.size,
    }
  }, [])

  return (
    <div className="animate-fade-up">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-kicker">Abrangência nacional</p>
        <h2 className="section-title text-ink">
          Clubes que confiam na BeatsCode
        </h2>
        <p className="mt-4 text-lg text-muted">
          Da elite ao desenvolvimento de base — clubes de todo o Brasil usam a
          plataforma.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 border-y border-black/5 py-8 sm:grid-cols-4 md:mt-12">
        <div className="text-center">
          <p className="font-display text-3xl font-bold text-primary md:text-4xl">
            +{coverage.clubs}
          </p>
          <p className="mt-1 text-sm uppercase tracking-wider text-muted">
            Clubes
          </p>
        </div>
        <div className="text-center">
          <p className="font-display text-3xl font-bold text-primary md:text-4xl">
            {coverage.states}
          </p>
          <p className="mt-1 text-sm uppercase tracking-wider text-muted">
            Estados
          </p>
        </div>
        <div className="text-center">
          <p className="font-display text-3xl font-bold text-primary md:text-4xl">
            {coverage.regions}
          </p>
          <p className="mt-1 text-sm uppercase tracking-wider text-muted">
            Regiões
          </p>
        </div>
        <div className="text-center">
          <p className="font-display text-3xl font-bold text-primary md:text-4xl">
            100%
          </p>
          <p className="mt-1 text-sm uppercase tracking-wider text-muted">
            Nacional
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-7 md:mt-12 md:gap-x-8 md:gap-y-8">
        {clubs.map((club) => {
          const href = club.website || club.href
          const title = `${club.name}${club.city ? ` · ${club.city}` : ''}${
            club.state ? ` (${STATE_NAMES[club.state] ?? club.state})` : ''
          }`

          const logo = (
            <span
              title={title}
              className="flex h-[64px] w-[64px] items-center justify-center opacity-95 transition-transform duration-300 hover:scale-110 hover:opacity-100 md:h-[72px] md:w-[72px]"
            >
              <ClubLogo club={club} size={72} />
            </span>
          )

          return href ? (
            <a
              key={club.id}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block"
              aria-label={title}
            >
              {logo}
            </a>
          ) : (
            <div key={club.id}>{logo}</div>
          )
        })}
      </div>
    </div>
  )
}
