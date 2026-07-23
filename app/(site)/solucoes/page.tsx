'use client'

import { useState } from 'react'
import DemoModal from '@/components/shared/DemoModal'
import Reveal from '@/components/shared/Reveal'

const modules = [
  {
    id: 'administrativa',
    img: 'https://beatscode.com/wp-content/uploads/2022/02/BEATSCODE-MODULOS_ADM-1024x349.png',
    title: 'Gestão Administrativa',
    desc: 'Tenha uma visão geral do cadastro de pessoas, contratos e produtividades de atletas e comissão técnica, aprovação de documentos, relatos e registros de serviço social, organização de alojamentos e refeitórios, e históricos de atletas monitorados pelo setor de mercado do clube.',
    features: ['Cadastro de pessoas', 'Contratos (Produtividade)', 'Logística de Jogos', 'Alojamentos/Refeitórios', 'Aprovação Documentos', 'Serviço Social', 'Gráficos e Relatórios'],
  },
  {
    id: 'tecnica',
    img: 'https://beatscode.com/wp-content/uploads/2022/02/BEATSCODE-MODULOS_TECNICA-1024x349.png',
    title: 'Gestão Técnica',
    desc: 'Organize a gestão de competições, logística de jogos, treinamentos, programação semanal de treinamentos, reuniões técnicas, planejamento e controle de avaliações do departamento de captação de atletas de uma forma simples e prática.',
    features: ['Programação semanal', 'Análise de mercado', 'Captação de talentos', 'Treinamento', 'Competições'],
  },
  {
    id: 'saude',
    img: 'https://beatscode.com/wp-content/uploads/2022/02/BEATSCODE-MODULOS_SAUDE-1024x349.png',
    title: 'Saúde e Performance',
    desc: 'Neste módulo seu clube conseguirá acompanhar a saúde, performance e emocional dos atletas. As informações são extraídas de prontuários médicos, condutas da fisiologia, relatórios da nutrição, psicológicos e pedagógicos, e integração de GPS.',
    features: ['Fisiologia', 'Nutrição', 'Podologia', 'Psicologia', 'Prontuários médicos', 'Fisioterapia'],
  },
  {
    id: 'comunicacao',
    img: 'https://beatscode.com/wp-content/uploads/2022/02/BEATSCODE-MODULOS_COMUNICACAO-1024x349.png',
    title: 'Gestão da Comunicação',
    desc: 'Possibilita que todo o departamento de futebol do clube receba as mesmas informações, de forma dinâmica, através de um aplicativo mobile para Android e iOS. Da mesma maneira, diante de um aplicativo ligado nos televisores do clube, a plataforma entrega notificações e alertas.',
    features: ['BeatsCore TV', 'Aplicativo Mobile'],
  },
]

export default function SolucoesPage() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <section className="relative pitch-grain text-white pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Plataforma</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 tracking-tight max-w-3xl">
            Soluções
          </h1>
          <p className="text-white/55 text-lg max-w-2xl">
            Gestão técnica inteligente, da base à elite do futebol brasileiro.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="section-kicker">Visão geral</p>
              <h2 className="section-title text-ink mb-4">
                A melhor tática é usar a gestão para conquistar resultados
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Com a plataforma online da <strong className="text-ink">BeatsCode</strong> é possível
                organizar, visualizar e planejar a gestão técnica do departamento de futebol e acompanhar
                o crescimento do seu clube com dados valiosos e comunicação integrada.
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
                src="https://beatscode.com/wp-content/uploads/2022/02/SOLUCOES01.png"
                alt="Soluções BeatsCode"
                className="w-full shadow-2xl shadow-primary/10"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              id={mod.id}
              className="grid md:grid-cols-2 gap-12 items-center scroll-mt-28"
            >
              <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={mod.img} alt={mod.title} className="w-full border border-white/5" />
              </Reveal>
              <Reveal delay={80} className={i % 2 === 1 ? 'md:order-1' : ''}>
                <p className="section-kicker">Módulo {String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-3xl font-bold mb-4">{mod.title}</h3>
                <p className="text-white/55 leading-relaxed mb-6">{mod.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                      <span className="w-1 h-1 bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface text-center">
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
