import { createRouter, createWebHistory } from 'vue-router'
import { LoginView, HomeView, RegisterView, ArticleDetailesView, CreateFormView, EditArticleView} from '../views'

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
    {
      path: '/article/:slug',
      name: 'article-details',
      component: ArticleDetailesView 
    },
    {
      path:'/create-article',
      name: 'create-article',
      component: CreateFormView
    },
    {
      path:'/edit-article/:slug',
      name:'edit-article',
      component:EditArticleView
    }
  ]
})

export default router
