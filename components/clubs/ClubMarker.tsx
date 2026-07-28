'use client'

import { memo, useCallback, type KeyboardEvent } from 'react'
import type { Club } from '@/lib/clubs'
import { openClubWebsite } from '@/lib/clubs'

type ClubMarkerProps = {
  club: Club
  size?: number
  active?: boolean
  onActivate?: (id: number | null) => void
}

function ClubMarker({
  club,
  size = 36,
  active = false,
  onActivate,
}: ClubMarkerProps) {
  const [ox = 0, oy = 0] = club.markerOffset ?? []
  const half = size / 2

  const handleEnter = useCallback(() => {
    onActivate?.(club.id)
  }, [club.id, onActivate])

  const handleLeave = useCallback(() => {
    onActivate?.(null)
  }, [onActivate])

  const handleClick = useCallback(() => {
    openClubWebsite(club)
  }, [club])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        openClubWebsite(club)
      }
    },
    [club]
  )

  return (
    <g transform={`translate(${ox}, ${oy})`}>
      <foreignObject
        x={-half}
        y={-half}
        width={size}
        height={size}
        style={{ overflow: 'visible' }}
      >
        <button
          type="button"
          aria-label={`${club.name}, ${club.city}, ${club.state}`}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onFocus={handleEnter}
          onBlur={handleLeave}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={`
            flex h-full w-full cursor-pointer items-center justify-center
            rounded-full border border-black/5 bg-white
            shadow-[0_2px_8px_rgba(10,15,12,0.12)]
            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
            ${active ? 'z-20 scale-110 shadow-[0_8px_24px_rgba(10,15,12,0.22)]' : 'scale-100 hover:scale-110 hover:shadow-[0_8px_24px_rgba(10,15,12,0.22)]'}
          `}
          style={{ width: size, height: size }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={club.logo}
            alt=""
            aria-hidden
            loading="lazy"
            className="max-h-[70%] max-w-[70%] object-contain"
            draggable={false}
          />
        </button>
      </foreignObject>
    </g>
  )
}

export default memo(ClubMarker)
