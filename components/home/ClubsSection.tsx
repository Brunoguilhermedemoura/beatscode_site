const clubs = [
  { name: 'São Paulo', img: 'https://beatscode.com/wp-content/uploads/2025/02/01.png', href: 'https://saopaulofc.net' },
  { name: 'América', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0028_America.png', href: 'https://www.americafc.com.br' },
  { name: 'APAFUT', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0027_apafut.png', href: 'https://www.instagram.com/apafutoficial/' },
  { name: 'Aparecidense', img: 'https://beatscode.com/wp-content/uploads/2025/02/05.png', href: 'https://aparecidense.com.br' },
  { name: 'Juventude', img: 'https://beatscode.com/wp-content/uploads/2025/02/02.png', href: 'https://juventude.com.br/' },
  { name: 'Atlético Mineiro', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0025_Atletico-Mineiro.png', href: 'https://atletico.com.br/' },
  { name: 'Avaí', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0024_avai-fc-logo-escudo.png', href: 'https://www.avai.com.br/novo/' },
  { name: 'Azuriz', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0023_Azuriz.png', href: 'https://azuriz.com.br' },
  { name: 'Boston City FC', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0022_boston-city-fc.png', href: 'https://bostoncityfc.com/pt_br/' },
  { name: 'Botafogo', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0021_botafogo.png', href: 'https://www.botafogo.com.br/' },
  { name: 'Cuiabá', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0019_CuiabaEC.png', href: 'http://cuiabaesporteclube.com.br/' },
  { name: 'Bahia', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0018_e-c-bahia.png', href: 'https://www.esporteclubebahia.com.br/' },
  { name: 'Chapecoense', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0017_Chapecoense.png', href: 'https://chapecoense.com/' },
  { name: 'Coritiba', img: 'https://beatscode.com/wp-content/uploads/2023/07/logo-coritiba-4096.png', href: 'https://www.coritiba.com.br' },
  { name: 'EC Primavera', img: 'https://beatscode.com/wp-content/uploads/2024/05/download-2.png', href: 'https://ecprimavera.com.br/' },
  { name: 'Flamengo', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0014_flamengo.png', href: 'https://www.flamengo.com.br/' },
  { name: 'IBRACHINA', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0012_IBRACHINA.png', href: 'https://www.instagram.com/ibrachinafc/' },
  { name: 'Internacional', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0011_Internacional.png', href: 'https://internacional.com.br/' },
  { name: 'Cruzeiro', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0010_-cruzeiro.png', href: 'https://www.cruzeiro.com.br' },
  { name: 'Marcelino Dias', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0009_Nautico-MarcIlio-Dias.png', href: 'https://sociomarinheiro.com.br/' },
  { name: 'Novorizontino', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0007_Novorizontino.png', href: 'https://gremionovorizontino.com.br/' },
  { name: 'Palmeiras', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0006_Palmeiras.png', href: 'https://www.palmeiras.com.br/' },
  { name: 'Guarani', img: 'https://beatscode.com/wp-content/uploads/2024/05/images.png', href: 'https://guaranifc.com.br' },
  { name: 'Santos', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0004_Santos.png', href: 'https://www.santosfc.com.br/' },
  { name: 'Sfera', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0003_Sfera.png', href: 'https://sferafc.com.br' },
  { name: 'Sport Recife', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0002_Sportrecife.png', href: 'https://sportrecife.com.br/' },
  { name: 'Vasco', img: 'https://beatscode.com/wp-content/uploads/2023/07/padrao_clubes_0001_vasco.png', href: 'https://vasco.com.br/' },
  { name: 'Ceará', img: 'https://beatscode.com/wp-content/uploads/2025/02/logo_ceara-1.png', href: 'https://www.cearasc.com' },
  { name: 'Ypiranga', img: 'https://beatscode.com/wp-content/uploads/2025/02/Ypiranga_Futebol_Clube.png', href: 'https://www.yfc.com.br' },
  { name: 'Paysandu', img: 'https://beatscode.com/wp-content/uploads/2025/02/logo_paysandu-1.png', href: 'https://www.paysandu.com.br/home' },
  { name: 'Náutico', img: 'https://beatscode.com/wp-content/uploads/2025/02/03.png', href: 'https://nautico-pe.com.br' },
  { name: 'Pinda FC', img: 'https://beatscode.com/wp-content/uploads/2025/02/04.png', href: 'https://pindafc.com.br' },
]

export default function ClubsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-dark mb-4">Clubes que confiam na BeatsCode</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mt-12">
          {clubs.map((club) => (
            <a key={club.name} href={club.href} target="_blank" rel="noopener"
              title={club.name}
              className="flex items-center justify-center p-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110">
              <img src={club.img} alt={club.name} className="w-full h-14 object-contain" />
            </a>
          ))}
          <div className="flex items-center justify-center p-2">
            <img
              src="https://beatscode.com/wp-content/uploads/2023/09/padrao_clubes-SEUCLUBE1-1.png"
              alt="Seu clube aqui"
              className="w-full h-14 object-contain opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
