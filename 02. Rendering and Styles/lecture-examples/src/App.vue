<script>
export default {
  data() {
    return {
      title: 'Hello world',
      isDay: true,
      cartProducts: [
        {
          id: 1,
          name: 'Smartphone',
          price: 499.99,
          quantity: 2,
        },
        {
          id: 2,
          name: 'Laptop',
          price: 999.99,
          quantity: 1,
        },
        {
          id: 3,
          name: 'Headphones',
          price: 79.99,
          quantity: 3,
        },
        {
          id: 4,
          name: 'Tablet',
          price: 299.99,
          quantity: 2,
        },
      ],
      inventory: [
        {
          id: 1,
          name: 'Electronics',
          products: [
            {
              id: 1,
              name: 'Smartphone',
              price: 499.99,
              quantity: 2,
            },
            {
              id: 2,
              name: 'Laptop',
              price: 999.99,
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Audio',
          products: [
            {
              id: 3,
              name: 'Headphones',
              price: 79.99,
              quantity: 3,
            },
          ],
        },
      ],
      bookInfo: {
        title: 'The Magical Adventure',
        author: 'John Smith',
        genre: 'Fantasy',
        publishedAt: '2023-07-15',
        pages: 320,
        rating: '★★★★☆',
      },
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery',
        ],
      },
    };
  },
  computed: {
    hasBooks() {
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
  },
  methods: {
    onClick() {
      this.isDay = !this.isDay;
    },
    changeTitleText(arg, eventObj) {
      console.log('Change title text - ', eventObj);

      if (this.title === 'Hello world') {
        this.title = arg;
      }
      else {
        this.title = 'Hello world';
      }
    },
    clickEventModifier() {
      console.log('Clicked event modifier');
    },
  },
};
</script>

<template>
  <h1 :class="[title === 'Goodbye' ? 'changedTitle' : 'originalTitle']">
    {{ title }}
  </h1>
  <h2 v-if="isDay">
    It's sunny outside! &#127774;
  </h2>
  <h2 v-else>
    It's dark outside! &#x1F311;
  </h2>
  <button @click="onClick">
    Toggle
  </button>
  <h3 v-show="!isDay">
    This text is shown when it's not a day.
  </h3>
  <h3>Products:</h3>
  <br>
  <br>
  <ul>
    <li v-for="product in cartProducts" :key="product.id">
      {{ product.name }}
    </li>
  </ul>

  <div>
    <h4>Books:</h4>
    <p v-for="(book, key, indx) in bookInfo" :key="indx">
      {{ ` ${key}: ${book} ` }}
    </p>
  </div>

  <button class="titleChanger" @click="changeTitleText('Goodbye', $event)">
    Change title
  </button>
  <button @click.ctrl.exact="clickEventModifier">
    Event modifiers
  </button>
  <br>
  <br>
  <p>{{ author.name }} has published books:</p>
  <span>{{ hasBooks }}</span>
</template>

<style>
.titleChanger {
  display: flex;
  justify-self: center;
}

.originalTitle {
  color: green;
}

.changedTitle {
  color: red;
}
</style>
