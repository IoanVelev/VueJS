import { defineStore } from 'pinia';
import { getProductsByIds } from '../services/products';

export const useFavouritesStore = defineStore('favouriesStore', {
  state: () => ({
    favorites: new Set([]),
    products: [],
    isLoading: false,
  }),
  getters: {
    favoriteProducts: state => state.products.filter(prod => state.favorites.has(prod.id)),
  },
  actions: {
    // addToFavorites(productId) {
    //   this.favorites.add(productId);
    // },
    // removeFromFavourites(productId) {
    //   this.favorites.delete(productId);
    // },
    isFavorite(productId) {
      return this.favorites.has(productId);
    },
    toggleFavorite(productId) {
      const isFavorite = this.isFavorite(productId);

      if (isFavorite) {
        this.favorites.delete(productId);
      }
      else {
        this.favorites.add(productId);
      }
    },
    async loadFavorites() {
      this.isLoading = true;
      const response = await getProductsByIds(Array.from(this.favorites));

      this.products = response;
      this.isLoading = false;
    },
    resetProducts() {
      this.products = [];
    },
  },
});
