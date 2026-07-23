import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getModuleBySlug, solutionModules } from '@/lib/modules'
import ModuleDetailView from '@/components/solucoes/ModuleDetailView'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return solutionModules.map((m) => ({ slug: m.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const mod = getModuleBySlug(params.slug)
  if (!mod) return { title: 'Módulo' }
  return {
    title: mod.title,
    description: mod.intro,
  }
}

export default function ModuleDetailPage({ params }: Props) {
  const mod = getModuleBySlug(params.slug)
  if (!mod) notFound()

  return <ModuleDetailView mod={mod} />
}
