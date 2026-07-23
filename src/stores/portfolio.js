import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const linkedin = 'https://www.linkedin.com/in/víctor-amaral'

export const usePortfolioStore = defineStore('portfolio', () => {
  const activeFilter = ref('Todos')
  const filters = ['Todos', 'Produto', 'Full stack', 'Dados']
  const projects = [
    {
      id: 1,
      slug: 'timely',
      index: '01',
      title: 'Timely',
      category: 'Produto',
      year: '2025',
      status: 'Beta / Em desenvolvimento',
      summary: 'Agendamentos, equipe e desempenho em um único fluxo.',
      description: 'Uma plataforma de gestão de agendamentos para organizar clientes, equipe, disponibilidade e indicadores operacionais.',
      tech: ['Vue 3', 'TypeScript', 'Socket.io'],
      accent: '#c8ff2e',
      visual: 'finance',
      cover: '/projects/timely-dashboard.png',
      images: [
        { src: '/projects/timely-dashboard.png', alt: 'Dashboard do Timely com resumo de agendamentos', caption: 'Dashboard com visão diária e indicadores de agendamentos.' },
        { src: '/projects/timely-agenda.png', alt: 'Agenda do Timely com detalhes de um agendamento', caption: 'Agenda visual e detalhes do atendimento em contexto.' },
      ],
      github: 'https://github.com/victoramaraldev/timelyApp',
      linkedin,
      role: 'Produto, front-end e integração',
      challenge: 'Centralizar a operação de pequenos negócios que trabalham com horários, reduzindo o uso de agendas dispersas e tornando o acompanhamento da equipe mais simples.',
      resultTitle: 'O que já está pronto',
      result: 'O beta já reúne dashboard, agenda mensal, disponibilidade, clientes, membros, relatórios e comunicação associada aos agendamentos. O produto continua em evolução antes da abertura de uma demonstração pública.',
      features: ['Dashboard operacional', 'Agenda e disponibilidade', 'Gestão de clientes e equipe', 'Relatórios de desempenho'],
    },
    {
      id: 2,
      slug: 'traxion',
      index: '02',
      title: 'Traxion',
      category: 'Full stack',
      year: '2026',
      status: 'Em desenvolvimento',
      summary: 'Gestão inteligente de frotas, veículos e motoristas.',
      description: 'Sistema de gestão de frotas pensado para concentrar veículos, motoristas, relatórios e informações operacionais em um só ambiente.',
      tech: ['Vue.js', 'NestJS', 'API REST'],
      accent: '#35c8d0',
      visual: 'traxion',
      cover: '/projects/traxion-login.png',
      images: [
        { src: '/projects/traxion-login.png', alt: 'Tela de acesso do sistema Traxion', caption: 'Acesso ao Traxion e apresentação dos pilares do produto.' },
      ],
      linkedin,
      role: 'Produto e desenvolvimento full stack',
      challenge: 'Organizar informações de frota que normalmente ficam espalhadas entre planilhas e processos manuais, criando uma base confiável para decisões operacionais.',
      resultTitle: 'Estado atual',
      result: 'A base de autenticação e a identidade do produto já estão implementadas. Os próximos passos concentram-se na conclusão dos fluxos operacionais e na preparação do ambiente para publicação.',
      features: ['Gestão de veículos', 'Gestão de motoristas', 'Relatórios operacionais', 'Autenticação e controle de acesso'],
    },
    {
      id: 3,
      slug: 'reserva-inteligente',
      index: '03',
      title: 'Reserva Inteligente',
      category: 'Full stack',
      year: '2025',
      status: 'Projeto demonstrativo',
      summary: 'Salas, pessoas e reservas em um só fluxo.',
      description: 'Sistema full stack para administrar usuários, salas e reservas com acesso seguro e uma interface responsiva.',
      tech: ['Vue 3', 'NestJS', 'Prisma'],
      accent: '#90a0ff',
      visual: 'orbit',
      github: 'https://github.com/victoramaraldev/provaInovacaoApp',
      api: 'https://github.com/victoramaraldev/provaInovacaoApi',
      role: 'Desenvolvimento full stack',
      challenge: 'Estruturar um fluxo administrativo com múltiplas entidades, garantindo navegação protegida e uma API organizada para evoluir o produto.',
      resultTitle: 'Entrega técnica',
      result: 'Front-end tipado com Vue, Pinia, Vuetify e validação, conectado a uma API NestJS com autenticação JWT, Prisma, SQLite e proteção de senhas com bcrypt.',
      features: ['CRUD de usuários', 'Gestão de salas', 'Fluxo de reservas', 'Autenticação JWT'],
    },
    {
      id: 4,
      slug: 'painel-producao',
      index: '04',
      title: 'Painel de Produção',
      category: 'Dados',
      year: '2026',
      status: 'Projeto técnico',
      summary: 'Indicadores industriais extraídos diretamente do Firebird.',
      description: 'Dashboard conectado ao banco Firebird para acompanhar o andamento da produção e transformar dados operacionais em indicadores objetivos.',
      tech: ['Vue 3', 'ApexCharts', 'Firebird'],
      accent: '#ff704d',
      visual: 'signal',
      cover: '/projects/tema-producao-dashboard.png',
      images: [
        { src: '/projects/tema-producao-dashboard.png', alt: 'Dashboard do Tema Produção com indicadores e gráfico de produções iniciadas', caption: 'Indicadores carregados do backend e evolução diária das produções iniciadas.' },
      ],
      github: 'https://github.com/victoramaraldev/tema-producao',
      role: 'Desenvolvimento full stack',
      challenge: 'Conectar uma interface moderna a uma fonte Firebird e apresentar indicadores operacionais densos de maneira objetiva.',
      resultTitle: 'Entrega técnica',
      result: 'Solução desacoplada com frontend Vue, Pinia, Vuetify e ApexCharts. Uma API NestJS privada consulta o Firebird e entrega ao painel os totais e a evolução diária da produção.',
      features: ['Indicadores operacionais', 'Gráficos exportáveis', 'API NestJS privada', 'Integração com Firebird'],
    },
  ]

  const filteredProjects = computed(() => activeFilter.value === 'Todos' ? projects : projects.filter(project => project.category === activeFilter.value))
  const getProject = slug => projects.find(project => project.slug === slug)

  return { activeFilter, filters, projects, filteredProjects, getProject }
})