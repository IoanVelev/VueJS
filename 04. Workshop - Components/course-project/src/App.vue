<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import ComponentsStarter from './components/ComponentsStarter.vue';
import ProductsView from './pages/Products/ProductsView.vue';

export default {
  components: {
    ComponentsStarter,
    AppHeader,
    ProductsView,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <!-- <ComponentsStarter /> -->
  <ProductsView />
  <AppFooter />
</template>
