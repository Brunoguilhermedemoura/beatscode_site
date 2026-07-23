'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'
import DemoModal from '@/components/shared/DemoModal'
import type { SolutionModule } from '@/lib/modules'
import { solutionModules } from '@/lib/modules'

/** Ícones das sub-features — estilo das pills verdes do site original */
function FeatureIcon({ title }: { title: string }) {
  const t = title.toLowerCase()
  const common = 'w-8 h-8 text-ink'

  let path: ReactNode

  if (t.includes('pessoa')) {
    path = (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 19v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M21 19v-1a3.5 3.5 0 00-2.5-3.3" />
      </>
    )
  } else if (t.includes('contrato')) {
    path = (
      <>
        <path d="M7 3h8l4 4v14H7V3z" />
        <path d="M15 3v4h4M9 12h6M9 16h4" />
      </>
    )
  } else if (t.includes('alojamento') || t.includes('refeit')) {
    path = (
      <>
        <path d="M3 18V10l9-5 9 5v8" />
        <path d="M3 18h18M8 18v-4h8v4" />
      </>
    )
  } else if (t.includes('documento') || t.includes('aprovação') || t.includes('aprovacao')) {
    path = (
      <>
        <path d="M7 3h8l4 4v14H7V3z" />
        <path d="M15 3v4h4" />
        <circle cx="16" cy="16" r="3" />
        <path d="M14.5 16l1 1 2-2" />
      </>
    )
  } else if (t.includes('social')) {
    path = (
      <>
        <path d="M8 14c-2-1-3-3-3-5a4 4 0 018 0c0 .5-.1 1-.2 1.4" />
        <path d="M16 14c2-1 3-3 3-5a4 4 0 00-6.5-3.1" />
        <path d="M4 20c1.5-2.5 4-4 8-4s6.5 1.5 8 4" />
      </>
    )
  } else if (t.includes('logística') || t.includes('logistica')) {
    path = (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7.5 7.5l1.4 1.4M15.1 15.1l1.4 1.4M7.5 16.5l1.4-1.4M15.1 8.9l1.4-1.4" />
      </>
    )
  } else if (t.includes('gráfico') || t.includes('grafico') || t.includes('relatório') || t.includes('relatorio')) {
    path = (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="M8 16v-5M12 16V8M16 16v-8" />
      </>
    )
  } else if (t.includes('programação') || t.includes('programacao') || t.includes('semana')) {
    path = (
      <>
        <rect x="4" y="5" width="16" height="15" rx="1" />
        <path d="M4 10h16M9 3v4M15 3v4" />
      </>
    )
  } else if (t.includes('mercado')) {
    path = (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-3.5-3.5" />
      </>
    )
  } else if (t.includes('treinamento')) {
    path = (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
        <path d="M16 4l2 2-2 2" />
      </>
    )
  } else if (t.includes('competi')) {
    path = (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4c2 2.5 3 5 3 8s-1 5.5-3 8c-2-2.5-3-5-3-8s1-5.5 3-8z" />
        <path d="M4 12h16" />
      </>
    )
  } else if (t.includes('captação') || t.includes('captacao') || t.includes('talent')) {
    path = (
      <>
        <path d="M12 3l2 4 4 .5-3 3 .8 4L12 12.5 8.2 14.5l.8-4-3-3 4-.5z" />
      </>
    )
  } else if (t.includes('fisiologia')) {
    path = <path d="M4 12h3l2-5 3 10 2-5h4" />
  } else if (t.includes('nutri')) {
    path = (
      <>
        <path d="M12 3c-2 4-5 6-5 10a5 5 0 0010 0c0-4-3-6-5-10z" />
      </>
    )
  } else if (t.includes('podo')) {
    path = (
      <>
        <ellipse cx="12" cy="14" rx="5" ry="7" />
        <path d="M10 8c1-2 3-2 4 0" />
      </>
    )
  } else if (t.includes('psico')) {
    path = (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 10h.01M15 10h.01M9 15c1.2 1.2 4.8 1.2 6 0" />
      </>
    )
  } else if (t.includes('fisio') || t.includes('terapia')) {
    path = (
      <>
        <path d="M12 4v16M8 8h8M8 16h8" />
      </>
    )
  } else if (t.includes('prontuário') || t.includes('prontuario') || t.includes('médic') || t.includes('medic')) {
    path = (
      <>
        <path d="M8 3h8v4H8V3z" />
        <path d="M6 7h12v14H6V7z" />
        <path d="M10 12h4M12 10v4" />
      </>
    )
  } else if (t.includes('tv') || t.includes('beatscore')) {
    path = (
      <>
        <rect x="3" y="5" width="18" height="12" rx="1" />
        <path d="M8 21h8M12 17v4" />
        <path d="M10 9v4l4-2-4-2z" />
      </>
    )
  } else if (t.includes('aplicativo') || t.includes('app')) {
    path = (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    )
  } else {
    path = (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 8v4l2.5 2.5" />
      </>
    )
  }

  return (
    <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      {path}
    </svg>
  )
}

export default function ModuleDetailView({ mod }: { mod: SolutionModule }) {
  const [open, setOpen] = useState(false)
  const idx = solutionModules.findIndex((m) => m.slug === mod.slug)

  return (
    <>
      <section className="bg-surface pt-28 pb-10 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/solucoes"
            className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para Soluções
          </Link>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mod.imgColor}
                alt={mod.title}
                className="w-full max-w-md object-contain"
              />
            </div>
            <div>
              <p className="section-kicker" style={{ color: mod.accent }}>
                Módulo {String(idx + 1).padStart(2, '0')}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
                {mod.title}
              </h1>
              <p className="text-muted text-base md:text-lg leading-relaxed">{mod.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {mod.features.map((feature) => (
              <article key={feature.title} className="text-center flex flex-col items-center">
                <div className="mb-5 w-28 h-12 rounded-full bg-primary-soft flex items-center justify-center">
                  <FeatureIcon title={feature.title} />
                </div>
                <h2 className="font-display text-lg font-bold text-ink mb-3 leading-snug max-w-[16rem]">
                  {feature.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed max-w-[18rem]">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20 border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-10">
            Nossas soluções
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-center">
            {solutionModules.map((m) => (
              <Link
                key={m.slug}
                href={`/solucoes/${m.slug}`}
                className={`block px-2 py-2 transition-opacity ${
                  m.slug === mod.slug ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.imgColor}
                  alt={m.title}
                  className="w-full h-20 object-contain"
                />
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center bg-primary-soft hover:bg-primary text-ink font-bold text-base px-10 py-4 transition-colors"
          >
            Agende uma demonstração
          </button>
        </div>
      </section>

      <DemoModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
