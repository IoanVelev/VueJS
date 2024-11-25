<script>
export default {
  emits: ['change'],
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    onChange(event) {
      const text = event.target.value;
      this.inputText = text;
      this.$emit('change', text);
    },
    onReset() {
      this.inputText = '';
      this.$emit('change', '');
    },
  },
};
</script>

<template>
  <article class="appArticle">
    <input type="text" :value="inputText" @input="onChange">
    <button type="button" @click="onReset">
      Reset
    </button>
  </article>
</template>

<style>
.appArticle {
    max-width: 400px;
    margin: 2rem;
}
</style>
