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
  props: {
    data: {
      type: Object,
      required: true,
    },
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
        zip: null,
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
          required,
          minLength: minLength(5),
        },
      },
    };
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        const areSame = oldVal && (JSON.stringify(Object.entries(newVal).sort())
          === JSON.stringify(Object.entries(oldVal).sort()));

        if (!areSame) {
          this.initState(newVal);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async onSubmit() {
      const isValid = await this.v$.$validate();

      if (isValid) {
        this.$emit('submit', this.formData);
      }
    },

    initState(dataPropVal) {
      this.formData = {
        address1: dataPropVal.address1,
        address2: dataPropVal.address2,
        city: dataPropVal.city,
        zip: dataPropVal.zip,
        country: dataPropVal.country,
        payment: dataPropVal.payment,
        note: dataPropVal.note,
      };
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
      <button type="submit" class="secondary" @click="$emit('previous', formData)">
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
