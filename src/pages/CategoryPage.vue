<template>
  <div class="container">
    <BreadCrumbComponent
      class="row align-items-center"
      :crumbs="crumbsLinks"
      @selected="selected"
    />
    <h1 class="py-4">Our products</h1>

    <div class="row">
      <div
        class="col-4 my-card px-4"
        v-for="(product, index) in products"
        :key="index"
      >
        <router-link
          :to="{ name: 'single-product', params: { slug: product.slug } }"
        >
          <img
            class="card-img-top h-75"
            :src="`${store.imgBasePath}${product.image}`"
            :alt="'Image of ' + product.name"
          />
        </router-link>

        <div class="card-body">
          <div class="card-title brand-name text-uppercase">
            {{ product.brand.name }}
          </div>
          <h5 class="card-title product-title">{{ product.name }}</h5>
          <h5 class="card-title product-price">€{{ product.prezzo }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";

export default {
  name: "CategoryPage",
  data() {
    return {
      store,
      crumbsLinks: store.crumbsLinks,
      products: [],
    };
  },
  components: { BreadCrumbComponent },
  methods: {
    getProducts() {
      axios.get(`${this.store.apiBaseUrl}/products`).then((res) => {
        this.products = res.data.results;
        // console.log(this.products);
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

h1 {
  font-size: 3rem;
}

.my-card {
  padding: 0;

  .card-img-top {
    opacity: 1;
    transition: 300ms ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: 300ms ease-in-out;
    }
  }
}

.brand-name {
  font-size: 1.2rem;
  padding: 1rem 0 1rem 0;
}

.product-title {
  font-size: 1.6rem;
  padding-bottom: 1rem;
}

.product-price {
  font-size: 1.6rem;
  color: $alert;
}
</style>
