'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { icon: 'https://beatscode.com/wp-content/uploads/2022/07/BEATSCODE-ICONES-FUNDO_SOBRE-SOLUCOES-CLUBES-150x150.png', value: 60, label: 'Clubes', prefix: '' },
  { icon: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-ICONES-FUNDO_HOME-TROFEU-150x150.png', value: 350, label: 'Troféus', prefix: '' },
  { icon: 'https://beatscode.com/wp-content/uploads/2022/07/BEATSCODE-ICONES-FUNDO_HOME-USUARIOS-150x150.png', value: 5000, label: 'Usuários ativos', prefix: '+' },
  { icon: 'https://beatscode.com/wp-content/uploads/2022/10/BEATSCODE-ICONES-FUNDO_HOME-COMPETICOES-150x150.png', value: 800, label: 'Competições gerenciadas', prefix: '+' },
  { icon: 'https://beatscode.com/wp-content/uploads/2022/10/BEATSCODE-ICONES-FUNDO_HOME-JOGOS-150x150.png', value: 15000, label: 'Jogos gerenciados', prefix: '+' },
  { icon: 'https://beatscode.com/wp-content/uploads/2022/10/BEATSCODE-ICONES-FUNDO_HOME-LOGISTICA-150x150.png', value: 10000, label: 'Logísticas planejadas', prefix: '+' },
  { icon: 'https://beatscode.com/wp-content/uploads/2022/10/BEATSCODE-ICONES-FUNDO_HOME-CONTRATOS-150x150.png', value: 3000, label: 'Contratos gerenciados', prefix: '+' },
  { icon: 'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-ICONES-FUNDO_HOME-PRODUTIVIDADE-MONITORADA-150x150.png', value: 20000, label: 'Produtividades monitoradas', prefix: '+' },
]

function Counter({ value, prefix }: { value: number; prefix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const inc = value / steps
        let current = 0
        const timer = setInterval(() => {
          current += inc
          if (current >= value) { setCount(value); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{prefix}{count.toLocaleString('pt-BR')}</span>
}

export default function Stats() {
  return (
    <section className="bg-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white mb-12">Nossos Números</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <img src={stat.icon} alt={stat.label} className="w-16 h-16 object-contain mx-auto mb-4" />
              <p className="text-3xl font-black text-primary mb-2">
                <Counter value={stat.value} prefix={stat.prefix} />
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-xs mt-8">Dados referentes às categorias de base e profissional.</p>
      </div>
    </section>
  )
}
