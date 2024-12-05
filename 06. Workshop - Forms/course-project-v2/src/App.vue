<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AboutView from './pages/AboutView.vue';
import CartView from './pages/CartView.vue';
import ContactsView from './pages/ContactsView.vue';
import HomeView from './pages/HomeView.vue';
import ProductsView from './pages/Products/ProductsView.vue';
import RegisterView from './pages/Register/RegisterView.vue';

export default {
  components: {
    AppHeader,
    ProductsView,
    AppFooter,
    HomeView,
    ContactsView,
    AboutView,
    RegisterView,
    CartView,
  },
  data() {
    return {
      page: 'Products',
    };
  },
  methods: {
    onSelect(newPage) {
      this.page = newPage;
    },
  },
};
</script>

<template>
  <AppHeader @select="onSelect" />
  <!-- <ComponentsStarter /> -->
  <main>
    <component :is="page" />
  </main>
  <AppFooter />
</template>
