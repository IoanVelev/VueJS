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
  },
};
</script>

<template>
  <article class="appArticle">
    <input type="text" @input="onChange">
  </article>
</template>

<style>
.appArticle {
    max-width: 400px;
    margin: 2rem;
}
</style>
