'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ContactMessage } from '@/types'

export default function MensagensPage() {
  const { status } = useSession()
  const router = useRouter()
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/contact').then(r => r.json()).then(data => {
        setMessages(Array.isArray(data) ? data : [])
        setLoading(false)
      })
    }
  }, [status])

  if (loading || status === 'loading') return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"/>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-dark text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link href="/admin/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            Dashboard
          </Link>
          <span className="text-gray-600">/</span>
          <span>Mensagens de Contato</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-black text-dark mb-8">Mensagens de Contato</h1>

        {messages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">Nenhuma mensagem recebida ainda.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-bold text-dark">{msg.name}</p>
                    {msg.company && <p className="text-sm text-gray-500">{msg.company}</p>}
                  </div>
                  <div className="text-right">
                    <a href={`mailto:${msg.email}`} className="text-primary text-sm font-medium hover:underline">{msg.email}</a>
                    {msg.phone && <p className="text-sm text-gray-500">{msg.phone}</p>}
                    <p className="text-xs text-gray-400 mt-1">{new Date(msg.created_at).toLocaleString('pt-BR')}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm bg-gray-50 rounded-lg p-4 whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
