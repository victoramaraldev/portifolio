import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import './styles/main.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'portfolioDark',
    themes: {
      portfolioDark: {
        dark: true,
        colors: {
          background: '#0b0d0c',
          surface: '#111411',
          primary: '#c8ff2e',
          secondary: '#90a0ff',
        },
      },
    },
  },
  defaults: { VBtn: { rounded: 'pill', elevation: 0 } },
})

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')
