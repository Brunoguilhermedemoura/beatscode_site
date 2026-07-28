'use client'

import { memo } from 'react'
import type { Club } from '@/lib/clubs'
import { STATE_NAMES } from '@/lib/clubs'

type ClubTooltipProps = {
  club: Club
  /** Position relative to the map container (px) */
  x: number
  y: number
}

function ClubTooltip({ club, x, y }: ClubTooltipProps) {
  const stateName = STATE_NAMES[club.state] ?? club.state

  return (
    <div
      role="tooltip"
      className="pointer-events-none absolute z-30 w-56 -translate-x-1/2 -translate-y-[calc(100%+14px)] animate-fade-in rounded-sm border border-black/8 bg-white p-3 shadow-[0_12px_32px_rgba(10,15,12,0.16)]"
      style={{ left: x, top: y }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/5 bg-surface shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={club.logo}
            alt=""
            aria-hidden
            className="max-h-[70%] max-w-[70%] object-contain"
          />
        </span>
        <div className="min-w-0 text-left">
          <p className="truncate font-display text-sm font-bold text-ink leading-tight">
            {club.name}
          </p>
          <p className="mt-0.5 text-xs text-muted">
            {club.city} · {stateName}
          </p>
        </div>
      </div>
      {club.website ? (
        <p className="mt-2.5 border-t border-black/5 pt-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
          Clique para conhecer
        </p>
      ) : null}
    </div>
  )
}

export default memo(ClubTooltip)
