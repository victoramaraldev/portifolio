import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const linkedin = 'https://www.linkedin.com/in/víctor-amaral'

export const usePortfolioStore = defineStore('portfolio', () => {
  const activeFilter = ref('Todos')
  const filters = ['Todos', 'Vue', 'NestJS', 'TypeScript', 'Firebird']
  const projects = [
    {
      id: 1, slug: 'timely', index: '01', title: 'Timely', category: 'Produto', year: '2025',
      status: 'Beta / Em desenvolvimento',
      summary: 'Plataforma de agendamentos que reúne agenda, disponibilidade, clientes, equipe e indicadores para simplificar a rotina de negócios que trabalham com horários.',
      description: 'Uma plataforma de gestão de agendamentos para organizar clientes, equipe, disponibilidade e indicadores operacionais.',
      tech: ['Vue 3', 'TypeScript', 'Socket.io'], accent: '#c8ff2e', visual: 'finance',
      cover: '/projects/timely-dashboard-thumb.webp',
      images: [
        { src: '/projects/timely-dashboard.png', thumb: '/projects/timely-dashboard-thumb.webp', alt: 'Dashboard do Timely com resumo de agendamentos', caption: 'Dashboard com visão diária e indicadores de agendamentos.' },
        { src: '/projects/timely-agenda.png', thumb: '/projects/timely-agenda-thumb.webp', alt: 'Agenda do Timely com detalhes de um agendamento', caption: 'Agenda visual e detalhes do atendimento em contexto.' },
      ],
      github: 'https://github.com/victoramaraldev/timelyApp', linkedin,
      role: 'Produto, front-end e integração',
      challenge: 'Centralizar a operação de pequenos negócios que trabalham com horários, reduzindo o uso de agendas dispersas e tornando o acompanhamento da equipe mais simples.',
      resultTitle: 'O que já está pronto',
      result: 'O beta já reúne dashboard, agenda mensal, disponibilidade, clientes, membros, relatórios e comunicação associada aos agendamentos. O produto continua em evolução antes da abertura de uma demonstração pública.',
      decision: 'Organizei a experiência em torno da agenda e dos indicadores mais usados, mantendo o estado compartilhado no Pinia e preparando os fluxos para atualizações em tempo real.',
      architecture: ['Interface Vue 3', 'Estado Pinia', 'API e eventos Socket.io', 'Dados operacionais'],
      features: [
        { label: 'Dashboard operacional', icon: '$dashboard' },
        { label: 'Agenda e disponibilidade', icon: '$calendarClock' },
        { label: 'Gestão de clientes e equipe', icon: '$accountGroup' },
        { label: 'Relatórios de desempenho', icon: '$chartLine' },
      ],
    },
    {
      id: 2, slug: 'traxion', index: '02', title: 'Traxion', category: 'Full stack', year: '2026',
      status: 'Em desenvolvimento',
      summary: 'Sistema de gestão de frotas que centraliza veículos, motoristas e relatórios operacionais, reduzindo controles dispersos e apoiando decisões mais rápidas.',
      description: 'Sistema de gestão de frotas pensado para concentrar veículos, motoristas, relatórios e informações operacionais em um só ambiente.',
      tech: ['Vue.js', 'NestJS', 'API REST'], accent: '#35c8d0', visual: 'traxion',
      cover: '/projects/traxion-login-thumb.webp',
      images: [{ src: '/projects/traxion-login.png', thumb: '/projects/traxion-login-thumb.webp', alt: 'Tela de acesso do sistema Traxion', caption: 'Acesso ao Traxion e apresentação dos pilares do produto.' }],
      linkedin, role: 'Produto e desenvolvimento full stack',
      challenge: 'Organizar informações de frota que normalmente ficam espalhadas entre planilhas e processos manuais, criando uma base confiável para decisões operacionais.',
      resultTitle: 'Estado atual',
      result: 'A base de autenticação e a identidade do produto já estão implementadas. Os próximos passos concentram-se na conclusão dos fluxos operacionais e na preparação do ambiente para publicação.',
      decision: 'Separei a interface da API para permitir evolução independente, com autenticação centralizada e módulos de domínio para veículos, motoristas e relatórios.',
      architecture: ['Interface Vue.js', 'API REST NestJS', 'Regras de frota', 'Persistência de dados'],
      features: [
        { label: 'Gestão de veículos', icon: '$truck' },
        { label: 'Gestão de motoristas', icon: '$accountCard' },
        { label: 'Relatórios operacionais', icon: '$fileChart' },
        { label: 'Autenticação e controle de acesso', icon: '$shieldLock' },
      ],
    },
    {
      id: 3, slug: 'reserva-inteligente', index: '03', title: 'Reserva Inteligente', category: 'Full stack', year: '2025',
      status: 'Projeto demonstrativo',
      summary: 'Aplicação full stack para administrar salas, usuários e reservas com autenticação segura, regras de acesso e uma experiência responsiva para a operação diária.',
      description: 'Sistema full stack para administrar usuários, salas e reservas com acesso seguro e uma interface responsiva.',
      tech: ['Vue 3', 'NestJS', 'Prisma'], accent: '#90a0ff', visual: 'orbit',
      github: 'https://github.com/victoramaraldev/provaInovacaoApp', api: 'https://github.com/victoramaraldev/provaInovacaoApi',
      role: 'Desenvolvimento full stack',
      challenge: 'Estruturar um fluxo administrativo com múltiplas entidades, garantindo navegação protegida e uma API organizada para evoluir o produto.',
      resultTitle: 'Entrega técnica',
      result: 'Front-end tipado com Vue, Pinia, Vuetify e validação, conectado a uma API NestJS com autenticação JWT, Prisma, SQLite e proteção de senhas com bcrypt.',
      decision: 'Modelei usuários, salas e reservas como domínios separados e protegi tanto as rotas da interface quanto os endpoints da API com autenticação JWT.',
      architecture: ['Vue 3 e Vuetify', 'API NestJS + JWT', 'Prisma ORM', 'Banco SQLite'],
      features: [
        { label: 'CRUD de usuários', icon: '$accountCog' },
        { label: 'Gestão de salas', icon: '$doorOpen' },
        { label: 'Fluxo de reservas', icon: '$calendarCheck' },
        { label: 'Autenticação JWT', icon: '$key' },
      ],
    },
    {
      id: 4, slug: 'painel-producao', index: '04', title: 'Painel de Produção', category: 'Dados', year: '2026',
      status: 'Projeto técnico',
      summary: 'Dashboard industrial que consulta dados do Firebird por uma API NestJS e transforma o andamento da produção em indicadores e gráficos fáceis de acompanhar.',
      description: 'Dashboard conectado ao banco Firebird para acompanhar o andamento da produção e transformar dados operacionais em indicadores objetivos.',
      tech: ['Vue 3', 'ApexCharts', 'Firebird'], accent: '#ff704d', visual: 'signal',
      cover: '/projects/tema-producao-dashboard-thumb.webp',
      images: [{ src: '/projects/tema-producao-dashboard.png', thumb: '/projects/tema-producao-dashboard-thumb.webp', alt: 'Dashboard do Tema Produção com indicadores e gráfico de produções iniciadas', caption: 'Indicadores carregados do backend e evolução diária das produções iniciadas.' }],
      github: 'https://github.com/victoramaraldev/tema-producao', role: 'Desenvolvimento full stack',
      challenge: 'Conectar uma interface moderna a uma fonte Firebird e apresentar indicadores operacionais densos de maneira objetiva.',
      resultTitle: 'Entrega técnica',
      result: 'Solução desacoplada com frontend Vue, Pinia, Vuetify e ApexCharts. Uma API NestJS privada consulta o Firebird e entrega ao painel os totais e a evolução diária da produção.',
      decision: 'Mantive o acesso ao Firebird exclusivamente no backend privado, expondo ao frontend somente os indicadores necessários e reduzindo o acoplamento com a base legada.',
      architecture: ['Dashboard Vue 3', 'API NestJS privada', 'Consultas e agregações', 'Banco Firebird'],
      features: [
        { label: 'Indicadores operacionais', icon: '$gauge' },
        { label: 'Gráficos exportáveis', icon: '$chartBar' },
        { label: 'API NestJS privada', icon: '$api' },
        { label: 'Integração com Firebird', icon: '$databaseSync' },
      ],
    },
  ]

  const filteredProjects = computed(() => {
    if (activeFilter.value === 'Todos') return projects
    const selected = activeFilter.value.toLowerCase()
    return projects.filter(project => project.tech.some(technology => technology.toLowerCase().includes(selected)))
  })
  const getProject = slug => projects.find(project => project.slug === slug)

  return { activeFilter, filters, projects, filteredProjects, getProject }
})