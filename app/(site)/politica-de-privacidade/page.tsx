import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black">Política de Privacidade</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p>A BeatsCode está comprometida em proteger a privacidade e os dados pessoais de seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações.</p>
          <h2>Coleta de Dados</h2>
          <p>Coletamos informações quando você usa nossa plataforma, preenche formulários de contato ou agenda demonstrações. Os dados coletados incluem nome, e-mail, telefone e informações sobre sua organização.</p>
          <h2>Uso dos Dados</h2>
          <p>Utilizamos seus dados para prestar nossos serviços, entrar em contato sobre demonstrações e melhorar nossa plataforma.</p>
          <h2>Proteção de Dados</h2>
          <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
          <h2>Contato</h2>
          <p>Para dúvidas sobre esta política, entre em contato: <a href="mailto:contato@beatscode.com">contato@beatscode.com</a></p>
        </div>
      </section>
    </>
  )
}
