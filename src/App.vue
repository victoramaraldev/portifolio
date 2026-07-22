<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main><router-view v-slot="{ Component }"><transition name="page" mode="out-in"><component :is="Component" /></transition></router-view></v-main>
  </v-app>
</template>
