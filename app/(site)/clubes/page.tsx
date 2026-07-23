import type { Metadata } from 'next'
import ClubsSection from '@/components/home/ClubsSection'

export const metadata: Metadata = {
  title: 'Clubes',
  description: 'Conheça os clubes que confiam na BeatsCode para transformar a gestão do futebol.',
}

export default function ClubesPage() {
  return (
    <>
      <section className="bg-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Clubes</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Quem entende que o futebol vai muito além do campo, já está pronto para o futuro com a BeatsCode!
          </p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça nossos cases de peso e clientes que se destacam em todas as séries do futebol brasileiro, fazendo da tecnologia uma ferramenta valiosa para levar resultados dentro e fora de campo.
          </p>
        </div>
      </section>
      <ClubsSection />
    </>
  )
}
