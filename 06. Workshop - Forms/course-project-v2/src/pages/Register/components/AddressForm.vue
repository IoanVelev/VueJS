<script>
import useVuelidate from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import DoubleRow from './DoubleRow.vue';
import FormFieldset from './FormFieldset.vue';

export default {
  components: {
    FormFieldset,
    DoubleRow,
  },
  emits: ['previous', 'submit'],
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      formData: {
        address1: '',
        address2: '',
        city: '',
        ZIP: null,
        country: '',
        payment: '',
        note: '',
      },
    };
  },
  validations() {
    return {
      formData: {
        address1: {

          minLength: minLength(5),
        },
      },
    };
  },
  methods: {
    async onSubmit() {
      const isValid = await this.v$.$validate();

      if (isValid) {
        this.$emit('submit', this.formData);
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <FormFieldset title="Address 1" :errors="v$.formData.address1.$errors">
      <input v-model="v$.formData.address1.$model" type="text" placeholder="Enter your name" @blur="v$.formData.name.$touch">
    </FormFieldset>

    <FormFieldset title="Address 2" :errors="[]">
      <input v-model="formData.address2" type="text" placeholder="Enter your name">
    </FormFieldset>

    <DoubleRow>
      <button type="submit" class="secondary" @click="$emit('previous')">
        Previous
      </button>
      <button type="submit" class="primary">
        Submit
      </button>
    </DoubleRow>
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
