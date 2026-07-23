# BeatsCode_site

Recriação completa do site [beatscode.com](https://beatscode.com) em **Next.js 14** com TypeScript, Tailwind CSS, Supabase e painel administrativo.

---

## Stack

| Tecnologia | Uso |
|---|---|
| Next.js 14 (App Router) | Framework principal |
| TypeScript | Tipagem |
| Tailwind CSS | Estilização |
| Supabase | Banco de dados (posts + contatos) |
| NextAuth.js | Autenticação do painel admin |
| Netlify | Hospedagem |

---

## Páginas

| URL | Descrição |
|---|---|
| `/` | Home |
| `/beatscode` | Sobre a empresa |
| `/solucoes` | Módulos da plataforma |
| `/clubes` | Clubes parceiros |
| `/noticias` | Listagem do blog |
| `/noticias/[slug]` | Post individual |
| `/contato` | Formulário de contato |
| `/admin/login` | Login do painel admin |
| `/admin/dashboard` | Dashboard admin |
| `/admin/noticias` | Gerenciar posts |
| `/admin/noticias/novo` | Criar novo post |
| `/admin/noticias/[id]` | Editar post |
| `/admin/mensagens` | Ver mensagens de contato |

---

## Como rodar localmente

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar o Supabase

1. Crie uma conta gratuita em [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Vá em **SQL Editor** e execute o conteúdo de `lib/supabase-schema.sql`
4. Copie as credenciais em **Project Settings → API**

### 3. Configurar variáveis de ambiente

```bash
cp .env.local.example .env.local
```

Edite o `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key

# NextAuth
NEXTAUTH_SECRET=gere-com-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000

# Admin (defina email e senha do painel admin)
ADMIN_EMAIL=admin@beatscode.com
ADMIN_PASSWORD=SuaSenhaSegura123!
```

> **Gerar NEXTAUTH_SECRET:** `openssl rand -base64 32`

### 4. Rodar

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Deploy no Netlify

### 1. Instalar Netlify plugin

```bash
npm install @netlify/plugin-nextjs --save-dev
```

### 2. Subir o código no GitHub

```bash
git init
git add .
git commit -m "Initial commit - BeatsCode Next.js"
git remote add origin https://github.com/seu-usuario/beatscode-nextjs.git
git push -u origin main
```

### 3. Criar site no Netlify

1. Acesse [netlify.com](https://netlify.com) → **Add new site → Import an existing project**
2. Selecione o repositório GitHub
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

### 4. Configurar variáveis de ambiente no Netlify

Em **Site settings → Environment variables**, adicione:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXTAUTH_SECRET
NEXTAUTH_URL=https://seu-site.netlify.app
ADMIN_EMAIL
ADMIN_PASSWORD
```

---

## Painel Administrativo

Acesse `/admin/login` com as credenciais definidas em `ADMIN_EMAIL` e `ADMIN_PASSWORD`.

### Criar/editar posts
- Suporte a HTML no conteúdo
- Slug gerado automaticamente a partir do título
- Upload de imagem por URL
- Controle de status: Publicado / Rascunho
- Categorias: Notícias, Gestão, Tecnologia, Base, Saúde, Comunicação, Parceiros

### Ver mensagens de contato
Todas as mensagens enviadas pelo formulário ficam salvas em `/admin/mensagens`.

---

## Estrutura do projeto

```
beatscode-nextjs/
├── app/
│   ├── (site)/          # Páginas públicas (com Header+Footer)
│   │   ├── layout.tsx
│   │   ├── page.tsx     # Home
│   │   ├── beatscode/
│   │   ├── solucoes/
│   │   ├── clubes/
│   │   ├── noticias/
│   │   │   └── [slug]/
│   │   └── contato/
│   ├── admin/           # Painel administrativo
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── noticias/
│   │   └── mensagens/
│   └── api/             # API Routes
│       ├── auth/[...nextauth]/
│       ├── posts/[id]/
│       └── contact/
├── components/
│   ├── layout/          # Header, Footer
│   ├── home/            # Seções da home
│   ├── admin/           # PostForm
│   └── shared/          # DemoModal, SessionProvider
├── lib/
│   ├── supabase.ts
│   └── supabase-schema.sql
└── types/
    └── index.ts
```

---

## Personalizações comuns

### Alterar números estatísticos
Edite `components/home/Stats.tsx` — array `stats`.

### Atualizar lista de clubes
Edite `components/home/ClubsSection.tsx` — array `clubs`.

### Alterar troféus
Edite `components/home/TrophyRoom.tsx` — array `trophies`.

### Atualizar parceiros
Edite `components/home/Partners.tsx` — array `partners`.

### Alterar dados de contato
Edite `components/layout/Footer.tsx` e `app/(site)/contato/page.tsx`.

---

## Licença

Propriedade de BeatsCode. Todos os direitos reservados.
