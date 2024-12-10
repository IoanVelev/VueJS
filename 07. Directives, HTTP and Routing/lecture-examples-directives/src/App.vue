<script>
const focus = {
  mounted: (element, bindingData) => {
    if (bindingData.value) {
      element.focus();
    }
  },
  updated: (element, bindingData) => {
    if (bindingData.value) {
      element.focus();
    }
  },
};

const colorDir = {
  mounted: (el, binding) => {
    if (binding.arg === "background") {
      // set background color
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  },
};

export default {
  directives: {
    focus,
    color: colorDir,
  },
  data() {
    return {
      shouldFocus: false,
    };
  },
};
</script>

<template>
  <button @click="shouldFocus = !shouldFocus">Toggle {{ shouldFocus }}</button>
  <input v-focus:foo.trim.prevent="shouldFocus" />

  <p v-color="'red'">I am using v-color with text</p>
  <p v-color:background="'green'">I am using v-color with background</p>
</template>

<style></style>
