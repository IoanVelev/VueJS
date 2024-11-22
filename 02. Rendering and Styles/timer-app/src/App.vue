<script>
const parseTimerInput = (input) => {
  const [h, m, s] = input.split(":").map((num) => Number(num));
  return s + 60 * m + 3600 * h;
};
export default {
  data() {
    return {
      userInput: "",
      timerSeconds: 0,
      referenceSeconds: 0,
      isPaused: false,
      showWarning: false,
    };
  },
  methods: {
    onInput(event) {
      this.userInput = event.target.value;
    },
    timerHandler() {
      const interval = setInterval(() => {
        if (this.timerSeconds > 0 && !this.isPaused) {
          this.timerSeconds -= 1;
        } else if (this.timerSeconds > 0 && this.isPaused) {
          this.timerSeconds -= 0;
        } else {
          clearInterval(interval);
        }
      }, 1000);
    },
    onStart() {
      this.timerSeconds = parseTimerInput(this.userInput);
      this.referenceSeconds = parseTimerInput(this.userInput);
      this.timerHandler();
      this.userInput = "";
    },
    onPause() {
      this.isPaused = !this.isPaused;
    },
    onReset() {
      this.timerSeconds = 0;
      this.referenceSeconds = 0;
      this.userInput = "";
      this.showWarning = false;
    },
  },
  watch: {
    timerSeconds(newValue) {
      if (this.showWarning && newValue === 0) {
        this.onReset();
        return;
      } else if (this.showWarning) {
        return;
      }
      if (newValue < this.referenceSeconds * 0.2) {
        this.showWarning = true;
      }
    },
  },
};
</script>

<template>
  <h1 class="title">Timer app</h1>
  <input type="text" @input="onInput" :value="`${this.userInput}`" />
  <button type="button" @click="onStart">Start</button>
  <button type="button" @click="onPause">
    {{ isPaused ? "Resume" : "Pause" }}
  </button>
  <button type="button" @click="onReset">Reset</button>
  <p class="time-remaining" v-if="timerSeconds">
    Remaining time: {{ timerSeconds }}
  </p>
  <p class="warning-message" v-if="showWarning">Less than 20% of time remains!</p>
</template>

<style scoped>
.title {
  font-family: Arial, Helvetica, sans-serif;
}

.time-remaining {
  font-size: 20px;
}

.warning-message {
  color: red;
  font-weight: 600;
}
</style>
