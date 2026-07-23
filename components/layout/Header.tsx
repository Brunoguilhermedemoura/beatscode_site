'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOGO_URL } from '@/lib/clubs'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/beatscode', label: 'BeatsCode' },
  { href: '/solucoes', label: 'Soluções' },
  { href: '/clubes', label: 'Clubes' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const solid = scrolled || !isHome || menuOpen

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? 'bg-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="BeatsCode"
              className="h-9 md:h-10 w-auto brightness-0 invert"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href ? 'text-primary-soft' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contato" className="btn-primary text-base py-2.5 px-5">
              Agende uma demo
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-white relative z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-dark border-t border-white/5">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base font-medium py-3 ${
                  pathname === link.href ? 'text-primary-soft' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contato" className="btn-primary text-base w-full text-center mt-3">
              Agende uma demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
