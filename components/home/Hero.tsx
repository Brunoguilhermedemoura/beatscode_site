'use client'

import { useState } from 'react'
import Link from 'next/link'
import DemoModal from '@/components/shared/DemoModal'
import { LOGO_URL } from '@/lib/clubs'

const HERO_IMG = '/hero/campo-aereo.png'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden text-white">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/55 to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/15 to-dark/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_rgba(10,15,12,0.45)_100%)]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 md:py-28">
          <div className="max-w-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="BeatsCode"
              className="h-12 md:h-16 w-auto mb-8 brightness-0 invert animate-brand-in"
            />
            <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] mb-6 animate-fade-up delay-1">
              Gestão técnica que o campo sente.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-10 max-w-xl animate-fade-up delay-2">
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
