<script>
import { mapActions, mapState } from 'pinia';
import { useCountStore } from '../stores/useCountStore';
import DoubledCount from './doubledCount.vue';

export default {
  components: {
    DoubledCount,
  },
  // setup() {
  //   const countStore = useCountStore();
  //   return { countStore };
  // },
  computed: {
    ...mapState(useCountStore, ['count', 'doubledCount']),
  },
  methods: {
    ...mapActions(useCountStore, ['increment']),
  },
};
</script>

<template>
  <div class="container" style="text-align:center">
    <img src="../assets/vue.svg" alt="Logo" style="width: 10rem; margin: 1rem auto;">
    <h1>{{ msg }}</h1>

    <!-- <div class="card">
      <button type="button" @click="countStore.increment">
        count is {{ countStore.count }}
      </button>

      <DoubledCount />
    </div> -->

    <div class="card">
      <button type="button" @click="increment">
        count is {{ count }}
      </button>

      <DoubledCount />
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
