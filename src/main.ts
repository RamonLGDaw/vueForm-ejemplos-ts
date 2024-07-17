// src/main.(js|ts)

import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import Vueform from '@vueform/vueform'
import vueformConfig from './components/vueform.config'

const app = createApp(App)
app.use(Vueform, vueformConfig)
app.mount('#app') 
 
 
 
 
