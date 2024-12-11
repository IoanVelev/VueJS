<script>
import { getAllProducts } from '../../services/products';
import Categories from './components/Categories.vue';
import ProductCard from './components/ProductCard.vue';

export default {
  components: {
    Categories,
    ProductCard,
  },
  data() {
    return {
      activeCategory: '',
      isLoading: true,
      products: [],
    };
  },
  computed: {
    visibleProducts() {
      return this.activeCategory === '' ? this.products : this.products.filter(prod => prod.category === this.activeCategory);
    },
  },

  async created() {
    this.products = await getAllProducts();
    this.isLoading = false;
  },
  methods: {
    onSelect(selectedValue) {
      this.activeCategory = this.activeCategory === selectedValue ? '' : selectedValue;
    },
  },
};
</script>

<template>
  <h1>Products</h1>
  <div>
    <Categories :active-category="activeCategory" @select="onSelect" />
  </div>

  <progress v-if="isLoading" />

  <div v-else-if="visibleProducts.length > 0" class="products">
    <ProductCard
      v-for="prod in visibleProducts"
      :key="prod.title + prod.id"
      :product="prod"
    />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
</style>
