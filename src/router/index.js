import AddEventForm from '@/components/AddEventForm.vue'
import EditEventForm from '@/components/EditEventForm.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminPageView from '@/views/AdminPageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/addeventform',
      name: 'addeventform',
      component: AddEventForm
    },
    {
      path: '/editeventform',
      name: 'editeventform',
      component: EditEventForm
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPageView
    }


  ]
})

export default router
