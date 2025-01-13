import { defineStore } from 'pinia';
import { loginUser } from '../services/auth';

export const useUserStore = defineStore('userStore', {
  state() {
    return {
      user: null,
    };
  },
  actions: {
    async login() {
      const userRes = await loginUser(this.form);

      if (!userRes)
        return false;

      this.user = userRes;
    },
  },
});
