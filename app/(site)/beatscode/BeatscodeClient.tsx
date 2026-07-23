'use client'
import { useState } from 'react'
import DemoModal from '@/components/shared/DemoModal'

const advantages = [
  {
    img: 'https://beatscode.com/wp-content/uploads/2022/10/BEATSCODE-ICONES-FUNDO_SOBRE-LEGADO.png',
    title: 'Legado e Posse de Dados',
    desc: 'Mantenha a posse de dados e informações importantes, mesmo com mudanças de gestão e de pessoas, gerando um legado de dados e estatísticas da evolução de atletas, da captação até a profissionalização de talentos.',
  },
  {
    img: 'https://beatscode.com/wp-content/uploads/2022/10/BEATSCODE-ICONES-FUNDO_SOBRE-PADRONIZACAO-PROCESSOS.png',
    title: 'Otimização de Processos',
    desc: 'Defina padrões de controles e processos em cada setor do departamento de futebol, criando e otimizando o seu modelo de gestão com maior engajamento e colaboração dos atletas e outros setores do clube.',
  },
  {
    img: 'https://beatscode.com/wp-content/uploads/2022/10/BEATSCODE-ICONES-FUNDO_SOBRE-GESTAO-INTEGRADA.png',
    title: 'Gestão de Futebol Integrada',
    desc: 'Centralize a gestão de todo o departamento de futebol como registros, saúde e performance, logística, captação e base, em um único ambiente de informações de forma organizada, segura e acessível na nuvem.',
  },
  {
    img: 'https://beatscode.com/wp-content/uploads/2022/10/BEATSCODE-ICONES-FUNDO_SOBRE-EFICIENCIA-COMUNICACAO.png',
    title: 'Eficiência na Comunicação',
    desc: 'Comunicação rápida e dinâmica com todo o clube através do aplicativo e TV indoor com informações de programação semanal, convocações, etc.',
  },
]

const partners = [
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/inovativa_brasil-1024x518.png', name: 'Inovativa Brasil' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/sinapse-inovacao.png', name: 'Sinapse Inovação' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/capital-empreendedor.png', name: 'Capital Empreendedor' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/12/sc-global-verde.png', name: 'SC Global' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/Logo-Startup-SC-1024x168-1.png', name: 'Startup SC' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/pollen.png', name: 'Pollen' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/unochapeco.png', name: 'Unochapecó' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/certi.png', name: 'Certi' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/fapesc.png', name: 'FAPESC' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/11/inctech-1024x1024.png', name: 'Inctech' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/12/sebrae-azul.png', name: 'Sebrae' },
]

export default function BeatscodeClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Sobre nós</p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Programados para dar nosso melhor sempre. Prontos para conquistar vitórias.
              </h1>
              <p className="text-gray-400 leading-relaxed mb-8">
                A BeatsCode é uma sportech referência no cenário nacional, focada no desenvolvimento de soluções e serviços inovadores para a Gestão Técnica de Clubes de Futebol, aliando a paixão pelo esporte e pela tecnologia para criar uma plataforma inteligente que centraliza, processa e gera informações que organizam, inovam e transformam a gestão do futebol. Desde 2015, nosso propósito é revolucionar a gestão de clubes de futebol através da tecnologia e inovação.
              </p>
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Agende uma demonstração
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://beatscode.com/wp-content/uploads/2022/06/MAN.png"
                alt="BeatsCode Team"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-dark mb-4">Coloque seu clube em outro patamar no futebol</h2>
          <p className="text-center text-gray-600 mb-12">Principais vantagens da tecnologia BeatsCode</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a) => (
              <div key={a.title} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
                <img src={a.img} alt={a.title} className="w-16 h-16 object-contain mx-auto mb-4" />
                <h3 className="font-bold text-dark mb-3">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People + Tech */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-dark mb-6">Pessoas e tecnologia, juntas, para o máximo desempenho</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Com trabalho árduo e dedicação do nosso time, buscamos desenvolver soluções otimizadas e inovadoras, colocando as pessoas alinhadas às tecnologias, auxiliando os clubes a possibilitar novos comportamentos de seus colaboradores, diretores, comissões técnicas e atletas para, assim, realizarem uma transformação digital na gestão de futebol dos seus clubes, com confiabilidade e excelência.
              </p>
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Agende uma demonstração
              </button>
            </div>
            <div>
              <img
                src="https://beatscode.com/wp-content/uploads/2022/06/SOBRE-PESSOAS-E-TEC3-copy.png"
                alt="Pessoas e tecnologia"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-dark mb-12">Parceiros e premiações</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                <img src={p.img} alt={p.name} className="h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
