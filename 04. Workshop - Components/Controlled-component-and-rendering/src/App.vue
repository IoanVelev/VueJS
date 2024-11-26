<script>
import AppInput from './components/AppInput.vue';

export default {
  components: {
    AppInput,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    firstNameHandler(text) {
      console.log('In app: ', text);
      this.firstName = text;
    },
    lastNameHandler(text) {
      this.lastName = text;
    },
    resetAll() {
      this.firstName = '';
      this.lastName = '';
    },
  },
};
</script>

<template>
  <AppInput :value="firstName" @change="firstNameHandler" />
  <AppInput :value="lastName" @change="lastNameHandler" />
  <button class="contrast" @click="resetAll">
    Reset all
  </button>
</template>
