'use client'
import { useState } from 'react'
import DemoModal from '@/components/shared/DemoModal'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <section className="bg-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://beatscode.com/wp-content/uploads/2022/10/HOME-IMG1.png')] bg-right bg-no-repeat bg-contain opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Transformação Digital</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Decida revolucionar a gestão de futebol do seu clube.
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Com a plataforma online da <strong className="text-white">BeatsCode</strong> é possível organizar, visualizar e planejar a gestão técnica do departamento de futebol.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setModalOpen(true)} className="btn-primary text-base px-8 py-4">
                  Agende uma demonstração
                </button>
                <a href="/solucoes" className="btn-outline text-base px-8 py-4">
                  Conheça as soluções
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12">
                {[
                  'Retenção de dados técnicos',
                  'Eficiência na Comunicação',
                  'Engajamento dos profissionais',
                  'Padronização de dados',
                  'Legado e Integridade',
                  'Evolução de atletas',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"/>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <img
                src="https://beatscode.com/wp-content/uploads/2022/10/HOME-IMG1.png"
                alt="Plataforma BeatsCode"
                className="w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
