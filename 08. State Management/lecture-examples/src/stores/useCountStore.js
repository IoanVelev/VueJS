import { defineStore } from 'pinia';

export const useCountStore = defineStore('countStore', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubledCount: (state) => {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count += 1;
    },
  },
});
