<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '../stores/portfolio'

const route = useRoute()
const store = usePortfolioStore()
const project = computed(() => store.getProject(route.params.slug) || store.projects[0])
const nextProject = computed(() => store.projects[(store.projects.findIndex(item => item.id === project.value.id) + 1) % store.projects.length])
</script>

<template>
  <div class="project-page page-shell" :style="{ '--accent': project.accent }">
    <section class="project-hero">
      <div class="eyebrow"><span></span> {{ project.category }} / {{ project.year }}</div>
      <div class="case-status"><i></i>{{ project.status }}</div>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <div class="project-meta">
        <div><small>PAPEL</small><span>{{ project.role }}</span></div>
        <div><small>STACK</small><span>{{ project.tech.join(', ') }}</span></div>
        <div><small>STATUS</small><span>{{ project.status }}</span></div>
      </div>
    </section>

    <section v-if="project.images?.length" class="project-gallery" :class="{ single: project.images.length === 1 }">
      <figure v-for="image in project.images" :key="image.src">
        <div><img :src="image.src" :alt="image.alt" /></div>
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

    <section class="feature-section">
      <div><span class="section-number">02 / ESCOPO</span><h2>Funcionalidades</h2></div>
      <ol><li v-for="(feature, index) in project.features" :key="feature"><span>0{{ index + 1 }}</span>{{ feature }}</li></ol>
    </section>

    <section v-if="project.status.includes('desenvolvimento')" class="development-note">
      <i></i><div><small>TRANSPARÊNCIA</small><p>Este produto ainda está em desenvolvimento. As telas apresentadas são reais, mas uma demonstração pública será disponibilizada somente quando o ambiente estiver pronto e seguro.</p></div>
    </section>

    <router-link :to="`/projeto/${nextProject.slug}`" class="next-project"><small>PRÓXIMO PROJETO</small><span>{{ nextProject.title }} ↗</span></router-link>
  </div>
</template>