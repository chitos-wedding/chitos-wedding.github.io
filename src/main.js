import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
// import 'quasar/dist/quasar.css'

import App from './App.vue'

import '@/assets/base.css'

createApp(App).use(Quasar).mount('#app')
