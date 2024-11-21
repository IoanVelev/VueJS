<script>
export default {
  data() {
    return {
      userInput: "",
      timerSeconds: 0,
    };
  },
  methods: {
    onInput(event) {
      this.userInput = event.target.value;
    },
    timerHandler() {
      const interval = setInterval(() => {
        if (this.timerSeconds > 0) {
          this.timerSeconds -= 1;
        } else {
          clearInterval(interval);
        }
      }, 1000);
    },
    onStart() {
      const [h, m, s] = this.userInput.split(":").map((num) => Number(num));
      this.timerSeconds = s + 60 * m + 3600 * h;
      this.timerHandler();
    },
    onPause() {
      //TODO
    },
    onReset() {
      this.timerSeconds = 0;
      this.userInput = "";
    },
  },
};
</script>

<template>
  <h1 class="title">Timer app</h1>
  <input type="text" @input="onInput" :value="`${this.userInput}`">
  <button type="button" @click="onStart">Start</button>
  <button type="button" @click="onPause">Pause</button>
  <button type="button" @click="onReset">Reset</button>
  <p class="time-remaining" v-if="timerSeconds">
    Remaining time: {{ timerSeconds }}
  </p>
</template>

<style scoped>
.title {
  font-family: Arial, Helvetica, sans-serif;
}

.time-remaining {
  font-size: 20px;
}
</style>
