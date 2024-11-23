<script>
import ButtonCounter from "./components/ButtonCounter.vue";
import CustomLayout from "./components/CustomLayout.vue";

export default {
  components: {
    ButtonCounter,
    CustomLayout,
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
    },
  },
};
</script>

<template>
  <h1 class="title">Components example</h1>
  <ButtonCounter
    title="1st button"
    text="I was clicked: "
    @was-incremented="(arg) => wasIncrementedTo(arg)"
  />
  <ButtonCounter :text="customText" />
  <ButtonCounter text="Counter: " />
  <p class="incremented-value" v-if="incrementedValue">
    Was incremented to: {{ incrementedValue }}
  </p>
  <br />
  <br />
  <CustomLayout class="custom-layout">
    <template #header>
      <h1>This is not default header</h1>
    </template>
    Hello there
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, cum.
    </p>
  </CustomLayout>
</template>

<style>
.title {
  display: grid;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  height: 3vh;
}

.incremented-value {
  font-size: 20px;
  display: inline;
  position: relative;
  padding: 40px;
}

.custom-layout {
  display: grid;
  position: fixed;
  margin-top: 300px;
  font-size: 20px;
}
</style>
