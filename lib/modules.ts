export type ModuleFeature = {
  title: string
  body: string
}

export type SolutionModule = {
  slug: string
  /** âncora na listagem /solucoes */
  anchor: string
  title: string
  shortTitle: string
  intro: string
  features: ModuleFeature[]
  featureLabels: string[]
  accent: string
  icon: 'admin' | 'technical' | 'health' | 'comms'
  /** Logo para fundo escuro */
  imgNegativo: string
  /** Logo colorido para fundo claro */
  imgColor: string
}

export const solutionModules: SolutionModule[] = [
  {
    slug: 'gestao-administrativa',
    anchor: 'administrativa',
    title: 'Gestão Administrativa',
    shortTitle: 'Administrativa',
    accent: '#2b3a8f',
    icon: 'admin',
    imgNegativo:
      'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_ADM-copy.png',
    imgColor:
      'https://beatscode.com/wp-content/uploads/2022/02/BEATSCODE-MODULOS_ADM-1024x349.png',
    intro:
      'Tenha uma visão geral do cadastro de pessoas, contratos e produtividades de atletas e comissão técnica, aprovação de documentos, relatos e registros de serviço social, organização de alojamentos e refeitórios, e históricos de atletas monitorados pelo setor de mercado do clube.',
    featureLabels: [
      'Cadastro de pessoas',
      'Contratos (Produtividade)',
      'Logística de Jogos',
      'Alojamentos/Refeitórios',
      'Aprovação Documentos',
      'Serviço Social',
      'Gráficos e Relatórios',
    ],
    features: [
      {
        title: 'Cadastro de pessoas',
        body: 'O módulo de Pessoas permite realizar a gestão de dados de atletas, comissão técnica, dirigentes e staff de apoio do departamento de futebol. É possível organizar dados pessoais, esportivos, dados de familiares e incluir documentos de forma digital, como CPF, RG, passaporte e outras informações no perfil de cada pessoa do clube.',
      },
      {
        title: 'Contratos (Produtividade)',
        body: 'Com a gestão de contratos da plataforma BeatsCode, além de gerenciar os diversos tipos de contratos que um atleta possa ter junto ao clube, desde a formação até as transferências econômicas. Além da gestão de produtividades, como as relativas a quantidades ou percentuais de jogos que participou, é possível fazer a gestão de bônus e metas de cada atleta ou membro da comissão técnica, reajustes salariais, pagamento de comissões, opções de compra e vencimento do contrato, minimizando o risco de inconvenientes contratuais de atletas ou comissão técnica.',
      },
      {
        title: 'Alojamentos/Refeitórios',
        body: 'Com o módulo de Alojamento e Refeitórios, seu clube poderá fazer o controle de atletas alojados, total de quartos ocupados e disponíveis, e mapear os atletas que dividem quartos. Permite, ainda, fazer o vínculo do atleta por refeitório, com o objetivo identificar quantas pessoas vão utilizar o refeitório no dia, permitindo a emissão de um relatório para controlar a entrada mediante assinatura. E ainda, organiza o histórico de ocorrências nos ambientes do clube, com datas, turnos de monitores e atletas envolvidos.',
      },
      {
        title: 'Aprovação Documentos (Fase de Validação)',
        body: 'Neste módulo é possível cadastrar e organizar documentos que precisam ser analisados e aprovados por pessoas do clube. Ao incluir um novo documento, é possível selecionar as pessoas que devem revisá-lo e aprová-lo, e estas pessoas irão receber uma notificação no APP mobile da BeatsCode para darem seu parecer sobre o documento e, posteriormente dar encaminhamentos internos, como enviar ao presidente para fazer a aprovação final.',
      },
      {
        title: 'Serviço Social',
        body: 'Possibilita o registro e histórico de atendimento, orientação, intervenção, atividade coletiva e checklist de ações vinculadas aos atendimentos de atletas e seus familiares. Desta forma, todas as questões relacionadas à educação, moradia, viagens, saúde e entre outros temas, estarão registradas na plataforma. Também é possível realizar a gestão de passagens obrigatórias, para os atletas visitarem seus familiares durante a temporada.',
      },
      {
        title: 'Logística de Jogos',
        body: 'A plataforma BeatsCode entrega facilidade ao seu clube através da possibilidade de organização de todo o planejamento relacionado a logística de viagens e concentrações, a programação completa, o rooming list, a lista de passageiros, convidados, entre outros dados. Outra funcionalidade disponível neste módulo é que o seu clube pode realizar o orçamento logístico da temporada, identificando as despesas previstas e realizadas no decorrer da temporada.',
      },
      {
        title: 'Gráficos e Relatórios',
        body: 'Todos os módulos da plataforma possuem seus respectivos gráficos e relatórios, porém algumas informações ficam concentradas aqui neste módulo. Também é possível que o clube solicite a personalização de relatórios específicos, para a extração e dados conforme a visão do gestor de cada setor dentro do departamento de futebol.',
      },
    ],
  },
  {
    slug: 'gestao-tecnica',
    anchor: 'tecnica',
    title: 'Gestão Técnica',
    shortTitle: 'Técnica',
    accent: '#b8d100',
    icon: 'technical',
    imgNegativo:
      'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_TECNICA-copy.png',
    imgColor:
      'https://beatscode.com/wp-content/uploads/2022/02/BEATSCODE-MODULOS_TECNICA-1024x349.png',
    intro:
      'Organize a gestão de competições, logística de jogos, treinamentos, programação semanal de treinamentos, reuniões técnicas, planejamento e controle de avaliações do departamento de captação de atletas de uma forma simples e prática.',
    featureLabels: [
      'Programação semanal',
      'Análise de mercado',
      'Captação de talentos',
      'Treinamento',
      'Competições',
    ],
    features: [
      {
        title: 'Programação semanal',
        body: 'Permite que o clube possa organizar e notificar via aplicativo todos os colaboradores do departamento de futebol, relativo a agendas de treinos, reuniões técnicas, agendamentos gerais da categoria e aniversariantes, bem como unificar todos os compromissos individuais e coletivos de todos os setores do departamento de futebol.',
      },
      {
        title: 'Análise de mercado',
        body: 'Permite que o clube realize o cadastro e mapeamento de atletas e treinadores que o clube tenha interesse em realizar uma proposta de contratação, ou ainda, profissionais que são oferecidos ao clube. Nos perfis de profissionais que o clube faz o monitoramento de mercado, é possível cadastrar locais, momentos em que foram monitorados, com suas respectivas características técnicas, táticas, porte físico, entre outros dados para traçar o perfil que melhor se adapte ao clube.',
      },
      {
        title: 'Treinamento',
        body: 'Permite que seja organizada a programação semanal de treinamentos do seu clube. Organiza o plano de treino diário, com o detalhamento de atividades físicas, técnicas e táticas, com o detalhamento de cada atividade, com seus devidos protocolos e exercícios específicos, sendo possível ainda disponibilizar vídeos e imagens, para que os atletas recebam os detalhes do treino do dia. E, é possível responder as percepções internas (Dor, PSE, PSR, etc) com antecedência ao início da programação diária.',
      },
      {
        title: 'Competições',
        body: 'A gestão das competições que o seu clube vai disputar no ano ficou mais fácil! Com a plataforma BeatsCode permite que seu clube faça o controle de fases, inscritos (evita relacionar atleta não regularizado para a competição), jogos, cartões, minutagem, controle de punições, inclusive com o bloqueio nas convocações e escalações, evitando risco de perda de pontos. Possibilita, ainda, a integração de vídeos da análise do adversário, automação da convocação através do aplicativo mobile BeatsCode, histórico de scouts e integração ao módulo de contratos.',
      },
      {
        title: 'Captação de talentos',
        body: 'Com o módulo de captação de talentos, seu clube vai conseguir organizar testes de avaliações para encontrar novos talentos. Com capacidade de agrupar os dados, o histórico de avaliações permite mapear o perfil técnico, tático, físico e comportamental dos atletas. É possível extrair dados estatísticos referentes aos percentuais de aprovação por categoria, posição, indicação, para que o clube possa entender melhor de onde estão vindo os atletas aprovados, para reforçar vínculo com parceiros que indicam os melhores atletas.',
      },
    ],
  },
  {
    slug: 'gestao-saude-e-performance',
    anchor: 'saude',
    title: 'Saúde e Performance',
    shortTitle: 'Saúde & Performance',
    accent: '#00a651',
    icon: 'health',
    imgNegativo:
      'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_SAUDE-copy.png',
    imgColor:
      'https://beatscode.com/wp-content/uploads/2022/02/BEATSCODE-MODULOS_SAUDE-1024x349.png',
    intro:
      'Neste módulo seu clube conseguirá acompanhar a saúde, performance e emocional dos atletas. As informações são extraídas de prontuários médicos, condutas da fisiologia, relatórios da nutrição, psicológicos e pedagógicos, e integração de GPS, assim, seu clube acompanhará as cargas internas e externas de cada atleta.',
    featureLabels: [
      'Fisiologia',
      'Nutrição',
      'Podologia',
      'Psicologia',
      'Prontuários médicos',
      'Fisioterapia',
    ],
    features: [
      {
        title: 'Fisiologia',
        body: 'Este módulo permite que o clube possa organizar os dados relativos à fisiologia dos atletas, desde avaliações (yo-yo test, agilidade, salto horizontal e vertical, entre outros), histórico de antropometria, composição corporal, coleta de percepções de Pré e Pós-Treino (Dor, PSR, PSE, Sono, entre outros), integração de dados GPS para análise de treinos e jogos, bem como o controle de cargas acumuladas com o objetivo de entregar alertas de risco de lesão por overuse.',
      },
      {
        title: 'Nutrição',
        body: 'No módulo de Nutrição, o clube poderá fazer o controle e acompanhamento nutricional dos atletas. Permite que sejam cadastradas as anamneses dos atletas, plano alimentar, atendimentos de acompanhamentos e evolução nutricional, e ainda, cadastrar e controlar as amostra de suplementos para histórico e segurança do clube, em casos de possível contaminação e riscos para os atletas.',
      },
      {
        title: 'Podologia',
        body: 'O módulo de Podologia, possibilita o cadastro de anamneses dos cuidados que os atletas têm com os seus pés. Permitindo diagnosticar, prevenir, e planejar tratamentos para as patologias dos pés, mantendo todos os registros de atendimentos e procedimentos realizados junto ao perfil de cada atleta vinculado ao clube.',
      },
      {
        title: 'Psicologia',
        body: 'Algumas das opções de registros do módulo de Psicologia são o histórico de atendimentos, orientações, intervenções, atividades coletivas e checklist de ações vinculadas aos atendimentos de atletas. Desta forma todas as questões relacionadas ao acompanhamento comportamental e emocional do atleta ficam registradas e vinculadas ao seu perfil, permitindo ao clube ter uma linha do tempo, do comportamento do atleta desde a captação até a profissionalização.',
      },
      {
        title: 'Fisioterapia',
        body: 'O módulo de Fisioterapia possibilita aos fisioterapeutas do clube manter todas as condutas e procedimentos fisioterápicos realizados junto aos atletas em reabilitação, pré-treino, recoveries de pós-jogos e treinos, atualizando junto ao perfil de cada atleta do clube. Ainda é possível realizar avaliações de contratações, pré-temporadas, return to play, entre outras informações coletadas e produzidas pela equipe de fisioterapia.',
      },
      {
        title: 'Prontuários médicos',
        body: 'Mantenha os prontuários médicos atualizados e arquivados em um ambiente seguro e centralizado. Com o módulo de Prontuários Médicos, seu clube poderá manter todos os dados e históricos detalhados de anamneses, diagnósticos, exames, procedimentos e receituários, relatos médicos relativos à evolução dos atletas em reabilitação. Ainda é possível manter o histórico pregresso de lesões e doenças de atletas atualizados, entre outros dados de saúde dos atletas de todas as categorias do clube.',
      },
    ],
  },
  {
    slug: 'gestao-da-comunicacao',
    anchor: 'comunicacao',
    title: 'Gestão da Comunicação',
    shortTitle: 'Comunicação',
    accent: '#e31c23',
    icon: 'comms',
    imgNegativo:
      'https://beatscode.com/wp-content/uploads/2022/12/BEATSCODE-MODULOS-NEGATIVO_COMUNICACAO-copy.png',
    imgColor:
      'https://beatscode.com/wp-content/uploads/2022/02/BEATSCODE-MODULOS_COMUNICACAO-1024x349.png',
    intro:
      'Possibilita que todo o departamento de futebol do clube receba as mesmas informações, de forma dinâmica, através de um aplicativo mobile para Android e iOS. Da mesma maneira, diante de um aplicativo ligado nos televisores do clube, a plataforma entrega notificações, alertas e informações direcionada para todas as pessoas e setores do futebol do seu clube.',
    featureLabels: ['BeatsCore TV', 'Aplicativo'],
    features: [
      {
        title: 'BeatsCore TV',
        body: 'O módulo de TV Indoor, traz de maneira interativa as informações do dia-a-dia do seu clube em aparelhos de TV dispostos nos corredores, vestiários, departamento médico e demais setores do clube. As informações como a programação semanal, calendário de jogos, situação de atletas para jogo (Cartões e DM), aproveitamentos em competições, agendamentos do DM, posição de contratos dos atletas, entre outros dados que o clube necessite compartilhar continuamente com seus profissionais.',
      },
      {
        title: 'Aplicativo',
        body: 'Comunicação integrada, dinâmica e personalizada, otimiza a troca de informações entre todas as pessoas envolvidas nas atividades do departamento de futebol. Através de um aplicativo mobile disponível para Android e iOS, a plataforma permite o acesso às informações do dia a dia para atletas, comissão técnica, dirigentes, agenda de treinos, programação de viagens, scouts de jogos, convocações para jogos, informativos, detalhes de contratos de atletas e comissão técnica, entre e outros dados que cada pessoa do staff do clube necessite ter na palma da sua mão, referente às suas atividades junto ao clube.',
      },
    ],
  },
]

export function getModuleBySlug(slug: string) {
  return solutionModules.find((m) => m.slug === slug)
}
