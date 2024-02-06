import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { fakeApi } from '@/api/api'

const app = createApp(App)

app.provide('api', fakeApi)

app.use(createPinia())
app.use(router)

app.mount('#app')
