'use client'
import { useState } from 'react'
import DemoModal from '@/components/shared/DemoModal'
import Link from 'next/link'

const solutions = [
  {
    img: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_ADM-copy.png',
    href: '/solucoes#administrativa',
    label: 'Gestão Administrativa',
  },
  {
    img: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_TECNICA-copy.png',
    href: '/solucoes#tecnica',
    label: 'Gestão Técnica',
  },
  {
    img: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_SAUDE-copy.png',
    href: '/solucoes#saude',
    label: 'Saúde e Performance',
  },
  {
    img: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_COMUNICACAO-copy.png',
    href: '/solucoes#comunicacao',
    label: 'Gestão da Comunicação',
  },
]

export default function Solutions() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="section-title text-dark">A melhor tática é usar a gestão para conquistar resultados!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Tenha uma visão geral, on-line e prática do departamento de futebol do clube para tomar decisões mais assertivas rumo à vitória.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              Agende uma demonstração
            </button>
          </div>
          <div className="mt-16">
            <h2 className="section-title text-dark mb-12">Nossas soluções</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Nossa plataforma está organizada em quatro grandes grupos de gestão de dados e setores para que nossos clientes tenham uma visão geral, on-line e prática do departamento de futebol.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {solutions.map((s) => (
                <Link key={s.href} href={s.href}
                  className="bg-dark rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform group">
                  <img src={s.img} alt={s.label} className="w-full object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
