'use client'

import { useState } from 'react'
import Link from 'next/link'
import DemoModal from '@/components/shared/DemoModal'
import Reveal from '@/components/shared/Reveal'

const solutions = [
  {
    href: '/solucoes#administrativa',
    label: 'Gestão Administrativa',
    desc: 'Pessoas, contratos, logística, alojamentos e documentos em um só fluxo.',
    img: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_ADM-copy.png',
  },
  {
    href: '/solucoes#tecnica',
    label: 'Gestão Técnica',
    desc: 'Competições, treinamentos, captação e programação semanal.',
    img: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_TECNICA-copy.png',
  },
  {
    href: '/solucoes#saude',
    label: 'Saúde e Performance',
    desc: 'Prontuários, fisiologia, nutrição, psicologia e GPS integrados.',
    img: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_SAUDE-copy.png',
  },
  {
    href: '/solucoes#comunicacao',
    label: 'Gestão da Comunicação',
    desc: 'App mobile e BeatsCore TV para o clube inteiro na mesma página.',
    img: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_COMUNICACAO-copy.png',
  },
]

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
                  Plataforma organizada para visão geral, online e prática — da administrativa à comunicação.
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

          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <Reveal key={s.href} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group block bg-dark-2/80 border border-white/5 hover:border-primary/40 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-28 md:h-36 flex items-center justify-center mb-6 bg-dark-3/50 rounded-sm overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.label}
                      className="max-h-full w-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary-soft transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-white/55 text-lg leading-relaxed">{s.desc}</p>
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
