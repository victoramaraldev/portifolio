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
  accountCog: mdiAccountCogOutline,
  accountGroup: mdiAccountGroupOutline,
  api: mdiApi,
  expand: mdiArrowExpandAll,
  arrowRight: mdiArrowRight,
  calendarCheck: mdiCalendarCheckOutline,
  calendarClock: mdiCalendarClockOutline,
  accountCard: mdiCardAccountDetailsOutline,
  chartBar: mdiChartBar,
  chartLine: mdiChartLine,
  close: mdiClose,
  databaseSync: mdiDatabaseSyncOutline,
  doorOpen: mdiDoorOpen,
  fileChart: mdiFileChartOutline,
  gauge: mdiGauge,
  information: mdiInformationOutline,
  key: mdiKeyOutline,
  shieldLock: mdiShieldLockOutline,
  truck: mdiTruckOutline,
  dashboard: mdiViewDashboardOutline,
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