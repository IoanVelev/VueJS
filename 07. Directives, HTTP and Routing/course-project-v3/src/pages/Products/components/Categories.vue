<script>
import { getAllCategories } from '../../../services/categories';

export default {
  props: {
    activeCategory: {
      type: String,
      required: true,
    },
  },
  emits: ['select'],
  data() {
    return {
      categories: [],
    };
  },

  async created() {
    this.categories = await getAllCategories();
  },
};
</script>

<template>
  <ul v-if="categories.length > 0" role="list" class="categories">
    <li v-for="category in categories" :key="`ctg-btn-${category.slug}`">
      <button
        :class="[category.slug === activeCategory ? 'primary' : 'secondary outline']"
        @click="$emit('select', category.slug)"
      >
        {{ category.name }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.categories {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 2rem;
}
</style>
