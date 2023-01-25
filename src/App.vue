<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <NavBarComponent />
  </div>

  <main>
    <router-view> </router-view>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import NavBarComponent from "./components/NavBarComponent.vue";

export default {
  components: {
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
  },
  //   methods: {
  //     selected(crumb) {
  //       console.log(crumb);
  //     },
  //   },
};
</script>

<style lang="scss" scoped></style>
