<template>
    <section v-if="product" class="h-75 my-5">

            <router-link :to="{ name: 'single-product', params: { slug: product.slug } }">
                <img :src="`${store.imgBasePath}${product.image}`" class="card-img-top h-75" :alt="product.name"/>
            </router-link>
            
            <div class="card-body">
                <div class="card-title brand-name text-uppercase">
                    {{ product.brand.name }}
                </div>
                <h5 class="card-title product-title">{{ product.name }}</h5>
                <h5 class="card-title product-price">€{{ product.prezzo }}</h5>
            </div>

    </section>
   <section v-else>Out of stock</section>

 
</template>

<script>
import {store} from '../store';

    export default {
        name: 'FilteredCategoryComponent',

        props: {
            product: Object,
        },

        data() {
            return {
                store,
                textMaxLen: 55,
                // item: this.props.product,
                categoryObject: [],
            }
        },

        methods: {
            getFilteredProducts() {
                this.props.product.forEach((item) => {
                    if (item.category_id == 5) {
                        this.categoryObject.push(item);
                    }
                });
                console.log(this.categoryObject);

            }   
        },

        mounted() {
            //this.getFilteredProducts();
        },

        // computed: {
        //     truncateText() {
        //         if (this.product.description.length > this.textMaxLen) {
        //             return this.product.description.substr(0, this.textMaxLen) + "...";
        //         }
        //         return this.product.description;
        //     },
        // },
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
    height: 100%;
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