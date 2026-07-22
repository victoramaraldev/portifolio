<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const close = () => { menuOpen.value = false }
</script>

<template>
  <header class="site-header">
    <router-link to="/" class="brand" aria-label="Página inicial"><span>VA</span><i></i></router-link>
    <nav class="desktop-nav" aria-label="Navegação principal">
      <router-link to="/">Trabalhos</router-link>
      <router-link to="/sobre">Sobre</router-link>
      <a href="https://www.linkedin.com/in/víctor-amaral" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
      <a href="mailto:victoramaral951@outlook.com">Contato <span>↗</span></a>
    </nav>
    <button class="menu-button" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Abrir menu">
      <span></span><span></span>
    </button>
    <transition name="menu">
      <div v-if="menuOpen" class="mobile-nav">
        <router-link to="/" @click="close">Trabalhos</router-link>
        <router-link to="/sobre" @click="close">Sobre</router-link>
        <a href="https://www.linkedin.com/in/víctor-amaral" target="_blank" rel="noreferrer" @click="close">LinkedIn ↗</a>
        <a href="mailto:victoramaral951@outlook.com" @click="close">Contato ↗</a>
      </div>
    </transition>
  </header>
</template>