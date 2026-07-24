<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <router-view v-slot="{ Component, route }">
        <transition name="page">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>
