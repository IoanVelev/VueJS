<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      message: '',
    };
  },
  methods: {
    onInput(event) {
      this.firstName = event.target.value;
    },
  },
};
</script>

<template>
  <article>
    <header>Leave your feedback</header>
    <input type="text" :value="firstName" @input="onInput">
    <p>My first name is: {{ firstName }}</p>

    <input v-model="lastName" type="text">
    <p>My last name is: {{ lastName }}</p>

    <textarea v-model="message" placeholder="Leave feedback.." />
    <p>My message is: {{ message }}</p>
  </article>
</template>

<style scoped>
article {
  max-width: 500px;
  margin: 4rem auto 0;
}
</style>
