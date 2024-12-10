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
  }
};

export default {
  directives: {
    focus,
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
</template>

<style></style>
