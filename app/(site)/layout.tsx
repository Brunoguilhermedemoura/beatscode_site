import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppWidget from '@/components/layout/WhatsAppWidget'
import CookieConsent from '@/components/layout/CookieConsent'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppWidget />
      <CookieConsent />
    </>
  )
}
