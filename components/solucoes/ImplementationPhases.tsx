'use client'

import { useState } from 'react'
import Reveal from '@/components/shared/Reveal'

type Module = {
  title: string
  icon: 'people' | 'competition' | 'logistics' | 'contracts' | 'schedule' | 'reports' | 'technical' | 'admin' | 'health' | 'comms'
}

type Phase = {
  id: number
  title: string
  subtitle: string
  note: string
  accent: string
  modules: Module[]
}

const phases: Phase[] = [
  {
    id: 1,
    title: 'Criando Cultura',
    subtitle: 'Módulos Essenciais',
    note: 'Os módulos essenciais são imprescindíveis para a implementação do sistema BeatsCode.',
    accent: 'var(--primary)',
    modules: [
      { title: 'Gestão de pessoas', icon: 'people' },
      { title: 'Gestão de competições', icon: 'competition' },
      { title: 'Gestão de logística de jogos', icon: 'logistics' },
      { title: 'Gestão de contratos (básico)', icon: 'contracts' },
      { title: 'Programação semanal', icon: 'schedule' },
      { title: 'Relatórios e Gráficos', icon: 'reports' },
    ],
  },
  {
    id: 2,
    title: 'Criando Legado',
    subtitle: 'Módulos Adicionais',
    note: 'Os módulos adicionais podem ser solicitados após a implantação da fase essencial.',
    accent: 'var(--primary-dark)',
    modules: [
      { title: 'Gestão Técnica', icon: 'technical' },
      { title: 'Gestão Administrativa', icon: 'admin' },
      { title: 'Gestão Saúde & Performance', icon: 'health' },
      { title: 'Gestão da Comunicação', icon: 'comms' },
    ],
  },
]

function ModuleIcon({ name }: { name: Module['icon'] }) {
  const common = 'w-7 h-7'
  switch (name) {
    case 'people':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
    case 'competition':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" />
          <path strokeLinecap="round" d="M3.5 9h17M3.5 15h17" />
        </svg>
      )
    case 'logistics':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="14" rx="1" />
          <path strokeLinecap="round" d="M3 10h18M8 4v14M16 4v14" />
        </svg>
      )
    case 'contracts':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M8 13h8M8 17h5" />
        </svg>
      )
    case 'schedule':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="16" rx="1" />
          <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4M12 14v3M12 14l2.5 1.5" />
        </svg>
      )
    case 'reports':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l3-5 3 3 5-8" />
        </svg>
      )
    case 'technical':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2 4 4 .5-3 3 .8 4.2L12 13l-3.8 1.7.8-4.2-3-3 4-.5z" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      )
    case 'admin':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
        </svg>
      )
    case 'health':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 8.6a4.6 4.6 0 00-7.5-3.5L12 6l-1.3-.9a4.6 4.6 0 00-6.5 6.5L12 21l7.8-7.8a4.5 4.5 0 001-4.6z" />
          <path strokeLinecap="round" d="M8 12h2l1.5-3 2 6 1.5-3H17" />
        </svg>
      )
    case 'comms':
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="14" rx="1" />
          <path strokeLinecap="round" d="M8 21h8M12 18v3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 9.5v3l3.5-1.5L10 9.5z" />
        </svg>
      )
  }
}

