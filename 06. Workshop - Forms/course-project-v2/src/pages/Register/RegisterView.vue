<script>
import AddressForm from './components/AddressForm.vue';
import GeneralForm from './components/GeneralForm.vue';

export default {
  components: {
    GeneralForm,
    AddressForm,
  },
  data() {
    return {
      userInfo: {
        name: '',
        password: '',
        rePass: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
        address1: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
        payment: '',
        note: '',
      },
      activeStep: 'general',
    };
  },
  methods: {
    onNextStep(generalData) {
      this.userInfo = {
        ...this.userInfo,
        ...generalData,
      };
      this.goNext();
    },

    goNext() {
      this.activeStep = 'address';
    },

    goPrevious() {
      this.activeStep = 'general';
    },

    handlePrevious(generalData) {
      this.userInfo = {
        ...this.userInfo,
        ...generalData,
      };

      this.goPrevious();
    },

    onSubmit(generalData) {
      this.userInfo = {
        ...this.userInfo,
        ...generalData,
      };
    },
  },
};
</script>

<template>
  <section>
    <article>
      <header>
        <h2 v-if="activeStep === 'general'">
          {{ activeStep === 'general' ? 'Step 1: General Information' : 'Step 2: Address Information' }}
        </h2>
      </header>

      <GeneralForm v-if="activeStep === 'general'" :data="userInfo" @next="onNextStep" />
      <AddressForm v-else :data="userInfo" @previous="handlePrevious" @submit="onSubmit" />
    </article>
  </section>
</template>

<style scoped>
section {
  padding: 1rem;
}

article {
  max-width: 800px;
  margin: auto;
}
</style>
