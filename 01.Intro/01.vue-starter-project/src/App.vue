<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment(){
      this.counter++;
    },
    decrement() {
      this.counter--;
    }
  }
}
</script>

<template>
  <h1 class="title">Hello world</h1>
  <p class="counter">Counter: {{ counter }}</p>
  <button class="btn" @click="increment">Increment</button>
  <button class="btn" @click="decrement">Decrement</button>
</template>

<style>
.title, .counter {
  text-align: center;
}

.btn {
  display: flex;
  margin-top: 40px;
  justify-self: center;
}
</style>