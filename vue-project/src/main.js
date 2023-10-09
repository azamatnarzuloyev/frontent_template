import { createApp } from 'vue'

import uiComponent from './ui-components'
import App from './App.vue'
import router from './router'
import store from './stores'



const app = createApp(App)
uiComponent.map(component => app.component(component.name, component))

app.use(store)


app.use(router)


app.mount('#app')
