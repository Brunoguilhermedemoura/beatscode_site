'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'beatscode-cookie-consent'

type ConsentValue = 'accepted' | 'denied' | 'custom'

type Preferences = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

const defaultPreferences: Preferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const save = (value: ConsentValue, prefs: Preferences = preferences) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          value,
          preferences: prefs,
          updatedAt: new Date().toISOString(),
        })
      )
    } catch {
      // ignore storage errors
    }
    setVisible(false)
  }

  const acceptAll = () => {
    const prefs = { necessary: true as const, analytics: true, marketing: true }
    setPreferences(prefs)
    save('accepted', prefs)
  }

  const denyAll = () => {
    const prefs = { necessary: true as const, analytics: false, marketing: false }
    setPreferences(prefs)
    save('denied', prefs)
  }

  const savePreferences = () => {
    save('custom', preferences)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-dark/70 p-4 backdrop-blur-[2px]">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl md:p-8"
      >
        <button
          type="button"
          onClick={denyAll}
          aria-label="Fechar"
          className="absolute right-4 top-4 text-ink/50 transition-colors hover:text-ink"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2
          id="cookie-consent-title"
          className="pr-8 text-center font-display text-xl font-bold text-ink md:text-2xl"
        >
          Gerenciar Consentimento de Cookies
        </h2>

        <p className="mt-4 text-center text-sm leading-relaxed text-muted md:text-base">
          Para fornecer as melhores experiências, usamos tecnologias como cookies para armazenar e/ou
          acessar informações do dispositivo. O consentimento para essas tecnologias nos permitirá
          processar dados como comportamento de navegação ou IDs únicos neste site. Não consentir ou
          retirar o consentimento pode afetar negativamente certos recursos e funções.
        </p>

        {showPreferences && (
          <div className="mt-6 space-y-3 border-t border-black/5 pt-5 text-left">
            <label className="flex items-start justify-between gap-4 rounded-lg bg-surface px-4 py-3">
              <span>
                <span className="block font-semibold text-ink">Necessários</span>
                <span className="mt-1 block text-sm text-muted">
                  Essenciais para o funcionamento do site. Sempre ativos.
                </span>
              </span>
              <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-primary" />
            </label>

            <label className="flex cursor-pointer items-start justify-between gap-4 rounded-lg bg-surface px-4 py-3">
              <span>
                <span className="block font-semibold text-ink">Analíticos</span>
                <span className="mt-1 block text-sm text-muted">
                  Ajudam a entender como o site é usado para melhorar a experiência.
                </span>
              </span>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                }
                className="mt-1 h-4 w-4 accent-primary"
              />
            </label>

            <label className="flex cursor-pointer items-start justify-between gap-4 rounded-lg bg-surface px-4 py-3">
              <span>
                <span className="block font-semibold text-ink">Marketing</span>
                <span className="mt-1 block text-sm text-muted">
                  Usados para medir campanhas e personalizar comunicações.
                </span>
              </span>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                }
                className="mt-1 h-4 w-4 accent-primary"
              />
            </label>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-lg bg-[#1a2744] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#141e33]"
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={denyAll}
            className="rounded-lg bg-[#eef1f4] px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#e4e8ed]"
          >
            Negar
          </button>
          {showPreferences ? (
            <button
              type="button"
              onClick={savePreferences}
              className="rounded-lg bg-[#eef1f4] px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#e4e8ed]"
            >
              Salvar preferências
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="rounded-lg bg-[#eef1f4] px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#e4e8ed]"
            >
              Ver preferências
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link
            href="/politica-de-privacidade"
            className="text-[#3a4a63] underline underline-offset-2 hover:text-ink"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/politica-de-privacidade"
            className="text-[#3a4a63] underline underline-offset-2 hover:text-ink"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  )
}
