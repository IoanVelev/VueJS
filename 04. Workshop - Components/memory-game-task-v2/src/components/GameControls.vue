<script>
export default {
  props: {
    isPlaying: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['start', 'stop', 'reset'],
};
</script>

<template>
  <section>
    <div class="btns">
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  </section>
</template>

<style scoped>
.btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 30px;
}
</style>
