<script>
import AppInput from './components/AppInput.vue';
import BasicExample from './components/BasicExample.vue';

export default {
  components: {
    AppInput,
    BasicExample,
  },
  data() {
    return {
      inputText: '',
    };
  },
};
</script>

<template>
  <AppInput
    id="example1"
    v-model="inputText"
    placeholder="Write something here."
    name="My custom component"
  />
  <p>Input text: {{ inputText }}</p>
  <BasicExample />
</template>

<style scoped>
article {
  max-width: 500px;
  margin: 4rem auto 0;
  fieldset {
    border: 1px lightcoral solid;
    padding: 10px;
  }
}
</style>
