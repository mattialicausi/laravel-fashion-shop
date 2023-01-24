<template>
  <div class="my-card pb-5">
    <img
      :src="`${store.imgBasePath}${product.image}`"
      class="card-img-top pb-5"
      :alt="product.name"
    />
    <div class="card-body">
      <h4 class="card-title pb-4">
        {{ product.name }}
      </h4>

      <!-- <p class="card-text">
        {{ truncateText }}
      </p> -->
    </div>
  </div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 18rem;
  height: 30rem;
  margin: 0 2.5rem;
}
.card-img-top {
  width: 100%;
  height: 350px;

  img {
    padding-top: 20px;
  }
}

.card-title {
  text-align: center;
  font-size: 1.5rem;
  //da cambiare con nuova variabile
  color: rgb(90, 89, 89);
}
</style>
