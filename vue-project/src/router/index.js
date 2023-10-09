import { createRouter, createWebHistory } from 'vue-router'
import { LoginView, HomeView, RegisterView} from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path:'/register',
      name: 'register',
      component: RegisterView
  
    },
    {
      path:'/login',
      name: 'login',
      component: LoginView
  
    },
    {
      path:'',
      name: 'home',
      component: HomeView
  
    },
  ]
})

export default router
