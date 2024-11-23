<script>
import ButtonCounter from "./components/ButtonCounter.vue";

export default {
  components: {
    ButtonCounter,
  },
  data() {
    return {
      customText: "I was incremented: ",
      incrementedValue: 0,
    };
  },
  methods: {
    wasIncrementedTo(value) {
      this.incrementedValue = value;
      console.log(`Was incremented to: ${this.incrementedValue}`);
    }
  }
};
</script>

<template>
  <h1 class="title">Components example</h1>
  <ButtonCounter title="1st button" text="I was clicked: " @was-incremented="(arg) => wasIncrementedTo(arg)" />
  <ButtonCounter :text="customText" />
  <ButtonCounter text="Counter: " />
  <p class="incremented-value" v-if="incrementedValue">Was incremented to: {{ incrementedValue }}</p>
</template>

<style>
.title {
  display: grid;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  height: 3vh;
}

.incremented-value{
  font-size: 20px;
  display: inline;
  position: relative;
  padding: 40px;
}
</style>
