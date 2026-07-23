'use client'
import { useState } from 'react'
import DemoModal from '@/components/shared/DemoModal'

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
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Soluções</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gestão técnica inteligente, da base à elite do futebol brasileiro.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-dark mb-4">A melhor tática é usar a gestão para conquistar resultados!</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Com a plataforma online da <strong>BeatsCode</strong> é possível organizar, visualizar e planejar a gestão técnica do departamento de futebol e acompanhar o crescimento do seu clube com dados valiosos e uma comunicação integrada com todo o time.
              </p>
              <ul className="space-y-2 mb-8">
                {['Otimize processos e ganhe tempo', 'Acompanhe a evolução de atletas', 'Praticidade na comunicação com todo o clube'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"/>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setModal(true)} className="btn-primary">Agende uma demonstração</button>
            </div>
            <img src="https://beatscode.com/wp-content/uploads/2022/02/SOLUCOES01.png" alt="Soluções" className="w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {modules.map((mod, i) => (
            <div key={mod.id} id={mod.id} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <img src={mod.img} alt={mod.title} className="w-full rounded-xl shadow-md" />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-black text-dark mb-4">{mod.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{mod.desc}</p>
                <ul className="space-y-2">
                  {mod.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"/>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DemoModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  )
}
