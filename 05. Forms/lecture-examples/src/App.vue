<script>
import AppInput from './components/AppInput.vue';
import BasicExample from './components/BasicExample.vue';

export default {
  components: {
    AppInput,
    BasicExample,
  },
};
</script>

<template>
  <AppInput id="example1" placeholder="Write something here." name="My custom component" />
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
