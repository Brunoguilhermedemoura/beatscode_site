'use client'

import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import {
  clubs,
  getStateRegion,
  REGION_COLORS,
  type Club,
} from '@/lib/clubs'
import ClubMarker from './ClubMarker'
import ClubTooltip from './ClubTooltip'
import ClubsStateList from './ClubsStateList'
import StateClubsModal from './StateClubsModal'

const GEO_URL = '/maps/brazil-states.json'
const FILL_EMPTY = '#f3f5f4'
const STROKE = '#ffffff'

/** Calibrated for clean Brazil GeoJSON — fills ~90% of the SVG */
const MAP_WIDTH = 1000
const MAP_HEIGHT = 1080
const PROJECTION_CONFIG = {
  center: [-54, -15] as [number, number],
  scale: 1405,
}

type TooltipState = {
  club: Club
  x: number
  y: number
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isMobile
}

function BrazilMap() {
  const isMobile = useIsMobile()
  const markerSize = isMobile ? 26 : 30

  const containerRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<number | null>(null)
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)
  const [selectedState, setSelectedState] = useState<string | null>(null)

  const partnerStates = useMemo(
    () => new Set(clubs.map((c) => c.state)),
    []
  )

  const selectedClubs = useMemo(
    () =>
      selectedState
        ? clubs.filter((c) => c.state === selectedState)
        : [],
    [selectedState]
  )

  const activeClub = useMemo(
    () => (activeId != null ? clubs.find((c) => c.id === activeId) ?? null : null),
    [activeId]
  )

  const handleActivate = useCallback((id: number | null) => {
    setActiveId(id)
  }, [])

  const handleSelectState = useCallback((uf: string) => {
    if (!partnerStates.has(uf)) return
    setSelectedState(uf)
    setActiveId(null)
    setTooltip(null)
  }, [partnerStates])

  const handleCloseModal = useCallback(() => {
    setSelectedState(null)
  }, [])

  useEffect(() => {
    if (!activeClub || !containerRef.current || selectedState) {
      if (!activeClub || selectedState) setTooltip(null)
      return
    }

    const el = containerRef.current.querySelector(
      `[aria-label^="${activeClub.name}"]`
    ) as HTMLElement | null

    if (!el) {
      setTooltip(null)
      return
    }

    const containerRect = containerRef.current.getBoundingClientRect()
    const markerRect = el.getBoundingClientRect()
    setTooltip({
      club: activeClub,
      x: markerRect.left + markerRect.width / 2 - containerRect.left,
      y: markerRect.top - containerRect.top,
    })
  }, [activeClub, markerSize, isMobile, selectedState])

  return (
    <>
      <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:items-start lg:gap-6">
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden bg-white"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={PROJECTION_CONFIG}
            width={MAP_WIDTH}
            height={MAP_HEIGHT}
            className="h-auto w-full"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const uf = (geo.properties as { sigla?: string }).sigla ?? ''
                  const region = getStateRegion(uf)
                  const colors = region ? REGION_COLORS[region] : null
                  const fill = colors?.fill ?? FILL_EMPTY
                  const hoverFill = colors?.hover ?? FILL_EMPTY
                  const hasClubs = partnerStates.has(uf)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke={STROKE}
                      strokeWidth={0.7}
                      onClick={() => handleSelectState(uf)}
                      style={{
                        default: {
                          outline: 'none',
                          cursor: hasClubs ? 'pointer' : 'default',
                        },
                        hover: {
                          outline: 'none',
                          fill: hoverFill,
                          cursor: hasClubs ? 'pointer' : 'default',
                        },
                        pressed: { outline: 'none' },
                      }}
                    />
                  )
                })
              }
            </Geographies>

            {clubs.map((club) => (
              <Marker key={club.id} coordinates={club.coordinates}>
                <ClubMarker
                  club={club}
                  size={markerSize}
                  active={activeId === club.id}
                  onActivate={handleActivate}
                />
              </Marker>
            ))}
          </ComposableMap>

          {tooltip && !selectedState ? (
            <ClubTooltip club={tooltip.club} x={tooltip.x} y={tooltip.y} />
          ) : null}
        </div>

        <ClubsStateList
          activeId={activeId}
          onHoverClub={handleActivate}
          onSelectState={handleSelectState}
          className="h-[min(70vh,640px)] lg:h-[min(78vh,720px)] lg:sticky lg:top-28 lg:text-[0.95em]"
        />
      </div>

      {selectedState ? (
        <StateClubsModal
          state={selectedState}
          clubs={selectedClubs}
          onClose={handleCloseModal}
        />
      ) : null}
    </>
  )
}

export default memo(BrazilMap)
