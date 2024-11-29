<script>
const GAME_TIME = 5;
let interval;

export default {
  props: {
    isPlaying: {
      type: Boolean,
      required: true,
    },
    hasWon: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['start', 'stop'],
  data() {
    return {
      secondsLeft: 0,
      hasLost: false,
    };
  },
  methods: {
    startHandler() {
      this.hasLost = false;
      this.$emit('start');
      this.secondsLeft = GAME_TIME;
      interval = setInterval(() => {
        if (this.secondsLeft > 1) {
          this.secondsLeft -= 1;
        }
        else {
          this.hasLost = true;
          this.stopGame();
        }
      }, 1000);
    },
    stopGame() {
      clearInterval(interval);
      this.secondsLeft = 0;
      this.$emit('stop');
    },
  },
};
</script>

<template>
  <section>
    <div class="btns">
      <button :disabled="isPlaying" @click="startHandler">
        Start
      </button>
      <button :disabled="!isPlaying" @click="stopGame">
        Stop
      </button>
    </div>
  </section>
  <h2 v-if="secondsLeft">
    Seconds left: {{ secondsLeft }}
  </h2>
  <h2 v-if="hasLost">
    You lost. :/
  </h2>
  <h2 v-if="hasWon">
    You won!
  </h2>
</template>

<style scoped>
.btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 30px;
}
</style>
