import type { Metadata } from 'next'
import DemoModal from '@/components/shared/DemoModal'
import BeatscodeClient from './BeatscodeClient'

export const metadata: Metadata = {
  title: 'BeatsCode',
  description: 'A BeatsCode é uma sportech referência no cenário nacional, focada no desenvolvimento de soluções para Gestão Técnica de Clubes de Futebol.',
}

export default function BeatscodeePage() {
  return <BeatscodeClient />
}
