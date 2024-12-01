<script>
export default {
  props: {
    disabled: Boolean,
    placeholder: String,
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <fieldset :disabled="disabled">
    <label for="id">{{ name }}</label>
    <input :id="id" type="text" :placeholder="placeholder">
  </fieldset>
</template>
