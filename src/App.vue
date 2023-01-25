<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <NavBarComponent />
  </div>

  <main>
    <!-- <BreadCrumbComponent
        class="row align-items-center"
        :crumbs="crumbsLinks"
        @selected="selected"
      /> -->

    <router-view></router-view>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import NavBarComponent from "./components/NavBarComponent.vue";
// import BreadCrumbComponent from "./components/BreadCrumbComponent.vue";

export default {
  components: {
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    // BreadCrumbComponent,
  },
};
</script>

<style lang="scss" scoped></style>
