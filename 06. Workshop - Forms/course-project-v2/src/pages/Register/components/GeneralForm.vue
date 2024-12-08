<script>
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import DoubleRow from './DoubleRow.vue';
import FormFieldset from './FormFieldset.vue';

const namePattern = helpers.regex(/^[A-Z][a-z]+ [A-Z][a-z]+$/);

export default {
  components: {
    FormFieldset,
    DoubleRow,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      formData: {
        name: '',
        password: '',
        rePass: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
      },
    };
  },
  validations() {
    return {
      formData: {
        name: {
          required,
          namePattern: helpers.withMessage('Field should consist of two names (letters only) seperated by a space. Both names should start with capital letters', namePattern),
        },
        password: '',
        rePass: '',
        email: '',
        phone: '',
        gender: { required },
        dateOfBirth: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      const isValid = await this.v$.validate();
      console.log('isValid ?', isValid, this.formData);
    },
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <FormFieldset title="Name" :errors="v$.formData.name.$errors">
      <input v-model="formData.name" type="text" placeholder="Enter your name" @blur="v$.formData.name.$touch">
    </FormFieldset>

    <DoubleRow>
      <FormFieldset title="Password">
        <input type="password" placeholder="Enter your password">
      </FormFieldset>
      <FormFieldset title="Confirm password">
        <input type="password" placeholder="Confirm password">
      </FormFieldset>
    </DoubleRow>

    <DoubleRow>
      <FormFieldset title="Email">
        <input type="email" placeholder="Enter your email">
      </FormFieldset>
      <FormFieldset title="Phone number">
        <input type="text" placeholder="Enter your phone number">
      </FormFieldset>
    </DoubleRow>

    <DoubleRow>
      <FormFieldset
        title="Gender"
        :errors="v$.formData.gender.$errors"
      >
        <select v-model="v$.formData.gender.$model">
          <option value="">
            Select gender
          </option>
          <option value="male">
            Male
          </option>
          <option value="female">
            Female
          </option>
        </select>
      </FormFieldset>
      <FormFieldset title="Date of birth">
        <input type="date" placeholder="Enter date of birth">
      </FormFieldset>
    </DoubleRow>

    <button type="submit" class="primary">
      Next
    </button>
  </form>
</template>

<style scoped>
form {
    display: grid;
    gap: 1rem;
 }

 input, select {
  margin: 0;
 }
</style>
