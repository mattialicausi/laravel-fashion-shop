<template>
  <div class="wrapper">
    <!-- JUMBO -->
    <div class="parallax">
      <div class="container d-flex justify-content-end">
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6 jumbo-txt">Per un look impeccabile</div>
        </div>
      </div>
    </div>

    <!-- SLIDER -->

    <div class="my-container">
      <h1>I Rossetti</h1>
      <hr />
    </div>

    <SliderLipstick></SliderLipstick>

    <div class="my-container">
      <h1>Gli Ombretti</h1>
      <hr />
    </div>

    <SliderEyeshadow></SliderEyeshadow>

    <div class="my-container">
      <h1>I Fondotinta</h1>
      <hr />
    </div>

    <SliderFoundation></SliderFoundation>

    <div class="my-container d-flex justify-content-end pt-5">
      <router-link class="btn-discover" :to="{ name: 'category' }">
        Scopri di pi&ugrave;<i class="fa-solid fa-caret-right ps-2"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import SliderLipstick from "../components/SliderLipstick.vue";
import SliderEyeshadow from "../components/SliderEyeshadow.vue";
import SliderFoundation from "../components/SliderFoundation.vue";

export default {
  name: "HomePage",
  components: { SliderLipstick, SliderEyeshadow, SliderFoundation },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");

.parallax {
  background-image: url("https://img.freepik.com/fotos-premium/spiegel-mit-lidschatten-und-puderpinsel-auf-rosa-tisch_23-2148047056.jpg?w=1060");
  height: 65vh;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
}

.jumbo-txt {
  text-align: center;
  font-family: "Aboreto", cursive;
  font-size: 5.3rem;
  color: $mainColor;
  font-weight: 700;
  letter-spacing: 1rem;
  margin-top: 5rem;
}

h1 {
  padding: 7rem 0 1rem;
}

hr {
  padding-bottom: 5rem;
}
.my-container {
  width: 90%;
  margin: 0 auto;
}

.wrapper {
  padding-bottom: 7rem;
}

.btn-discover {
  background-color: $mainColor;
  color: $white;
  border-style: none;
  padding: 10px 18px;
  border-radius: 20px;

  &:hover {
    opacity: 0.9;
  }
}

a {
  text-decoration: none;

  &:hover {
    color: $white;
  }
}
</style>
