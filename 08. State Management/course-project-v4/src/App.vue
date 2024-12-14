<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <!-- <ComponentsStarter /> -->
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>
