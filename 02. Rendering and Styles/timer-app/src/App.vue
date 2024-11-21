<script>
export default {
  data() {
    return {
      userInput: '',
      time: 0
    }
  },
  methods: {
    onInput(event) {
      this.userInput = event.target.value
    },
    onStart() {
      // TODO
    },
    onPause() {
      //TODO
    },
    onRestart() {
      // TODO
    }
  }

}
</script>

<template>
 <h1 class="title">Timer app</h1>
 <input type="text" @input="onInput">
 <button type="button">Start</button>
 <button type="button">Pause</button>
 <button type="button">Reset</button>
</template>

<style scoped>
.title {
 font-family:Arial, Helvetica, sans-serif
}
</style>
