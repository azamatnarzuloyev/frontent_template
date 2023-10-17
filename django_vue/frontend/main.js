import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'




const el  = document.getElementById('app')
if(el) {
    const data = {...el.dataset, ...el.dataset}

    createApp(App, data).mount('#app')
}



