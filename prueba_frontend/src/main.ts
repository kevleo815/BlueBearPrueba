import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import { createI18n } from 'vue-i18n'
import { messages } from './messages'


const i18n = createI18n({
    legacy: false, // import translate from '@vuedx/i18n'
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set messages
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')
