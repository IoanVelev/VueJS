<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<template>
  <h2>
    Single product {{ id }}
  </h2>
</template>
