<template>
  
    <header>
        <HeaderComponent/>
        
    </header> 
    <div>
      <NavBarComponent/>
    </div>
    

      <main>
        <div class="container mt-5">
          <BreadCrumbComponent class=" row align-items-center" :crumbs= "crumbsLinks" @selected= "selected"/>
        </div>
    
       <router-view></router-view>
    </main>


  <footer>
    <FooterComponent/>
  </footer>

</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import BreadCrumbComponent from './components/BreadCrumbComponent.vue';


  export default {
    components: { HeaderComponent, NavBarComponent, FooterComponent, BreadCrumbComponent },

    data () {
      return {

        crumbsLinks: [
                  {
                      label: 'Home',
                      routeName: 'home'
                  },
                  {
                      label: 'Products',
                      routeName: 'category'
                  },
                  // {
                  //     label: 'Product',
                  //     routeName: 'single-product'
                  // },
                   
        ],

      }
    },
    methods: {

      selected(crumb) {
        console.log(crumb)
      }

    },
}
</script>

<style lang="scss" scoped>

</style>
