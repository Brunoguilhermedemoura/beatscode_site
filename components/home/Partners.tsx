import Reveal from '@/components/shared/Reveal'

const partners = [
  { img: 'https://beatscode.com/wp-content/uploads/2022/06/inovativa_brasil-bco-1024x518.png', name: 'Inovativa Brasil' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/06/sinapse-inovacao-b.png', name: 'Sinapse Inovação' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/06/capital-empreendedor-b.png', name: 'Capital Empreendedor' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/10/sc-global.png', name: 'SC Global' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/06/Logo-Startup-SC-b.png', name: 'Startup SC' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/02/pollen2.png', name: 'Pollen' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/06/unochapeco-b.png', name: 'Unochapecó' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/06/certi-b.png', name: 'Certi' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/06/fapesc-b.png', name: 'FAPESC' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/06/inctech-bco-1024x1024.png', name: 'Inctech' },
  { img: 'https://beatscode.com/wp-content/uploads/2022/10/sebrae1.png', name: 'Sebrae' },
]

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-dark-2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.25em] text-white/40 mb-10 font-medium">
            Parceiros e premiações
          </p>
        </Reveal>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.name}
                className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert opacity-45 hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
