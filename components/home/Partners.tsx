import Reveal from '@/components/shared/Reveal'
import { partners } from '@/lib/partners'

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-surface border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-kicker text-center">Ecossistema</p>
          <h2 className="section-title text-ink text-center mb-12">Parceiros e premiações</h2>
        </Reveal>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.name}
                className="h-10 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
