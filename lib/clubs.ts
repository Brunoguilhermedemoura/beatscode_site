export type Club = {
  name: string
  href?: string | null
  img?: string | null
}

const WP = 'https://beatscode.com/wp-content/uploads'

/** Lista alinhada à planilha oficial de clientes BeatsCode */
export const clubs: Club[] = [
  { name: 'América MG', img: `${WP}/2023/07/padrao_clubes_0028_America.png`, href: 'https://www.americafc.com.br' },
  { name: 'Apafut', img: `${WP}/2023/07/padrao_clubes_0027_apafut.png`, href: 'https://www.apafut.com.br' },
  { name: 'Aparecidense', img: `${WP}/2025/02/05.png`, href: 'https://aparecidense.com.br' },
  { name: 'Athletic Club', img: `${WP}/2023/07/padrao_clubes_0026_Athletic_Club.png`, href: 'https://athleticclub.com.br' },
  { name: 'Atlântico Futsal', img: '/clubs/atlantico-futsal.png', href: 'https://www.atlanticofutsal.com.br' },
  { name: 'Atlético Mineiro', img: `${WP}/2023/07/padrao_clubes_0025_Atletico-Mineiro.png`, href: 'https://www.atletico.com.br' },
  { name: 'Avaí', img: `${WP}/2023/07/padrao_clubes_0024_avai-fc-logo-escudo.png`, href: 'https://avai.com.br' },
  { name: 'Azuriz', img: `${WP}/2023/07/padrao_clubes_0023_Azuriz.png`, href: 'https://azuriz.com.br' },
  { name: 'Bahia', img: `${WP}/2023/07/padrao_clubes_0018_e-c-bahia.png`, href: 'https://www.esporteclubebahia.com.br' },
  { name: 'Boston City FC Brasil', img: `${WP}/2023/07/padrao_clubes_0022_boston-city-fc.png`, href: 'https://bostoncityfc.com.br' },
  { name: 'Ceará SC', img: `${WP}/2025/02/logo_ceara-1.png`, href: 'https://cearasc.com' },
  { name: 'Chapecoense', img: `${WP}/2023/07/padrao_clubes_0017_Chapecoense.png`, href: 'https://chapecoense.com' },
  { name: 'Coritiba', img: `${WP}/2023/07/logo-coritiba-4096.png`, href: 'https://www.coritiba.com.br' },
  { name: 'Cruzeiro', img: `${WP}/2023/07/padrao_clubes_0010_-cruzeiro.png`, href: 'https://cruzeiro.com.br' },
  { name: 'Cuiabá EC', img: `${WP}/2023/07/padrao_clubes_0019_CuiabaEC.png`, href: 'https://cuiabaesporteclube.com.br' },
  { name: 'EC Noroeste', img: '/clubs/noroeste.png', href: 'https://www.noroeste.com.br' },
  { name: 'Ferroviária', img: '/clubs/ferroviaria.png', href: 'https://ferroviariasaf.com' },
  { name: 'Figueirense', img: '/clubs/figueirense.png', href: 'https://figueirense.com.br' },
  { name: 'Flamengo', img: `${WP}/2023/07/padrao_clubes_0014_flamengo.png`, href: 'https://www.flamengo.com.br' },
  { name: 'Foothub', img: '/clubs/foothub.png', href: 'https://foothub.com.br' },
  { name: 'Guarani FC', img: `${WP}/2024/05/images.png`, href: 'https://guaranifc.com.br' },
  { name: 'i9 Futebol Clube Academy', img: '/clubs/i9.png', href: 'https://www.instagram.com/i9futebolclube/' },
  { name: 'IAPE Futebol Clube', img: '/clubs/iape.png', href: 'https://www.iapefc.com.br' },
  { name: 'Ibrachina FC', img: `${WP}/2023/07/padrao_clubes_0012_IBRACHINA.png`, href: 'https://ibrachinafc.com.br' },
  { name: 'Sport Club Internacional', img: `${WP}/2023/07/padrao_clubes_0011_Internacional.png`, href: 'https://internacional.com.br' },
  { name: 'EC Juventude', img: `${WP}/2025/02/02.png`, href: 'https://juventude.com.br' },
  { name: 'Manauara EC', img: '/clubs/manauara.png', href: 'https://manauaraec.com.br' },
  { name: 'Marcílio Dias', img: `${WP}/2023/07/padrao_clubes_0009_Nautico-MarcIlio-Dias.png`, href: 'https://marciliodias.com.br' },
  { name: 'Meu Clube - BRA', img: '/clubs/meu-clube.png', href: '/contato' },
  { name: 'Clube Náutico Capibaribe', img: `${WP}/2025/02/03.png`, href: 'https://nautico-pe.com.br' },
  { name: 'Novorizontino', img: `${WP}/2023/07/padrao_clubes_0007_Novorizontino.png`, href: 'https://gremionovorizontino.com.br' },
  { name: 'Palmeiras', img: `${WP}/2023/07/padrao_clubes_0006_Palmeiras.png`, href: 'https://www.palmeiras.com.br' },
  { name: 'Paysandu', img: `${WP}/2025/02/logo_paysandu-1.png`, href: 'https://paysandu.com.br' },
  { name: 'Pinda FC', img: `${WP}/2025/02/04.png`, href: 'https://pindafc.com.br' },
  { name: 'Primavera AC', img: `${WP}/2024/05/download-2.png`, href: 'https://www.instagram.com/ecprimavera/' },
  { name: 'Real Soccer', href: 'https://www.instagram.com/realsoccerbrasil/' },
  { name: 'Santa Cruz FC', img: '/clubs/santa-cruz.png', href: 'https://santacruzpe.com.br' },
  { name: 'Santos FC', img: `${WP}/2023/07/padrao_clubes_0004_Santos.png`, href: 'https://www.santosfc.com.br' },
  { name: 'São Paulo FC', img: `${WP}/2025/02/01.png`, href: 'https://www.saopaulofc.net' },
  { name: 'Sport Club do Recife', img: `${WP}/2023/07/padrao_clubes_0002_Sportrecife.png`, href: 'https://www.sportrecife.com.br' },
  { name: 'Uberlândia EC', img: '/clubs/uberlandia.png', href: 'https://uberlandiaesporte.com.br' },
  { name: 'CR Vasco da Gama', img: `${WP}/2023/07/padrao_clubes_0001_vasco.png`, href: 'https://www.vasco.com.br' },
  { name: 'Ypiranga FC', img: `${WP}/2025/02/Ypiranga_Futebol_Clube.png`, href: 'https://www.yfc.com.br' },
]

export const LOGO_URL = `${WP}/2022/02/beatscode-logo-3-300x102.png`
export const PLATFORM_IMG = `${WP}/2022/10/HOME-IMG1.png`
