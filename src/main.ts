import { createApp } from 'vue'
import { createPinia } from 'pinia'

//api
import '@/api'

import App from './App.vue'

import '@/assets/styles.scss'
import '@/assets/tailwindcss.css'
import 'tailwindcss-primeui'

import router from './router'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'base, primevue',
      },
      // darkModeSelector: '.dark',
      darkModeSelector: '.app-dark',
    },
  },
})

app.mount('#app')
