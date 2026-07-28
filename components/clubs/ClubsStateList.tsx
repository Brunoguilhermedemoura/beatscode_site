'use client'

import { memo, useMemo } from 'react'
import {
  clubs,
  getStateRegion,
  REGION_COLORS,
  REGION_NAMES,
  STATE_NAMES,
  openClubWebsite,
  type Club,
} from '@/lib/clubs'

type ClubsStateListProps = {
  activeId?: number | null
  onHoverClub?: (id: number | null) => void
  onSelectState?: (uf: string) => void
  className?: string
}

function groupByState(list: Club[]) {
  const map = new Map<string, Club[]>()
  for (const club of list) {
    const group = map.get(club.state) ?? []
    group.push(club)
    map.set(club.state, group)
  }

  return Array.from(map.entries()).sort((a, b) => {
    const nameA = STATE_NAMES[a[0]] ?? a[0]
    const nameB = STATE_NAMES[b[0]] ?? b[0]
    return nameA.localeCompare(nameB, 'pt-BR')
  })
}

function ClubsStateList({
  activeId = null,
  onHoverClub,
  onSelectState,
  className = '',
}: ClubsStateListProps) {
  const byState = useMemo(() => groupByState(clubs), [])

  return (
    <aside
      className={`flex flex-col overflow-hidden rounded-sm border border-black/8 bg-white ${className}`}
      aria-label="Lista de clubes por estado"
    >
      <div className="border-b border-black/5 px-3 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Clubes parceiros
        </p>
        <p className="mt-0.5 text-sm text-muted">
          {clubs.length} clubes em {byState.length} estados
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-1.5 py-2">
        {byState.map(([uf, stateClubs]) => {
          const stateName = STATE_NAMES[uf] ?? uf
          const region = getStateRegion(uf)
          const regionColor = region ? REGION_COLORS[region] : null
          return (
            <section key={uf} className="mb-3 last:mb-1">
              <h3 className="sticky top-0 z-10 bg-white/95 px-1 py-1 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => onSelectState?.(uf)}
                  className="flex w-full items-center gap-2 rounded-sm px-1 py-1 text-left transition hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label={`Ver clubes de ${stateName}`}
                >
                  {regionColor ? (
                    <span
                      className="inline-block h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: regionColor.accent }}
                      title={region ? REGION_NAMES[region] : undefined}
                      aria-hidden
                    />
                  ) : null}
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {stateName}
                  </span>
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: regionColor?.accent ?? 'var(--primary)' }}
                  >
                    {uf}
                  </span>
                </button>
              </h3>

              <ul className="space-y-0.5">
                {stateClubs.map((club) => {
                  const active = activeId === club.id
                  return (
                    <li key={club.id}>
                      <button
                        type="button"
                        aria-label={`${club.name}, ${club.city}, ${stateName}`}
                        onMouseEnter={() => onHoverClub?.(club.id)}
                        onMouseLeave={() => onHoverClub?.(null)}
                        onFocus={() => onHoverClub?.(club.id)}
                        onBlur={() => onHoverClub?.(null)}
                        onClick={() => openClubWebsite(club)}
                        className={`
                          flex w-full items-center gap-2.5 rounded-sm px-1.5 py-1.5 text-left transition
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                          ${active ? '' : 'hover:bg-surface'}
                        `}
                        style={
                          active && regionColor
                            ? { backgroundColor: regionColor.fill }
                            : undefined
                        }
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/5 bg-white shadow-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={club.logo}
                            alt=""
                            aria-hidden
                            loading="lazy"
                            className="max-h-[70%] max-w-[70%] object-contain"
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[13px] font-semibold leading-tight text-ink">
                            {club.name}
                          </span>
                          {club.city ? (
                            <span className="block truncate text-xs text-muted">
                              {club.city}
                            </span>
                          ) : null}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </aside>
  )
}

export default memo(ClubsStateList)
