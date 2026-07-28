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

/** Escudo em caixa fixa — todos ocupam o mesmo espaço visual. */
export default function ClubLogo({
  club,
  size = 80,
}: {
  club: Club
  /** Tamanho da caixa em px (largura e altura iguais). */
  size?: number
}) {
  const boxStyle = { width: size, height: size }

  const src = club.logo || club.img

  if (src) {
    return (
      <span
        className="inline-flex items-center justify-center shrink-0"
        style={boxStyle}
        title={club.name}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={club.name}
          className="max-w-full max-h-full w-full h-full object-contain"
        />
      </span>
    )
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-dark text-white font-display font-bold text-sm tracking-wide shrink-0"
      style={boxStyle}
      title={club.name}
    >
      {initials(club.name)}
    </span>
  )
}
