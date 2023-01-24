<template>
  <!-- JUMBO -->
  <div class="parallax">
    <div class="container d-flex justify-content-end">
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6 jumbo-txt mt-5">Crea un look impeccabile</div>
      </div>
    </div>
  </div>

  <!-- SLIDER -->

  <div class="my-container">
    <h1>I Rossetti</h1>
  </div>

  <div class="my-container">
    <section class="outer-container-cards">
      <button class="carousel-btn left-btn" @click="scrollLft">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <div ref="box" class="cards-container">
        <div class="d-flex">
          <div class="col" v-for="(item, index) in products" :key="index">
            <CardComponent :product="item"></CardComponent>
          </div>
        </div>
      </div>
      <button class="carousel-btn right-btn" @click="scrollRgt">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </section>
  </div>

  <div class="my-container">
    <h1>Gli ombretti</h1>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "HomePage",
  props: {
    product: Object,
  },
  components: { CardComponent },
  data() {
    return {
      store,
      products: [],
    };
  },
  methods: {
    getProducts() {
      axios.get(`${this.store.apiBaseUrl}/products`).then((res) => {
        this.products = res.data.results;

        console.log(this.products);
      });
    },
    scrollLft() {
      const element = this.$refs.box;
      element.scrollBy({
        left: -910,
        behavior: "smooth",
      });
    },
    scrollRgt() {
      const element = this.$refs.box;
      element.scrollBy({
        left: 910,
        behavior: "smooth",
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
@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");

.parallax {
  background-image: url("https://img.freepik.com/fotos-premium/spiegel-mit-lidschatten-und-puderpinsel-auf-rosa-tisch_23-2148047056.jpg?w=1060");
  height: 60vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.jumbo-txt {
  text-align: center;
  font-family: "Aboreto", cursive;
  font-size: 5.3rem;
  color: $white;
  font-weight: 700;
  letter-spacing: 1rem;
}

h1 {
  padding: 8rem 0;
}

//style slider
.my-container {
  width: 90%;
  margin: 0 auto;
}

.outer-container-cards {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;

  .cards-container {
    width: 100%;
    display: flex;
    overflow-x: auto;
  }
}

.carousel-btn {
  background-color: transparent;
  height: 50px;
  border-style: none;
  color: $gray;

  i {
    font-size: 3rem;
  }
}

.left-btn {
  padding-right: 4rem;
}

.right-btn {
  padding-left: 4rem;
}

//style scrollbar slider
::-webkit-scrollbar {
  height: 4px;
}

// Handle
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background: $secondaryColor;
  width: 10%;
}
</style>
