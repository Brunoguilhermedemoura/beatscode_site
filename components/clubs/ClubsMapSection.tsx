'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { REGION_COLORS, REGION_NAMES, REGION_ORDER } from '@/lib/clubs'
import ClubsReachPanorama from './ClubsReachPanorama'

const BrazilMap = dynamic(() => import('./BrazilMap'), {
  ssr: false,
  loading: () => (
    <div
      className="mx-auto min-h-[420px] w-full animate-pulse rounded-sm bg-[#EEF7EF]/50 lg:min-h-[560px]"
      aria-hidden
    />
  ),
})

export default function ClubsMapSection() {
  return (
    <section className="bg-white pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ClubsReachPanorama />

        <div className="mt-16 animate-fade-up delay-1 border-t border-black/5 pt-14 md:mt-20 md:pt-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-kicker">Mapa interativo</p>
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Explore a presença BeatsCode no Brasil
            </h3>
            <p className="mt-3 text-muted">
              Clique em um estado para ver os escudos dos clubes parceiros daquela
              região.
            </p>
          </div>

          <div className="mt-10 w-full md:mt-12">
            <BrazilMap />
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
            {REGION_ORDER.map((region) => (
              <li key={region} className="flex items-center gap-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: REGION_COLORS[region].accent }}
                  aria-hidden
                />
                {REGION_NAMES[region]}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 animate-fade-up delay-2 text-center">
          <Link href="/contato" className="btn-outline">
            Quero meu clube aqui
          </Link>
        </div>
      </div>
    </section>
  )
}
