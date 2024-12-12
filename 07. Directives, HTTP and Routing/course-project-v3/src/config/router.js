import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../pages/AboutView.vue';
import CartView from '../pages/CartView.vue';
import ContactsView from '../pages/ContactsView.vue';
import HomeView from '../pages/HomeView.vue';
import NotFound from '../pages/NotFound.vue';
import ProductsView from '../pages/Products/ProductsView.vue';
import SingleProduct from '../pages/Products/SingleProduct.vue';
import RegisterView from '../pages/Register/RegisterView.vue';
import User from '../pages/User/User.vue';
import UserDetails from '../pages/User/UserDetails.vue';
import UserEdit from '../pages/User/UserEdit.vue';
import UserHome from '../pages/User/UserHome.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
  { path: '/about', component: AboutView },
  { path: '/register', component: RegisterView },
  { path: '/contacts', component: ContactsView },
  { path: '/product/:id', component: SingleProduct },
  { path: '/cart', component: CartView },
  {
    path: '/user',
    component: User,
    children: [
      { path: '', component: UserHome },
      { path: ':id', component: UserDetails },
      { path: ':id/edit', component: UserEdit },
    ],
  },

  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
