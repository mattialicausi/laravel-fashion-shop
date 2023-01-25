<template>
   <section v-if="product">
        <h2>{{ product.name }}</h2>
        <div>

            <router-link :to="{ name: 'single-product', params: { slug: product.slug } }">
                <img :src="`${store.imgBasePath}${product.image}`" class="card-img-top pb-5 h-75" :alt="product.name"/>
            </router-link>
            
            <div class="card-body">

                <h4 class="card-title">{{ product.name }}</h4>
                <p class="card-text">{{ truncateText }}</p>
            </div>
        </div>
   </section>
   <section v-else>Loading</section>

 
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


</style>