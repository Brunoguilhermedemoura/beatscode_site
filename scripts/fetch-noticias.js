/**
 * Baixa notícias do WordPress e salva em data/noticias.json
 * Uso: node scripts/fetch-noticias.js
 */
const fs = require('fs')
const path = require('path')

function decodeHtml(str = '') {
  return str
    .replace(/&#8211;/g, '—')
    .replace(/&#8212;/g, '—')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
}

function stripTags(html = '') {
  return decodeHtml(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
}

async function fetchAllPosts() {
  // Certificado SSL do domínio antigo pode falhar em alguns ambientes
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  const all = []
  let page = 1
  while (true) {
    const url = `https://beatscode.com/wp-json/wp/v2/posts?per_page=20&page=${page}&_embed=1`
    const res = await fetch(url)
    if (!res.ok) {
      if (page > 1) break
      throw new Error(`Falha ao buscar posts: ${res.status}`)
    }
    const batch = await res.json()
    if (!Array.isArray(batch) || batch.length === 0) break
    all.push(...batch)
    const totalPages = Number(res.headers.get('x-wp-totalpages') || 1)
    if (page >= totalPages) break
    page += 1
  }
  return all
}

function mapPost(p, index) {
  const img = p._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
  const cats =
    p._embedded?.['wp:term']?.[0]
      ?.map((c) => c.name)
      .filter((n) => n && n !== 'Uncategorized') || []

  return {
    id: `wp-${p.id}`,
    title: decodeHtml(p.title?.rendered || ''),
    slug: p.slug,
    excerpt: stripTags(p.excerpt?.rendered || '').slice(0, 280),
    content: p.content?.rendered || '',
    cover_image: img,
    category: cats[0] || 'Notícias',
    published: true,
    created_at: p.date,
    updated_at: p.modified,
    _order: index,
  }
}

async function main() {
  console.log('Buscando notícias em https://beatscode.com/noticias/ ...')
  const wpPosts = await fetchAllPosts()
  const posts = wpPosts.map(mapPost)
  const dir = path.join(__dirname, '..', 'data')
  fs.mkdirSync(dir, { recursive: true })
  const outPath = path.join(dir, 'noticias.json')
  fs.writeFileSync(outPath, JSON.stringify(posts, null, 2), 'utf8')
  console.log(`Salvas ${posts.length} notícias em data/noticias.json`)
  posts.forEach((p) => console.log(' -', p.title))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
