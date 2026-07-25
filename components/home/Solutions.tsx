'use client'

import { useState } from 'react'
import Link from 'next/link'
import DemoModal from '@/components/shared/DemoModal'
import Reveal from '@/components/shared/Reveal'
import { solutionModules } from '@/lib/modules'

const descriptions: Record<string, string> = {
  'gestao-administrativa':
    'Pessoas, contratos, logística, alojamentos e documentos em um só fluxo.',
  'gestao-tecnica': 'Competições, treinamentos, captação e programação semanal.',
  'gestao-saude-e-performance':
    'Prontuários, fisiologia, nutrição, psicologia e GPS integrados.',
  'gestao-da-comunicacao':
    'App mobile e BeatsCore TV para o clube inteiro na mesma página.',
}

export default function Solutions() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 md:py-28 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,166,81,0.15),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <p className="section-kicker">Nossas soluções</p>
                <h2 className="section-title text-white mb-4">
                  Quatro módulos. Um departamento de futebol completo.
                </h2>
                <p className="text-white/60 text-xl">
                  Plataforma organizada para visão geral, online e prática — da administrativa à
                  comunicação.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Agende uma demonstração
                </button>
                <Link href="/solucoes" className="btn-ghost">
                  Ver detalhes
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 items-stretch">
            {solutionModules.map((mod, i) => (
              <Reveal key={mod.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/solucoes/${mod.slug}`}
                  className="group flex h-full flex-col border border-white/5 bg-dark-2/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-8"
                >
                  <div className="mb-6 flex h-28 shrink-0 items-center justify-center overflow-hidden bg-dark-3 md:h-36">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mod.imgColor}
                      alt={mod.title}
                      className="h-full w-full object-contain p-3 opacity-95 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="mb-2 font-display text-2xl font-bold transition-opacity group-hover:opacity-90"
                    style={{ color: mod.accent }}
                  >
                    {mod.title}
                  </h3>
                  <p className="flex-1 text-lg leading-relaxed text-white/55">
                    {descriptions[mod.slug]}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
