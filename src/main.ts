import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import FakeCgApi from '@/api/api'

const app = createApp(App)

app.provide('api', new FakeCgApi())

app.use(createPinia())
app.use(router)

app.mount('#app')
