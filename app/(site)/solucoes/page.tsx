'use client'

import { useState } from 'react'
import DemoModal from '@/components/shared/DemoModal'
import Reveal from '@/components/shared/Reveal'
import ImplementationPhases from '@/components/solucoes/ImplementationPhases'
import ModulesSection from '@/components/solucoes/ModulesSection'
import ProductShowcase from '@/components/solucoes/ProductShowcase'

export default function SolucoesPage() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <section className="relative pitch-grain text-white pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Plataforma</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
            Soluções
          </h1>
          <p className="text-white/55 text-lg max-w-2xl">
            Gestão técnica inteligente, da base à elite do futebol brasileiro.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="section-kicker">Visão geral</p>
              <h2 className="section-title text-ink mb-4">
                A melhor tática é usar a gestão para conquistar resultados
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Com a plataforma online da <strong className="text-ink">BeatsCode</strong> é possível
                organizar, visualizar e planejar a gestão técnica do departamento de futebol e
                acompanhar o crescimento do seu clube com dados valiosos e comunicação integrada.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Otimize processos e ganhe tempo',
                  'Acompanhe a evolução de atletas',
                  'Praticidade na comunicação com todo o clube',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink">
                    <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setModal(true)} className="btn-primary">
                Agende uma demonstração
              </button>
            </Reveal>
            <Reveal delay={100}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero/solucoes.png"
                alt="Profissional utilizando a plataforma BeatsCode"
                className="w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <ProductShowcase />

      <ModulesSection />

      <ImplementationPhases />

      <section className="py-20 bg-white text-center border-t border-black/5">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title text-ink mb-4">Pronto para revolucionar a gestão?</h2>
          <p className="text-muted mb-8">Agende uma demonstração com nosso time.</p>
          <button onClick={() => setModal(true)} className="btn-primary px-8 py-4">
            Agende uma demonstração
          </button>
        </div>
      </section>

      <DemoModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  )
}
