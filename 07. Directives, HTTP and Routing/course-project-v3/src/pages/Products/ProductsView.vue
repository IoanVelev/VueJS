<script>
import { getAllProducts, getProductsByCategory } from '../../services/products';
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
  async created() {
    this.products = await getAllProducts();
    this.isLoading = false;
  },
  methods: {
    async onSelect(selectedValue) {
      const category = this.activeCategory === selectedValue ? '' : selectedValue;
      this.activeCategory = category;

      await this.loadProductsByCategory(category);
    },

    async loadProductsByCategory(category) {
      category
        ? this.products = await getProductsByCategory(category)
        : this.products = await getAllProducts();
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

  <div v-else-if="products.length > 0" class="products">
    <ProductCard
      v-for="prod in products"
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
