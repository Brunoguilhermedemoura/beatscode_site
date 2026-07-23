'use client'

import { useState } from 'react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', club: '', role: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const message = [
        'Solicitação de demonstração',
        form.club ? `Clube: ${form.club}` : null,
        form.role ? `Função: ${form.role}` : null,
      ]
        .filter(Boolean)
        .join('\n')

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.club,
          message,
        }),
      })
      if (!res.ok) throw new Error('fail')
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-md w-full p-8 relative shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-ink transition-colors"
          aria-label="Fechar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Solicitação enviada!</h3>
            <p className="text-muted">Nossa equipe entrará em contato em breve.</p>
            <button onClick={onClose} className="btn-primary mt-6">
              Fechar
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-bold mb-1">Solicitar demonstração</h2>
            <p className="text-muted text-sm mb-6">Preencha e nossa equipe entra em contato.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                placeholder="Nome completo"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-field"
              />
              <input
                required
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-field"
              />
              <input
                required
                placeholder="Telefone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="input-field"
              />
              <input
                placeholder="Qual clube?"
                value={form.club}
                onChange={(e) => setForm({ ...form, club: e.target.value })}
                className="input-field"
              />
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="input-field text-muted"
              >
                <option value="">Qual sua função?</option>
                <option>Supervisor de Futebol</option>
                <option>Diretor de Futebol</option>
                <option>Gerente de Futebol</option>
                <option>Coordenador de Saúde &amp; Desempenho</option>
                <option>Outro Profissional do Futebol</option>
              </select>
              {error && <p className="text-red-600 text-sm">Erro ao enviar. Tente novamente.</p>}
              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? 'Enviando...' : 'Solicitar demonstração'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
