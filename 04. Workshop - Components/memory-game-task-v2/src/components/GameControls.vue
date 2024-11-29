<script>
const GAME_TIME = 90;
let interval;
export default {
  props: {
    isPlaying: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['start', 'end', 'reset'],
  data() {
    return {
      secondsLeft: null,
      hasLost: false,
    };
  },
  methods: {
    startHandler() {
      this.$emit('start');
      this.secondsLeft = GAME_TIME;
      interval = setInterval(() => {
        if (this.secondsLeft > 0) {
          this.secondsLeft -= 1;
        }
        else {
          this.endGame();
        }
      }, 1000);
    },
    endGame() {
      clearInterval(interval);
      this.$emit('end');
      this.hasLost = true;
    },
  },
};
</script>

<template>
  <section>
    <div class="btns">
      <button @click="startHandler">
        Start
      </button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  </section>
  <h2 v-if="secondsLeft">
    Seconds left: {{ secondsLeft }}
  </h2>
  <p v-if="hasLost">
    You lost. :/
  </p>
</template>

<style scoped>
.btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 30px;
}
</style>
