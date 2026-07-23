'use client'

import { useState } from 'react'
import Link from 'next/link'
import DemoModal from '@/components/shared/DemoModal'
import { LOGO_URL, PLATFORM_IMG } from '@/lib/clubs'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden pitch-grain text-white">
        {/* Full-bleed product plane */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PLATFORM_IMG}
            alt=""
            aria-hidden
            className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[78%] max-w-5xl object-contain opacity-[0.22] md:opacity-[0.32] select-none pointer-events-none animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 md:py-28">
          <div className="max-w-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="BeatsCode"
              className="h-12 md:h-16 w-auto mb-8 brightness-0 invert animate-brand-in"
            />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.05] tracking-tight mb-6 animate-fade-up delay-1">
              Gestão técnica que o campo sente.
            </h1>
            <p className="text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-xl animate-fade-up delay-2">
              Organize, visualize e planeje o departamento de futebol do seu clube — da base à elite — em uma plataforma na nuvem.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-3">
              <button onClick={() => setModalOpen(true)} className="btn-primary text-base px-8 py-4">
                Agende uma demonstração
              </button>
              <Link href="/solucoes" className="btn-ghost text-base px-8 py-4">
                Conheça as soluções
              </Link>
            </div>
          </div>
        </div>
      </section>
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
