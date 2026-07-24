<script setup>
import { computed, onBeforeUnmount, watch, watchEffect, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '../stores/portfolio'

const route = useRoute()
const store = usePortfolioStore()
const selectedImage = ref(null)
const project = computed(() => store.getProject(route.params.slug) || store.projects[0])
const nextProject = computed(() => store.projects[(store.projects.findIndex(item => item.id === project.value.id) + 1) % store.projects.length])

const technologyHints = {
  'Vue 3': 'Framework progressivo usado para construir a interface e seus componentes.',
  'Vue.js': 'Framework progressivo usado para construir a interface e seus componentes.',
  TypeScript: 'Tipagem estática para tornar o código mais seguro e previsível.',
  'Socket.io': 'Comunicação em tempo real entre cliente e servidor.',
  NestJS: 'Framework Node.js usado para estruturar APIs modulares e escaláveis.',
  'API REST': 'Integração entre frontend e backend por recursos HTTP.',
  Prisma: 'ORM responsável pelo acesso tipado e pelas operações no banco de dados.',
  ApexCharts: 'Biblioteca usada para apresentar indicadores em gráficos interativos.',
  Firebird: 'Banco de dados da operação industrial integrado ao backend.',
}

const statusHint = computed(() => {
  if (project.value.status.includes('desenvolvimento')) return 'Produto real em evolução, ainda sem demonstração pública.'
  if (project.value.status.includes('demonstrativo')) return 'Projeto criado para demonstrar arquitetura, experiência e domínio técnico.'
  return 'Projeto técnico funcional que evidencia integração e solução de um problema real.'
})


watchEffect(() => {
  document.title = `${project.value.title} — Victor Amaral`
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', project.value.description)
})
const closeImage = () => { selectedImage.value = null }
const handleKeydown = event => { if (event.key === 'Escape') closeImage() }

watch(selectedImage, image => {
  document.body.classList.toggle('lightbox-open', Boolean(image))
  if (image) window.addEventListener('keydown', handleKeydown)
  else window.removeEventListener('keydown', handleKeydown)
})

watch(() => route.params.slug, closeImage)
onBeforeUnmount(() => {
  document.body.classList.remove('lightbox-open')
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="project-page page-shell" :style="{ '--accent': project.accent }">
    <section class="project-hero">
      <div class="eyebrow"><span></span> {{ project.category }} / {{ project.year }}</div>
      <v-tooltip :text="statusHint" location="top">
        <template #activator="{ props }">
          <div v-bind="props" class="case-status tooltip-target" tabindex="0"><i></i>{{ project.status }}</div>
        </template>
      </v-tooltip>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <div class="project-meta">
        <div><small>PAPEL</small><span>{{ project.role }}</span></div>
        <div>
          <small>STACK</small>
          <div class="meta-stack">
            <v-tooltip v-for="technology in project.tech" :key="technology" :text="technologyHints[technology] || `Tecnologia aplicada na construção do projeto.`" location="top">
              <template #activator="{ props }"><span v-bind="props" class="meta-tech tooltip-target" tabindex="0">{{ technology }}</span></template>
            </v-tooltip>
          </div>
        </div>
        <div>
          <small>STATUS</small>
          <v-tooltip :text="statusHint" location="top">
            <template #activator="{ props }"><span v-bind="props" class="meta-status tooltip-target" tabindex="0">{{ project.status }} <v-icon icon="mdi-information-outline" size="14" /></span></template>
          </v-tooltip>
        </div>
      </div>
    </section>

    <section v-if="project.images?.length" class="project-gallery" :class="{ single: project.images.length === 1 }">
      <figure v-for="image in project.images" :key="image.src">
        <button class="gallery-trigger" type="button" :aria-label="`Ampliar: ${image.alt}`" @click="selectedImage = image">
          <img :src="image.thumb || image.src" :alt="image.alt" loading="lazy" />
          <span class="expand-hint"><v-icon icon="mdi-arrow-expand-all" size="18" /> Ampliar</span>
        </button>
        <figcaption>{{ image.caption }}</figcaption>
      </figure>
    </section>
    <div v-else class="project-cover" :class="`visual-${project.visual}`"><span>{{ project.title }}</span><i></i></div>

    <section class="case-copy">
      <span class="section-number">01 / CONTEXTO</span>
      <div><h2>O desafio</h2><p>{{ project.challenge }}</p></div>
      <div>
        <h2>{{ project.resultTitle }}</h2><p>{{ project.result }}</p>
        <div class="repo-links">
          <a v-if="project.linkedin" :href="project.linkedin" target="_blank" rel="noreferrer">Ver vídeos no LinkedIn ↗</a>
          <a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer">Ver front-end no GitHub ↗</a>
          <a v-if="project.api" :href="project.api" target="_blank" rel="noreferrer">Ver API no GitHub ↗</a>
        </div>
      </div>
    </section>

    <section class="architecture-section">
      <div class="architecture-intro">
        <span class="section-number">02 / ARQUITETURA</span>
        <h2>Como a solução funciona</h2>
        <p>{{ project.decision }}</p>
      </div>
      <div class="architecture-flow" :aria-label="`Arquitetura do projeto ${project.title}`">
        <template v-for="(node, index) in project.architecture" :key="node">
          <div class="architecture-node"><small>0{{ index + 1 }}</small><span>{{ node }}</span></div>
          <v-icon v-if="index < project.architecture.length - 1" icon="mdi-arrow-right" class="architecture-arrow" aria-hidden="true" />
        </template>
      </div>
    </section>

    <section class="feature-section">
      <div><span class="section-number">03 / ESCOPO</span><h2>Funcionalidades</h2></div>
      <ol>
        <li v-for="(feature, index) in project.features" :key="feature.label">
          <span>0{{ index + 1 }}</span><i class="feature-icon"><v-icon :icon="feature.icon" size="24" /></i><b>{{ feature.label }}</b>
        </li>
      </ol>
    </section>

    <section v-if="project.status.includes('desenvolvimento')" class="development-note">
      <i></i><div><small>TRANSPARÊNCIA</small><p>Este produto ainda está em desenvolvimento. As telas apresentadas são reais, mas uma demonstração pública será disponibilizada somente quando o ambiente estiver pronto e seguro.</p></div>
    </section>

    <section class="project-contact">
      <div><span class="section-number">04 / VAMOS CONVERSAR</span><h2>Precisa de uma solução parecida?</h2><p>Posso ajudar a transformar um processo, uma ideia ou uma integração em um produto web completo.</p></div>
      <a :href="`mailto:victoramaral951@outlook.com?subject=Projeto%20semelhante%20ao%20${encodeURIComponent(project.title)}`">Falar sobre o projeto <span>↗</span></a>
    </section>

    <router-link :to="`/projeto/${nextProject.slug}`" class="next-project"><small>PRÓXIMO PROJETO</small><span>{{ nextProject.title }} ↗</span></router-link>
  </div>

  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="selectedImage" class="image-lightbox" role="dialog" aria-modal="true" :aria-label="selectedImage.alt" @click.self="closeImage">
        <button type="button" class="lightbox-close" aria-label="Fechar imagem ampliada" @click="closeImage"><v-icon icon="mdi-close" size="24" /></button>
        <div class="lightbox-content">
          <img :src="selectedImage.src" :alt="selectedImage.alt" />
          <p>{{ selectedImage.caption }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>