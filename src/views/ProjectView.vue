<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '../stores/portfolio'
const route = useRoute(); const store = usePortfolioStore()
const project = computed(() => store.getProject(route.params.slug) || store.projects[0])
const nextProject = computed(() => store.projects[(store.projects.findIndex(p => p.id === project.value.id) + 1) % store.projects.length])
</script>

<template>
  <div class="project-page page-shell" :style="{ '--accent': project.accent }">
    <section class="project-hero">
      <div class="eyebrow"><span></span> {{ project.category }} / {{ project.year }}</div>
      <h1>{{ project.title }}</h1><p>{{ project.description }}</p>
      <div class="project-meta"><div><small>PAPEL</small><span>{{ project.role }}</span></div><div><small>STACK</small><span>{{ project.tech.join(', ') }}</span></div><div><small>ANO</small><span>{{ project.year }}</span></div></div>
    </section>
    <div class="project-cover" :class="`visual-${project.visual}`"><span>{{ project.title }}</span><i></i></div>
    <section class="case-copy"><span class="section-number">01 / CONTEXTO</span><div><h2>O desafio</h2><p>{{ project.challenge }}</p></div><div><h2>O resultado</h2><p>{{ project.result }}</p><div class="repo-links"><a :href="project.github" target="_blank" rel="noreferrer">Ver front-end no GitHub ↗</a><a v-if="project.api" :href="project.api" target="_blank" rel="noreferrer">Ver API no GitHub ↗</a></div></div></section>
    <router-link :to="`/projeto/${nextProject.slug}`" class="next-project"><small>PRÓXIMO PROJETO</small><span>{{ nextProject.title }} ↗</span></router-link>
  </div>
</template>
