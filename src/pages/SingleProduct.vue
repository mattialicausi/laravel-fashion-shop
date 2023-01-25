<template>
  <section class="my-5" v-if="product">
    <div class="container">
      <BreadCrumbComponent
        class="row align-items-center"
        :crumbs="crumbsLinks"
        @selected="selected"
      />
      <div class="row">
        <div class="col-6">
          <img
            class="card-img-top"
            :src="`${store.imgBasePath}${product.image}`"
            :alt="'Image of ' + product.name"
          />
        </div>
        <div class="col-6 d-flex flex-column justify-content-around">
          <h3 class="price">€ {{ product.prezzo }}</h3>
          <h3 class="name fw-bold">{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <h4>{{ product.texture.name }}</h4>
          <ul class="container-colori">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <a href="#" class="rounded-pill myBtn w-25"
            >Add in the cart <i class="fa-solid fa-cart-shopping"></i
          ></a>
        </div>
      </div>
    </div>
  </section>

  <section v-else="">//Loading circle</section>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";

export default {
  name: "SingleProduct",

  data() {
    return {
      store,
      crumbsLinks: store.crumbsLinks,
      product: null,
    };
  },
  components: {
    BreadCrumbComponent,
  },
  methods: {
    getProduct() {
      axios
        .get(`${this.store.apiBaseUrl}/products/${this.$route.params.slug}`)
        .then((response) => {
          if (response.data.success) {
            this.product = response.data.results;
          } else {
            this.$router.push({ name: "not-found" });
          }
          console.log(this.product);
        });
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.price {
  font-size: 3rem;
  color: $alert;
}

.name {
  font-size: 3rem;
}

p {
  font-size: 1.3rem;
}

.container-colori {
  display: flex;
  justify-content: space-between;
  width: 50%;
  list-style: none;

  li {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: $dark;
  }
}

a {
  text-decoration: none;
  background-color: $mainColor;
  color: $white;
  padding: 10px;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: $white;
    color: $mainColor;
    transition: 300ms ease-in-out;
  }
}

img {
  height: 100%;
}
</style>
