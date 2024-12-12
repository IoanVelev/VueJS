import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../pages/AboutView.vue';
import ContactsView from '../pages/ContactsView.vue';
import HomeView from '../pages/HomeView.vue';
import RegisterView from '../pages/Register/RegisterView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/regsiter', component: RegisterView },
  { path: '/contacts', component: ContactsView },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
