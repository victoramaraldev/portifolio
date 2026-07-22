<script setup>
import { usePortfolioStore } from '../stores/portfolio'
import ProjectCard from '../components/ProjectCard.vue'
const store = usePortfolioStore()
</script>

<template>
  <div>
    <section class="hero page-shell">
      <div class="eyebrow"><span></span> Full-stack developer / Brasil</div>
      <h1>Construo produtos<br>digitais de <em>ponta a ponta.</em></h1>
      <div class="hero-footer">
        <p>Desenvolvedor full stack especializado em Vue.js e NestJS. Transformo problemas complexos em produtos claros, rápidos e bem construídos.</p>
        <a href="#projetos" class="scroll-cue"><span>Explorar projetos</span><i>↓</i></a>
      </div>
      <div class="hero-grid" aria-hidden="true"><span v-for="n in 14" :key="n"></span></div>
    </section>

    <section id="projetos" class="projects-section page-shell">
      <div class="section-top">
        <div><span class="section-number">01</span><h2>Projetos selecionados</h2></div>
        <div class="filters" role="group" aria-label="Filtrar projetos">
          <button v-for="filter in store.filters" :key="filter" :class="{ active: store.activeFilter === filter }" @click="store.activeFilter = filter">{{ filter }}</button>
        </div>
      </div>
      <transition-group name="project-list" tag="div" class="projects-list">
        <ProjectCard v-for="project in store.filteredProjects" :key="project.id" :project="project" />
      </transition-group>
    </section>

    <section class="video-callout page-shell">
      <div class="video-callout-label"><span class="section-number">02 / EM MOVIMENTO</span><i></i></div>
      <div class="video-callout-copy">
        <p>Quer ver os produtos <em>funcionando?</em></p>
        <span>No meu LinkedIn compartilho demonstrações em vídeo do Timely e do Traxion, mostrando fluxos, interfaces e decisões do desenvolvimento.</span>
      </div>
      <a href="https://www.linkedin.com/in/víctor-amaral" target="_blank" rel="noreferrer" class="video-link"><span>Assistir no LinkedIn</span><i>↗</i></a>
    </section>

    <section class="about-teaser page-shell">
      <span class="section-number">03 / SOBRE</span>
      <p>Do banco de dados à interface, gosto de transformar problemas complexos em experiências <em>simples, rápidas e memoráveis.</em></p>
      <router-link to="/sobre" class="text-link">Mais sobre mim <span>↗</span></router-link>
    </section>
    <footer class="footer page-shell"><div><span>Tem um projeto em mente?</span><a href="mailto:victoramaral951@outlook.com">Vamos conversar.</a></div><div class="footer-meta"><span>© 2026</span><a href="https://www.linkedin.com/in/víctor-amaral" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Fri5Day" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
  </div>
</template>