'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from '@/components/shared/Reveal'

const stats = [
  { value: 60, label: 'Clubes', prefix: '' },
  { value: 350, label: 'Troféus', prefix: '' },
  { value: 5000, label: 'Usuários ativos', prefix: '+' },
  { value: 15000, label: 'Jogos gerenciados', prefix: '+' },
]

function Counter({ value, prefix }: { value: number; prefix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 50
          const inc = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += inc
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString('pt-BR')}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 md:py-24 bg-surface border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-kicker text-center">Nossos números</p>
          <h2 className="section-title text-ink text-center mb-14">Resultados que entram em campo</h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="text-center md:text-left md:border-l md:border-primary/25 md:pl-8 first:md:border-0 first:md:pl-0">
                <p className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">
                  <Counter value={stat.value} prefix={stat.prefix} />
                </p>
                <p className="text-muted text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-muted/70 text-xs mt-10">
          Dados referentes às categorias de base e profissional.
        </p>
      </div>
    </section>
  )
}
