import { defineStore } from 'pinia';

export const useFavouritesStore = defineStore('favouriesStore', {
  state: () => ({
    favorites: new Set([]),
  }),
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
  },
});
