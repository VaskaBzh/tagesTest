import { createApp } from 'vue'
import './styles/app.scss'
import App from './App.vue'
import { router } from "./router"

import "./components/shared"

createApp(App)
    .use(router)
    .mount('#app')
