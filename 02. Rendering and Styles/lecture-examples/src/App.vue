<script>
export default {
  data() {
    return {
      isDay: true,
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
</template>
