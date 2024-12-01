<script>
export default {
  data() {
    return {
      textValue: '',
      title: '',
    };
  },
  methods: {
    onInput(event) {
      this.textValue = event.target.value;
    },
  },
};
</script>

<template>
  <input type="text" :value="textValue" @input="onInput">
  <p>My text is: {{ textValue }}</p>

  <input v-model="title" type="text">
  <p>My title is: {{ title }}</p>
</template>
