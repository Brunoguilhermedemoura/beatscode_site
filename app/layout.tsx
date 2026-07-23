import type { Metadata } from 'next'
import './globals.css'
import { SessionProvider } from '@/components/shared/SessionProvider'

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
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
