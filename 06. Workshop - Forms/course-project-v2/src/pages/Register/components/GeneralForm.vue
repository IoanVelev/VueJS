<script>
import useVuelidate from '@vuelidate/core';
import { alphaNum, email, helpers, maxLength, minLength, numeric, required, sameAs } from '@vuelidate/validators';
import DoubleRow from './DoubleRow.vue';
import FormFieldset from './FormFieldset.vue';

const namePattern = helpers.regex(/^[A-Z][a-z]+ [A-Z][a-z]+$/);

function minimalAge(minAge) {
  return helpers.withParams(
    { minAge },
    (value) => {
      const age = new Date(new Date() - new Date(value)).getFullYear() - 1970;
      return age > minAge;
    },
  );
}

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
        password: {
          required,
          minLength: minLength(3),
          maxLnegth: maxLength(16),
          alphaNum,
        },
        rePass: {
          sameAsPassword: sameAs(this.formData.password),
          required,
        },
        email: {
          required,
          email,
        },
        phone: {
          required,
          numeric,
          minLength: minLength(9),
          maxLength: maxLength(9),
        },
        gender: { required },
        dateOfBirth: {
          required,
          minimalAge: helpers.withMessage(
            ({
              $params,
            }) => `You must be ${$params.minAge}+ years old.`,
            minimalAge(13),
          ),
        },
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
      <FormFieldset title="Password" :errors="v$.formData.password.$errors">
        <input v-model="v$.formData.password.$model" type="password" placeholder="Enter your password">
      </FormFieldset>
      <FormFieldset title="Confirm password" :errors="v$.formData.rePass.$errors">
        <input v-model="v$.formData.rePass.$model" type="password" placeholder="Confirm password">
      </FormFieldset>
    </DoubleRow>

    <DoubleRow>
      <FormFieldset title="Email" :errors="v$.formData.email.$errors">
        <input v-model="v$.formData.email.$model" type="email" placeholder="Enter your email">
      </FormFieldset>
      <FormFieldset title="Phone number" :errors="v$.formData.phone.$errors">
        <input v-model.number="v$.formData.phone.$model" type="text" placeholder="Enter your phone number">
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
      <FormFieldset title="Date of birth" :errors="v$.formData.dateOfBirth.$errors">
        <input v-model="v$.formData.dateOfBirth.$model" type="date" placeholder="Enter date of birth">
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
