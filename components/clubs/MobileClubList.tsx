'use client'

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Club } from '@/lib/clubs'
import { STATE_NAMES, openClubWebsite } from '@/lib/clubs'

type MobileClubListProps = {
  clubs: Club[]
  /** When set, opens that state's popover (from map cluster tap) */
  focusState?: string | null
  onFocusHandled?: () => void
}

function MobileClubList({ clubs, focusState, onFocusHandled }: MobileClubListProps) {
  const [openState, setOpenState] = useState<string | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const byState = useMemo(() => {
    const map = new Map<string, Club[]>()
    for (const club of clubs) {
      const list = map.get(club.state) ?? []
      list.push(club)
      map.set(club.state, list)
    }
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length)
  }, [clubs])

  useEffect(() => {
    if (!focusState) return
    setOpenState(focusState)
    onFocusHandled?.()
  }, [focusState, onFocusHandled])

  useEffect(() => {
    if (!openState) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenState(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openState])

  const openClubs: Club[] = openState
    ? byState.find(([uf]) => uf === openState)?.[1] ?? []
    : []

  const handleClubActivate = useCallback((club: Club) => {
    openClubWebsite(club)
  }, [])

  return (
    <div className="w-full">
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {byState.map(([uf, list]) => (
          <li key={uf}>
            <button
              type="button"
              onClick={() => setOpenState(uf)}
              className="flex w-full items-center justify-between gap-2 rounded-sm border border-black/8 bg-white px-3 py-3 text-left shadow-sm transition hover:border-primary/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`${STATE_NAMES[uf] ?? uf}: ${list.length} clubes`}
            >
              <span className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF7EF] text-xs font-bold text-primary">
                  {uf}
                </span>
                <span className="text-sm font-medium text-ink">
                  {STATE_NAMES[uf] ?? uf}
                </span>
              </span>
              <span className="rounded-full bg-surface px-2 py-0.5 text-xs font-semibold text-muted">
                {list.length}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openState ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-dark/50 p-4 sm:items-center animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={`Clubes em ${STATE_NAMES[openState] ?? openState}`}
          onClick={() => setOpenState(null)}
        >
          <div
            ref={panelRef}
            className="max-h-[70vh] w-full max-w-md overflow-auto rounded-sm bg-white p-5 shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="section-kicker mb-1">
                  {STATE_NAMES[openState] ?? openState}
                </p>
                <h3 className="font-display text-xl font-bold text-ink">
                  {openClubs.length} {openClubs.length === 1 ? 'clube' : 'clubes'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpenState(null)}
                className="rounded-sm px-2 py-1 text-sm text-muted hover:bg-surface hover:text-ink"
                aria-label="Fechar"
              >
                Fechar
              </button>
            </div>

            <ul className="space-y-1">
              {openClubs.map((club) => (
                <li key={club.id}>
                  <button
                    type="button"
                    onClick={() => handleClubActivate(club)}
                    aria-label={`${club.name}, ${club.city}`}
                    className="flex w-full items-center gap-3 rounded-sm px-2 py-2.5 text-left transition hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/5 bg-white shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={club.logo}
                        alt=""
                        aria-hidden
                        className="max-h-[70%] max-w-[70%] object-contain"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-ink">
                        {club.name}
                      </span>
                      <span className="block text-xs text-muted">{club.city}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default memo(MobileClubList)
