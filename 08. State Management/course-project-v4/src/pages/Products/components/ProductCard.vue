<script>
import { useFavouritesStore } from '../../../stores/useFavoritesStore';

export default {
  props: {
    product: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const favoritesStore = useFavouritesStore();
    return { favoritesStore };
  },
  computed: {
    isFavorite() {
      return this.favoritesStore.isFavorite(this.product.id);
    },
  },
};
</script>

<template>
  <article>
    <img :src="product.images[0]" :alt="product.title">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p><b>Price</b>: {{ product.price }}$</p>
    <footer>
      <button type="button" class="secondary outline">
        Add to cart 🛒
      </button>
      <button type="button" class="contrast" :class="[isFavorite ? '' : 'outline']" @click="favoritesStore.toggleFavorite(product.id)">
        Favourite {{ isFavorite ? '💙' : '🤍' }}
      </button>
    </footer>
  </article>
</template>
