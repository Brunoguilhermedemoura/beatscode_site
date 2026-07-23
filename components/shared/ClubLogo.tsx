import { Club } from '@/lib/clubs'

function initials(name: string) {
  return name
    .replace(/^(EC|SC|CR|Clube)\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function ClubLogo({
  club,
  className = 'h-14',
}: {
  club: Club
  className?: string
}) {
  if (club.img) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={club.img} alt={club.name} className={`w-auto object-contain ${className}`} />
    )
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-dark text-white font-display font-bold text-xs tracking-wide ${className} aspect-square px-1`}
      title={club.name}
    >
      {initials(club.name)}
    </span>
  )
}
