<script>
import ButtonCounter from './components/ButtonCounter.vue';

export default {
  components: {
    ButtonCounter,
  }
}
</script>

<template>
  <h1 class="title">Components example</h1>
  <ButtonCounter />
</template>

<style scoped>
.title {
  display: grid;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  height: 3vh;
}
</style>