'use client'
import { useState } from 'react'

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-dark mb-4">Revolucione a gestão do seu clube de futebol!</h2>
            <p className="text-gray-600 mb-6">Preencha o formulário e nossa equipe entrará em contato o mais breve possível.</p>
            <img
              src="https://beatscode.com/wp-content/uploads/2022/07/captura-SITE-BEATSCODE-1.webp"
              alt="BeatsCode plataforma"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Mensagem enviada!</h3>
                <p className="text-gray-600 mt-2">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder="Nome" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
                <input placeholder="Clube / Empresa" value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
                <input required type="email" placeholder="E-mail" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
                <input placeholder="Telefone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
                <textarea required rows={4} placeholder="Mensagem" value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"/>
                {status === 'error' && <p className="text-red-500 text-sm">Erro ao enviar. Tente novamente.</p>}
                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full text-center">
                  {status === 'loading' ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
