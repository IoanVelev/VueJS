<script>
import AppInput from './components/AppInput.vue';

export default {
  components: {
    AppInput,
  },
  methods: {
    changeHandler(text) {
      console.log('In app: ', text);
    },
  },
};
</script>

<template>
  <AppInput @change="changeHandler" />
</template>
