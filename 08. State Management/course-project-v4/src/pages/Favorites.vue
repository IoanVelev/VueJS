<script>
import { useFavouritesStore } from '../stores/useFavoritesStore';
import ProductCard from './Products/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  setup() {
    const favouritesStore = useFavouritesStore();
    return { favouritesStore };
  },
  async created() {
    this.favouritesStore.loadFavorites();
  },
};
</script>

<template>
  <h1>Products</h1>

  <progress v-if="favouritesStore.isLoading" />

  <div v-else-if="favouritesStore.favoriteProducts.length > 0" class="products">
    <ProductCard
      v-for="prod in favouritesStore.favoriteProducts"
      :key="prod.title + prod.id"
      :product="prod"
    />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
</style>
