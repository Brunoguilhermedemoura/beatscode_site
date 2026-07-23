import type { Metadata } from 'next'
import './globals.css'
import { SessionProvider } from '@/components/shared/SessionProvider'

export const metadata: Metadata = {
  title: {
    default: 'BeatsCode | Gestão Técnica de Futebol',
    template: '%s | BeatsCode',
  },
  description: 'Plataforma de gestão técnica inteligente para clubes de futebol, da base à elite do futebol brasileiro.',
  keywords: ['gestão futebol', 'clube futebol', 'tecnologia esporte', 'sportech', 'BeatsCode'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'BeatsCode',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
