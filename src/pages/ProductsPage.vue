<template>
    <h2>Product Page</h2>
    <div class="row my-5">
        <div class="col-3" v-for="(product, index) in products" :key="index" >
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="`${store.imgBasePath}${product.image}`" :alt=" 'Image of ' + product.name">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                    <a href="#" class="btn btn-primary">€ {{product.prezzo}}</a>
                </div>
            </div>
        </div>
    </div>
    

    
</template>

<script>

import {store} from '../store';
import axios from 'axios';

    export default {
        name: 'ProductPage',

        data () {
            return {
                store,
                products: [],
                
            }
        },

        methods: {
            getProducts() {
                axios.get(`${this.store.apiBaseUrl}/products`).then ((res) => {

                    this.products = res.data.results;

                    console.log(this.products);
                });
            }
        },

        mounted() {
            this.getProducts();
        },
    }
</script>

<style lang="scss" scoped>

</style>