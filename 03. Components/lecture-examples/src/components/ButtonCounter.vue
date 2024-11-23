<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default value",
    },
    text: {
      type: String,
      required: true,
    },
  },
  emits: ['wasIncremented'],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
      this.$emit('wasIncremented', this.count);
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <button class="btn-counter" @click="onClick">{{ text }}{{ count }}</button>
  </div>
</template>

<style>
.wrapper {
  display: grid;
  position: relative;
}
.btn-counter {
  margin-top: 150px;
  width: 8rem;
  font-size: 15px;
  padding: 10px;
  background-color: lightcoral;
  color: white;
}
</style>
