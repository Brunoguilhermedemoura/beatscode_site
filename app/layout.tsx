import type { Metadata } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'
import { SessionProvider } from '@/components/shared/SessionProvider'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'BeatsCode | Gestão Técnica Inteligente de Futebol',
    template: '%s | BeatsCode',
  },
  description:
    'Plataforma de gestão técnica inteligente para clubes de futebol, da base à elite do futebol brasileiro.',
  keywords: ['gestão futebol', 'clube futebol', 'tecnologia esporte', 'sportech', 'BeatsCode'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'BeatsCode',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
