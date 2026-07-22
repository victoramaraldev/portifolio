import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

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
      year: '2024',
      summary: 'Gestão de tempo que trabalha em tempo real.',
      description: 'Uma plataforma completa para organizar agendas, acompanhar atividades e transformar tempo em informação útil.',
      tech: ['Vue 3', 'TypeScript', 'Socket.io'],
      accent: '#c8ff2e',
      visual: 'finance',
      github: 'https://github.com/Fri5Day/timelyApp',
      role: 'Front-end Architecture & UI',
      challenge: 'Reunir calendário, apontamentos e indicadores em uma experiência protegida por autenticação, sem perder clareza conforme os dados são atualizados em tempo real.',
      result: 'Uma aplicação Vue 3 modular com rotas protegidas, estado global em Pinia, calendário interativo, dashboards em Chart.js, validação de formulários e comunicação via Socket.io.'
    },
    {
      id: 2,
      slug: 'reserva-inteligente',
      index: '02',
      title: 'Reserva Inteligente',
      category: 'Full stack',
      year: '2025',
      summary: 'Salas, pessoas e reservas em um só fluxo.',
      description: 'Sistema full stack para administrar usuários, salas e reservas com acesso seguro e uma interface responsiva.',
      tech: ['Vue 3', 'NestJS', 'Prisma'],
      accent: '#90a0ff',
      visual: 'orbit',
      github: 'https://github.com/Fri5Day/provaInovacaoApp',
      api: 'https://github.com/Fri5Day/provaInovacaoApi',
      role: 'Full-stack Development',
      challenge: 'Estruturar um fluxo administrativo com múltiplas entidades, garantindo navegação protegida e uma base de API organizada para evoluir o produto.',
      result: 'Front-end tipado com Vue, Pinia, Vuetify e validação de dados, conectado a uma API NestJS com autenticação JWT, Prisma, SQLite e senhas protegidas com bcrypt.'
    },
    {
      id: 3,
      slug: 'painel-producao',
      index: '03',
      title: 'Painel de Produção',
      category: 'Dados',
      year: '2026',
      summary: 'Operação industrial transformada em leitura visual.',
      description: 'Dashboard para acompanhar indicadores de produção e tornar dados operacionais mais fáceis de interpretar.',
      tech: ['Vue 3', 'ApexCharts', 'Firebird'],
      accent: '#ff704d',
      visual: 'signal',
      github: 'https://github.com/Fri5Day/tema-producao',
      api: 'https://github.com/Fri5Day/tema-producao-api',
      role: 'Full-stack Development',
      challenge: 'Conectar uma interface moderna a uma fonte de dados Firebird e apresentar indicadores operacionais densos de maneira objetiva.',
      result: 'Uma solução desacoplada: dashboard Vue com Pinia, Vuetify e ApexCharts, apoiado por uma API NestJS responsável pela integração com o banco Firebird.'
    },
  ]

  const filteredProjects = computed(() => activeFilter.value === 'Todos' ? projects : projects.filter(project => project.category === activeFilter.value))
  const getProject = slug => projects.find(project => project.slug === slug)

  return { activeFilter, filters, projects, filteredProjects, getProject }
})