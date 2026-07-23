'use client'

import { useState } from 'react'
import DemoModal from '@/components/shared/DemoModal'
import Reveal from '@/components/shared/Reveal'
import Partners from '@/components/home/Partners'

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

export default function BeatscodeClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative pitch-grain text-white pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-kicker">Sobre nós</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
                Programados para dar nosso melhor sempre.
              </h1>
              <p className="text-white/55 leading-relaxed mb-8 text-lg">
                A BeatsCode é uma sportech referência no cenário nacional, focada no desenvolvimento de
                soluções e serviços inovadores para a Gestão Técnica de Clubes de Futebol. Desde 2015,
                nosso propósito é revolucionar a gestão de clubes através da tecnologia e inovação.
              </p>
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Agende uma demonstração
              </button>
            </div>
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://beatscode.com/wp-content/uploads/2022/06/MAN.png"
                alt="BeatsCode"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="section-kicker text-center">Vantagens</p>
            <h2 className="section-title text-ink text-center mb-4">
              Coloque seu clube em outro patamar
            </h2>
            <p className="text-center text-muted mb-14 max-w-xl mx-auto">
              Principais vantagens da tecnologia BeatsCode
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="border-t border-primary/30 pt-6 h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.title} className="w-14 h-14 object-contain mb-4" />
                  <h3 className="font-display font-bold text-ink mb-3 text-lg">{a.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="section-kicker">Nosso jeito</p>
              <h2 className="section-title text-white mb-6">
                Pessoas e tecnologia, juntas, para o máximo desempenho
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">
                Com trabalho árduo e dedicação do nosso time, buscamos desenvolver soluções otimizadas e
                inovadoras, colocando as pessoas alinhadas às tecnologias, auxiliando os clubes a
                possibilitar novos comportamentos de seus colaboradores, diretores, comissões técnicas e
                atletas — com confiabilidade e excelência.
              </p>
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Agende uma demonstração
              </button>
            </Reveal>
            <Reveal delay={100}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://beatscode.com/wp-content/uploads/2022/06/SOBRE-PESSOAS-E-TEC3-copy.png"
                alt="Pessoas e tecnologia"
                className="w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Partners />

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
