-- Execute este SQL no Supabase SQL Editor para criar as tabelas

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null default '',
  cover_image text,
  category text default 'Notícias',
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

-- Habilitar Row Level Security
alter table posts enable row level security;
alter table contact_messages enable row level security;

-- Permitir leitura pública de posts publicados
create policy "Public read published posts" on posts
  for select using (published = true);

-- Service role tem acesso total (para o admin via API)
create policy "Service role full access posts" on posts
  using (auth.role() = 'service_role');

create policy "Service role full access messages" on contact_messages
  using (auth.role() = 'service_role');

-- Inserção pública em contact_messages
create policy "Public insert contact" on contact_messages
  for insert with check (true);

-- Inserir alguns posts de exemplo
insert into posts (title, slug, excerpt, content, category, published) values
(
  'A importância do treinador e do comando técnico no sucesso dos clubes',
  'a-importancia-do-treinador-e-do-comando-tecnico-no-sucesso-dos-clubes',
  'Em qualquer modalidade esportiva, e especialmente no futebol, o sucesso de um clube é fruto de uma combinação precisa entre talento, gestão e liderança.',
  '<p>Em qualquer modalidade esportiva, e especialmente no futebol, o sucesso de um clube é fruto de uma combinação precisa entre talento, gestão e liderança. Nesse contexto, a figura do treinador e da comissão técnica ocupa um papel absolutamente central — não apenas no desempenho de campo, mas também na construção da identidade do time.</p><h2>Mais do que técnico, um gestor de pessoas</h2><p>O treinador moderno ultrapassa a função tradicional de "comandar o time na beira do campo". Ele é, antes de tudo, um gestor de pessoas. Precisa conhecer profundamente as características de cada atleta, extrair o melhor de grupos heterogêneos e lidar com pressões internas e externas.</p><h2>Tomada de decisão: agilidade baseada em dados</h2><p>Hoje, clubes de ponta entendem que decisões técnicas precisam ser cada vez mais baseadas em informação qualificada. Ferramentas como a BeatsCode surgem como grandes aliadas nesse processo, permitindo que o comando técnico acesse dados confiáveis, avalie cenários e planeje suas ações de forma estratégica.</p>',
  'Gestão',
  true
),
(
  'Gestão de Categorias de Base: o segredo para o futuro dos clubes',
  'gestao-de-categorias-de-base-o-segredo-para-o-futuro-dos-clubes',
  'O sucesso de um clube de futebol não nasce apenas da contratação de estrelas. Cada vez mais, o verdadeiro diferencial está na formação de talentos.',
  '<p>O sucesso de um clube de futebol não nasce apenas da contratação de estrelas. Cada vez mais, o verdadeiro diferencial está na formação de talentos dentro de casa — nas categorias de base, onde futuros campeões são moldados com paciência, método e visão de longo prazo.</p><h2>Por que investir na base?</h2><p>Clubes que apostam na base constroem patrimônio. Além do aspecto financeiro — a valorização de jovens talentos — há um impacto direto na identidade e na cultura do clube. Atletas formados internamente tendem a ter maior identificação com os valores da instituição.</p><h2>Tecnologia como aliada da formação</h2><p>A BeatsCode oferece módulos específicos para a gestão de categorias de base, permitindo acompanhar a evolução de cada atleta desde a captação até a profissionalização. Dados de desempenho, saúde, comportamento e evolução técnica ficam centralizados e acessíveis para toda a comissão técnica.</p>',
  'Base',
  true
),
(
  'Nutrição no Futebol: o segredo por trás da performance em campo',
  'nutricao-no-futebol-o-segredo-por-tras-da-performance-em-campo',
  'Quando o árbitro apita o início do jogo, o que está em disputa vai muito além da bola. Cada passe, cada corrida e cada finalização dependem diretamente da nutrição dos atletas.',
  '<p>Quando o árbitro apita o início do jogo, o que está em disputa vai muito além da bola. Cada passe, cada corrida e cada finalização dependem diretamente da nutrição adequada dos atletas.</p><h2>Nutrição como pilar da performance</h2><p>A nutrição esportiva no futebol vai muito além de "comer bem". Envolve planejamento estratégico de macro e micronutrientes, timing das refeições em relação aos treinos e jogos, hidratação e suplementação personalizada para cada atleta.</p><h2>BeatsCode e a gestão nutricional integrada</h2><p>Com o módulo de Saúde e Performance da BeatsCode, clubes podem registrar e acompanhar os planos nutricionais de cada atleta, integrando essas informações com dados de desempenho físico e médico. Isso permite uma abordagem verdadeiramente holística da performance.</p>',
  'Saúde',
  true
);
