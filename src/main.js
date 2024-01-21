import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import './plugins/firebase'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
// import 'quasar/dist/quasar.css'

import App from './App.vue'

import '@/assets/base.scss'

createApp(App)
  .use(Quasar, {
    plugins: {
      Notify,
    },
  })
  .mount('#app')
