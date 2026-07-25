'use client'

import Link from 'next/link'
import Reveal from '@/components/shared/Reveal'
import { solutionModules } from '@/lib/modules'

export default function ModulesSection() {
  return (
    <section className="py-24 md:py-28 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,166,81,0.12),_transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="section-kicker">Módulos da plataforma</p>
            <h2 className="section-title text-white mb-4">
              Quatro pilares para o departamento de futebol
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Conheça cada módulo e veja em detalhe como a BeatsCode organiza a rotina do seu clube.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24 md:space-y-28">
          {solutionModules.map((mod, i) => {
            const imageFirst = i % 2 === 0
            return (
              <div
                key={mod.slug}
                id={mod.anchor}
                className="grid md:grid-cols-2 gap-10 md:gap-14 items-center scroll-mt-28"
              >
                <Reveal className={imageFirst ? '' : 'md:order-2'}>
                  <div className="flex min-h-[180px] items-center justify-center md:min-h-[220px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mod.imgNegativo}
                      alt={mod.title}
                      className="w-full max-w-md object-contain mix-blend-lighten"
                    />
                  </div>
                </Reveal>

                <Reveal delay={80} className={imageFirst ? '' : 'md:order-1'}>
                  <h3
                    className="font-display text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: mod.accent }}
                  >
                    {mod.title}
                  </h3>
                  <p className="text-white/65 text-base md:text-lg leading-relaxed mb-6">
                    {mod.intro}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                    {mod.featureLabels.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-white/85 text-sm md:text-base"
                      >
                        <span
                          className="w-1.5 h-1.5 flex-shrink-0"
                          style={{ backgroundColor: mod.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/solucoes/${mod.slug}`}
                    className={`inline-flex items-center justify-center font-semibold text-base px-7 py-3.5 transition-opacity hover:opacity-90 ${
                      mod.accent === '#b8d100' ? 'text-ink' : 'text-white'
                    }`}
                    style={{ backgroundColor: mod.accent }}
                  >
                    Ver mais
                  </Link>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
