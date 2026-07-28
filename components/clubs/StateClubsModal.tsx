'use client'

import { memo, useEffect } from 'react'
import {
  STATE_NAMES,
  getStateRegion,
  REGION_COLORS,
  openClubWebsite,
  type Club,
} from '@/lib/clubs'

type StateClubsModalProps = {
  state: string
  clubs: Club[]
  onClose: () => void
}

function StateClubsModal({ state, clubs, onClose }: StateClubsModalProps) {
  const stateName = STATE_NAMES[state] ?? state
  const region = getStateRegion(state)
  const regionColor = region ? REGION_COLORS[region] : null

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/55 p-4 backdrop-blur-[2px] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Clubes em ${stateName}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-sm bg-white shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-start justify-between gap-3 border-b border-black/5 px-5 py-4"
          style={
            regionColor
              ? { borderTop: `3px solid ${regionColor.accent}` }
              : undefined
          }
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {state} · {stateName}
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-ink">
              {clubs.length} {clubs.length === 1 ? 'clube' : 'clubes'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-sm px-2 py-1 text-sm text-muted transition hover:bg-surface hover:text-ink"
            aria-label="Fechar"
          >
            Fechar
          </button>
        </div>

        <div className="max-h-[min(60vh,420px)] overflow-y-auto p-5">
          {clubs.length === 0 ? (
            <p className="text-sm text-muted">
              Nenhum clube parceiro neste estado.
            </p>
          ) : (
            <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
              {clubs.map((club) => (
                <li key={club.id} className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => openClubWebsite(club)}
                    aria-label={`${club.name}${club.website ? ' — abrir site' : ''}`}
                    title={club.name}
                    className="group rounded-full p-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-black/5 bg-white shadow-md transition group-hover:scale-110 group-hover:shadow-lg sm:h-[72px] sm:w-[72px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={club.logo}
                        alt=""
                        aria-hidden
                        className="max-h-[70%] max-w-[70%] object-contain"
                        draggable={false}
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(StateClubsModal)