export default function ImplementationPhases() {
  const [active, setActive] = useState(0)
  const phase = phases[active]

  return (
    <section className="py-24 md:py-28 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,166,81,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,122,61,0.12),_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="section-kicker">Implementação</p>
            <h2 className="section-title text-white mb-4">
              Como funciona a implementação do sistema BeatsCode
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              Conheça as fases do processo de implementação que levará seu time a outro patamar da
              organização e performance.
            </p>
          </div>
        </Reveal>

        {/* Phase switcher — abas limpas, sem caixas */}
        <nav className="mb-16" aria-label="Fases de implementação">
          <div className="flex items-stretch justify-center max-w-xl mx-auto border-b border-white/10">
            {phases.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                className={`relative flex-1 px-4 pb-4 pt-1 text-center transition-colors duration-300 ${
                  i === active ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                <span className="block text-[11px] uppercase tracking-[0.22em] mb-1.5 text-primary-soft/90">
                  Fase {String(p.id).padStart(2, '0')}
                </span>
                <span className="block font-display font-bold text-lg md:text-xl leading-tight">
                  {p.title}
                </span>
                <span className="block text-sm mt-1 opacity-70">{p.subtitle}</span>
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 transition-all duration-300 ${
                    i === active ? 'bg-primary scale-x-100' : 'bg-transparent scale-x-50'
                  }`}
                />
              </button>
            ))}
          </div>
        </nav>

        {/* Phase content */}
        <div key={phase.id} className="animate-[fade-up_0.45s_ease-out]">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14 mb-12 lg:mb-16">
            <div className="lg:w-64 flex-shrink-0 text-center lg:text-left">
              <div
                className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-full mb-5 ring-4 ring-primary/30"
                style={{ background: 'linear-gradient(145deg, var(--primary), var(--primary-dark))' }}
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/80">Fase</span>
                <span className="font-display text-5xl font-bold leading-none text-white">
                  {String(phase.id).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">{phase.title}</h3>
              <p className="text-primary-soft font-semibold mb-3">{phase.subtitle}</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                {phase.note}
              </p>
            </div>

            {/* Desktop timeline */}
            <div className="hidden md:block flex-1 min-w-0 self-center">
              <div className="relative py-2">
                <div className="absolute left-4 right-4 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary via-primary-soft to-primary" />

                <div
                  className={`relative grid ${
                    phase.modules.length === 6 ? 'grid-cols-6' : 'grid-cols-4'
                  }`}
                >
                  {phase.modules.map((mod, i) => {
                    const above = i % 2 === 0
                    return (
                      <div key={mod.title} className="flex flex-col items-center px-1">
                        <div className="h-36 w-full flex flex-col items-center justify-end pb-3 text-center">
                          {above && (
                            <>
                              <p className="font-display font-bold text-[13px] leading-snug text-white mb-3 max-w-[9rem]">
                                {mod.title}
                              </p>
                              <div className="w-14 h-14 rounded-full bg-dark-2 border border-primary/50 flex items-center justify-center text-primary-soft">
                                <ModuleIcon name={mod.icon} />
                              </div>
                              <div className="w-px h-5 bg-primary/70 mt-2" />
                            </>
                          )}
                        </div>

                        <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-dark" />

                        <div className="h-36 w-full flex flex-col items-center justify-start pt-3 text-center">
                          {!above && (
                            <>
                              <div className="w-px h-5 bg-primary/70 mb-2" />
                              <div className="w-14 h-14 rounded-full bg-dark-2 border border-primary/50 flex items-center justify-center text-primary-soft mb-3">
                                <ModuleIcon name={mod.icon} />
                              </div>
                              <p className="font-display font-bold text-[13px] leading-snug text-white max-w-[9rem]">
                                {mod.title}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Mobile list */}
            <div className="md:hidden flex-1 space-y-3">
              {phase.modules.map((mod, i) => (
                <div
                  key={mod.title}
                  className="flex items-center gap-4 border border-white/10 bg-dark-2/60 px-4 py-3.5"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/35 flex items-center justify-center text-primary-soft flex-shrink-0">
                    <ModuleIcon name={mod.icon} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-display font-bold text-white leading-snug">{mod.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={() => setActive((i) => (i === 0 ? phases.length - 1 : i - 1))}
              className="text-sm font-semibold text-white/60 hover:text-primary-soft transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Fase anterior
            </button>
            <div className="flex gap-2">
              {phases.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Ir para fase ${p.id}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? 'w-8 bg-primary' : 'w-3 bg-white/25 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActive((i) => (i === phases.length - 1 ? 0 : i + 1))}
              className="text-sm font-semibold text-white/60 hover:text-primary-soft transition-colors inline-flex items-center gap-2"
            >
              Próxima fase
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
