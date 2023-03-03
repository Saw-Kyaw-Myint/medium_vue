import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

// import LoginView from '../views/LoginView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: route => ({ 
        query: route.query.q || '', 
        query: route.query.category || ''  })
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/post/create',
      name: 'post/create',
      component: () => import('../views/Post/CreateView.vue')
    },
    {
      path: '/post/edit/:id',
      name: 'edit',
      component: () => import('../views/Post/EditView.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
  ]
})

export default router
