<script>
export default {
  data() {
    return {
      links: [
        { path: '/', name: 'Home' },
        { path: '/products', name: 'ProductsView' },
        { path: '/about', name: 'AboutView' },
        { path: '/regsiter', name: 'RegisterView' },
        { path: '/contacts', name: 'ContactsView' },
      ],

    };
  },
  methods: {
    onCartClick() {
      this.$router.push('/cart');
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q0hUaUi7lLLC5UOslM9ul_B8NyXTKNn9BcBGtCXV&s"
            alt="logo"
          >
        </li>
      </ul>
      <ul>
        <li v-for="link in links" :key="link.path">
          <router-link :to="link.path">
            {{ link.name }}
          </router-link>
        </li>

        <li>
          <button type="button" class="primary" @click="onCartClick">
            Cart
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
nav {
  padding: 0.25rem 1rem;
}

nav img {
  height: 2rem;
}
</style>
