<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { loginUser } from '../services/auth';
import FormFieldset from './Register/components/FormFieldset.vue';

export default {
  components: {
    FormFieldset,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      form: {
        username: 'emilys',
        password: 'emilyspass',
      },
    };
  },
  validations() {
    return {
      form: {
        username: { required },
        password: { required },
      },
    };
  },
  methods: {
    async onLogin() {
      const isValid = await this.v$.$validate();

      if (!isValid)
        return;
    },
  },
};
</script>

<template>
  <div class="formContainer">
    <article>
      <form @submit.prevent="onLogin">
        <FormFieldset title="Username" :errors="v$.form.password.$errors">
          <input v-model="v$.form.username.$model" type="text" placeholder="Enter your username">
        </FormFieldset>
        <FormFieldset title="Password" :errors="v$.form.password.$errors">
          <input v-model="v$.form.password.$model" type="password" placeholder="Enter your password">
        </FormFieldset>

        <button class="primary" type="submit">
          Login
        </button>
      </form>
    </article>
  </div>
</template>

<style scoped>
.formContainer{
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.formContainer article {
  width: 100%;
  max-width: 600px;
}
</style>
