<script>
import { useCountStore } from '../stores/useCountStore';

export default {
  setup() {
    const countStore = useCountStore();
    return { countStore };
  },
};
</script>

<template>
  <h2>Doubled count is: {{ countStore.doubledCount }}</h2>
</template>
