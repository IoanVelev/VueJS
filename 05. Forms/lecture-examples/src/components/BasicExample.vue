<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      message: '',
      frameworks: [],
      acceptedTerms: 'Accept',
      car: '',
      isSelected: false,
      wasToggled: 'yes',
    };
  },
  methods: {
    onInput(event) {
      this.firstName = event.target.value;
    },
  },
};
</script>

<template>
  <article>
    <header>Leave your feedback</header>
    <input type="text" :value="firstName" @input="onInput">
    <p>My first name is: {{ firstName }}</p>

    <input v-model="lastName" type="text">
    <p>My last name is: {{ lastName }}</p>

    <textarea v-model="message" placeholder="Leave feedback.." />
    <p>My message is: {{ message }}</p>

    <fieldset>
      <p>Select your favourite JS framework</p>
      <label>
        <input v-model="frameworks" type="checkbox" value="Vue">
        VueJS
      </label>
      <label>
        <input v-model="frameworks" type="checkbox" value="React">
        ReactJS
      </label>
      <label>
        <input v-model="frameworks" type="checkbox" value="Angular">
        Angular
      </label>

      <p>Selected frameworks: {{ frameworks }}</p>
    </fieldset>

    <fieldset>
      Please accept the website terms.
      <label>
        <input v-model="acceptedTerms" type="radio" value="Accept">
        Accept
      </label>
      <label>
        <input v-model="acceptedTerms" type="radio" value="Decline">
        Decline
      </label>
      <p>Chosen value: {{ acceptedTerms }} </p>
    </fieldset>

    <fieldset>
      <select v-model="car">
        <option disabled value="">
          Please select car manufacturer
        </option>
        <option>Toyota</option>
        <option>Ford</option>
        <option>Mercedes</option>
      </select>

      <p>Selected car: {{ car }}</p>
    </fieldset>

    <fieldset>
      <label>
        <input
          v-model="wasToggled"
          type="checkbox"
          true-value="yes"
          false-value="no"
        >
        Was I toggled?
        <span>{{ wasToggled }}</span>
      </label>
      <label>
        <input
          v-model="isSelected"
          type="checkbox"
        >
        Was I selected?
        <span>{{ isSelected }}</span>
      </label>
    </fieldset>
  </article>
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
