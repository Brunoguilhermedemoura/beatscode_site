/**
 * Importa notícias de data/noticias.json para o Supabase.
 * Uso: node scripts/seed-noticias.js
 * (Antes: npm run fetch:noticias)
 */
const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local')
  if (!fs.existsSync(envPath)) throw new Error('.env.local não encontrado')
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const i = trimmed.indexOf('=')
    if (i === -1) continue
    const key = trimmed.slice(0, i).trim()
    let val = trimmed.slice(i + 1).trim()
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1)
    }
    if (!process.env[key]) process.env[key] = val
  }
}

async function main() {
  loadEnv()
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key || url.includes('seu-projeto') || key.includes('sua-')) {
    throw new Error('Configure as chaves reais do Supabase no .env.local')
  }

  const dataPath = path.join(__dirname, '..', 'data', 'noticias.json')
  if (!fs.existsSync(dataPath)) {
    throw new Error('Rode antes: npm run fetch:noticias')
  }

  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8')).map((p) => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    content: p.content,
    cover_image: p.cover_image,
    category: p.category,
    published: true,
    created_at: p.created_at,
    updated_at: p.updated_at,
  }))

  console.log(`Enviando ${posts.length} notícias para o Supabase...`)
  const supabase = createClient(url, key)
  let ok = 0
  let fail = 0

  for (const post of posts) {
    const { error } = await supabase.from('posts').upsert(post, { onConflict: 'slug' })
    if (error) {
      fail += 1
      console.error(`Erro em "${post.slug}":`, error.message)
    } else {
      ok += 1
      console.log(`OK ${post.title}`)
    }
  }

  console.log(`\nConcluído: ${ok} ok, ${fail} erros.`)
}

main().catch((err) => {
  console.error(err.message || err)
  process.exit(1)
})
