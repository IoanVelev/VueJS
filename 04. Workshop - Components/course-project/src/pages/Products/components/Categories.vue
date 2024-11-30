<script>
import { categories } from '../../../constants/categories';

export default {
  data() {
    return {
      categories,
      activeCategory: '',
    };
  },
  methods: {
    onSelect(selectedValue) {
      this.activeCategory = selectedValue === this.activeCategory ? '' : selectedValue;
    },
  },
};
</script>

<template>
  <ul role="list" class="categories">
    <li v-for="category in categories" :key="`ctg-btn-${category.value}`">
      <button
        :class="[category.value === activeCategory ? 'primary' : 'secondary outline']"
        @click="onSelect(category.value)"
      >
        {{ category.name }}
      </button>
    </li>
  </ul>
</template>

<style>
.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
