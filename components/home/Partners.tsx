import Reveal from '@/components/shared/Reveal'
import { partners } from '@/lib/partners'

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-kicker text-center">Ecossistema</p>
          <h2 className="section-title text-ink text-center mb-10 md:mb-12">
            Parceiros e premiações
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-2xl bg-[#f4f5f7] px-4 py-6 md:px-6 md:py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-center w-full h-14 md:h-16"
                  title={p.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-h-full max-w-[140px] w-auto object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
