import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Admin | BeatsCode', template: '%s | Admin BeatsCode' },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children
}
