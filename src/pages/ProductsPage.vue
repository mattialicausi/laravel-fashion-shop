<template>
    <h2>Product Page</h2>

    <div v-for="(product, index) in products" :key="index" >
        <h2>{{ product.name }}</h2>
        <img :src="`${store.imgBasePath}${product.image}`" alt="img of + product.name">
    </div>
</template>

<script>

import {store} from '../store';
import axios from 'axios';
import { DOMDirectiveTransforms } from '@vue/compiler-dom';

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