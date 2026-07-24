import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
  mdiAccountCogOutline, mdiAccountGroupOutline, mdiApi, mdiArrowExpandAll,
  mdiArrowRight, mdiCalendarCheckOutline, mdiCalendarClockOutline,
  mdiCardAccountDetailsOutline, mdiChartBar, mdiChartLine, mdiClose,
  mdiDatabaseSyncOutline, mdiDoorOpen, mdiFileChartOutline, mdiGauge,
  mdiInformationOutline, mdiKeyOutline, mdiShieldLockOutline,
  mdiTruckOutline, mdiViewDashboardOutline,
} from '@mdi/js'
import { inject } from '@vercel/analytics'
import 'vuetify/styles'
import App from './App.vue'
import router from './router'
import './styles/main.css'

const portfolioIcons = {
  ...aliases,
  'mdi-account-cog-outline': mdiAccountCogOutline,
  'mdi-account-group-outline': mdiAccountGroupOutline,
  'mdi-api': mdiApi,
  'mdi-arrow-expand-all': mdiArrowExpandAll,
  'mdi-arrow-right': mdiArrowRight,
  'mdi-calendar-check-outline': mdiCalendarCheckOutline,
  'mdi-calendar-clock-outline': mdiCalendarClockOutline,
  'mdi-card-account-details-outline': mdiCardAccountDetailsOutline,
  'mdi-chart-bar': mdiChartBar,
  'mdi-chart-line': mdiChartLine,
  'mdi-close': mdiClose,
  'mdi-database-sync-outline': mdiDatabaseSyncOutline,
  'mdi-door-open': mdiDoorOpen,
  'mdi-file-chart-outline': mdiFileChartOutline,
  'mdi-gauge': mdiGauge,
  'mdi-information-outline': mdiInformationOutline,
  'mdi-key-outline': mdiKeyOutline,
  'mdi-shield-lock-outline': mdiShieldLockOutline,
  'mdi-truck-outline': mdiTruckOutline,
  'mdi-view-dashboard-outline': mdiViewDashboardOutline,
}

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
  icons: { defaultSet: 'mdi', aliases: portfolioIcons, sets: { mdi } },
  defaults: { VBtn: { rounded: 'pill', elevation: 0 } },
})

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')

if (import.meta.env.PROD) inject()