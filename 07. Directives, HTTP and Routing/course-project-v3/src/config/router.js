import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../pages/AboutView.vue';
import CartView from '../pages/CartView.vue';
import ContactsView from '../pages/ContactsView.vue';
import HomeView from '../pages/HomeView.vue';
import ProductsView from '../pages/Products/ProductsView.vue';
import SingleProduct from '../pages/Products/SingleProduct.vue';
import RegisterView from '../pages/Register/RegisterView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
  { path: '/about', component: AboutView },
  { path: '/register', component: RegisterView },
  { path: '/contacts', component: ContactsView },
  { path: '/product/:id', component: SingleProduct },
  { path: '/cart', component: CartView },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
