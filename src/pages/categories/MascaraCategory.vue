<template>
  <div class="container customh">
    <h1 class="tit">I nostri Mascara:</h1>
    <div class="row">
      <div class="col-3 px-4" v-for="(product, index) in categoryObject" :key="index">
        <FilteredCategoryComponent :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import FilteredCategoryComponent from "../../components/FilteredCategoryComponent.vue";

import { store } from "../../store";

import axios from "axios";

export default {
  name: "RossettiCategoryPage",

  components: { FilteredCategoryComponent },

  data() {
    return {
      store,
      allProducts: [],
      categoryObject: [],
    };
  },

  methods: {
    getAllProducts() {
      axios.get(`${this.store.apiBaseUrl}/products`).then((res) => {
        this.allProducts = res.data.results;
        console.log(this.allProducts);

        this.allProducts.forEach((item) => {
          if (item.category_id == 9) {
            this.categoryObject.push(item);
          }
        });
        console.log(this.categoryObject);
      });
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style lang="scss" scoped>

</style>
