<script>
export default {
  data() {
    return {
      isDay: true,
      cartProducts: [
        {
          id: 1,
          name: 'Smartphone',
          price: 499.99,
          quantity: 2,
        },
        {
          id: 2,
          name: 'Laptop',
          price: 999.99,
          quantity: 1,
        },
        {
          id: 3,
          name: 'Headphones',
          price: 79.99,
          quantity: 3,
        },
        {
          id: 4,
          name: 'Tablet',
          price: 299.99,
          quantity: 2,
        },
      ],
    };
  },
  methods: {
    onClick() {
      this.isDay = !this.isDay;
    },
  },
};
</script>

<template>
  <h1>Hello world</h1>
  <h2 v-if="isDay">
    It's sunny outside! &#127774;
  </h2>
  <h2 v-else>
    It's dark outside! &#x1F311;
  </h2>
  <button @click="onClick">
    Toggle
  </button>
  <h3 v-show="!isDay">
    This text is shown when it's not a day.
  </h3>
  <h3>Products: </h3>
  <br>
  <br>
  <ul>
    <li v-for="product in cartProducts" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>
