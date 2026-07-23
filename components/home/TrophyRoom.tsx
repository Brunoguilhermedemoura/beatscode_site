const trophies = [
  { img: 'https://beatscode.com/wp-content/uploads/2022/09/5-273x300.webp', label: 'Campeonatos Estaduais', value: 47 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/09/4-273x300.webp', label: 'Brasileirão Série B', value: 3 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/09/6-273x300.webp', label: 'Brasileirão Série A', value: 2 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/09/1-273x300.webp', label: 'Copa do Brasil', value: 2 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/12/supercopa-do-brasil-273x300.png', label: 'Super Copa do Brasil', value: 1 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/12/recopa-logo-273x300.png', label: 'Recopa Sulamericana', value: 1 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/10/teste-55-273x300.png', label: 'Copa Sulamericana', value: 1 },
  { img: 'https://beatscode.com/wp-content/uploads/2022/10/teste22-273x300.png', label: 'Copa Libertadores', value: 1 },
]

export default function TrophyRoom() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="section-title text-white">Sala de troféus</h2>
          <p className="text-gray-400">Soluções que entram em campo para conquistar vitórias!</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
          {trophies.map((t) => (
            <div key={t.label} className="text-center">
              <img src={t.img} alt={t.label} className="w-24 h-28 object-contain mx-auto mb-4" />
              <p className="text-3xl font-black text-primary mb-1">{t.value}</p>
              <p className="text-gray-400 text-sm">{t.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-xs mt-8">Dados considerados apenas para categoria profissional masculina.</p>
      </div>
    </section>
  )
}
