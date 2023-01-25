<template>
  <router-link
    class="btn"
    :to="{ name: 'single-product', params: { slug: product.slug } }"
  >
    <div class="my-card">
      <img
        :src="`${store.imgBasePath}${product.image}`"
        class="card-img-top pb-5"
        :alt="product.name"
      />
      <div class="card-body">
        <h4 class="card-title">
          {{ product.name }}
        </h4>

        <p class="card-text">{{ truncateText }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { store } from "../store";

export default {
  name: "CardComponent",
  props: {
    product: Object,
  },
  data() {
    return {
      store,
      textMaxLen: 55,
    };
  },
  computed: {
    truncateText() {
      if (this.product.description.length > this.textMaxLen) {
        return this.product.description.substr(0, this.textMaxLen) + "...";
      }
      return this.product.description;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.my-card {
  width: 15rem;
  height: 30rem;
  margin: 0 1.8rem;
}
.card-img-top {
  width: 100%;
  height: 300px;

  img {
    padding-top: 20px;
    max-width: 100%;
  }
}

.card-title {
  text-align: center;
  font-size: 1.5rem;
  color: $darkgrey;
}

.card-text {
  text-align: center;
  padding-top: 1rem;
  color: $darkgrey;
}
</style>
