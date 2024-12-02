<script>
import RegistrationForm from './components/RegistrationForm.vue';

// import AppInput from './components/AppInput.vue';
// import BasicExample from './components/BasicExample.vue';

export default {
  components: {
    RegistrationForm,
    // AppInput,
    // BasicExample,
  },
  // data() {
  //   return {
  //     inputText: '',
  //   };
  // },
};
</script>

<template>
  <RegistrationForm />
  <!--
  <AppInput
    id="example1"
    v-model="inputText"
    placeholder="Write something here."
    name="My custom component"
  />
  <p>Input text: {{ inputText }}</p>
  <BasicExample />
    -->
</template>
