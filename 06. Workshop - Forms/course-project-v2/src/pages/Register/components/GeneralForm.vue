<script>
import useVuelidate from '@vuelidate/core';
import DoubleRow from './DoubleRow.vue';
import FormFieldset from './FormFieldset.vue';

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
};
</script>

<template>
  <form>
    <FormFieldset title="Name">
      <input type="text" placeholder="Enter your name">
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
      <FormFieldset title="Gender">
        <select>
          <option value="Select gender" />
          <option value="female">
            Female
          </option>
          <option value="male">
            Male
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
