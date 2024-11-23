<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
  },
};
</script>

<template>
  <p class="text-counter">I was clicked {{ count }} times.</p>
  <button class="btn-counter" @click="onClick">Click me</button>
</template>

<style>
.text-counter {
  display: flex;
  justify-content: left;
  position: fixed;
  margin-top: 100px;
  font-size: 20px;
  
}

.btn-counter {
  display: flex;
  margin-top: 150px;
  justify-content: center;
  width: 8rem;
  position: fixed;
}
</style>
