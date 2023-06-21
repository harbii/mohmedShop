import './assets/main.css'
import Carousel3d from 'vue3-carousel-3d';
import "vue3-carousel-3d/dist/index.css"
import '@fortawesome/fontawesome-free/css/all.css' 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use( Carousel3d )
app.use(createPinia())
app.use(router)

app.mount('#app')
