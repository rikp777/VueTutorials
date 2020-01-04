<template>
    <div>
        <h1>Product List</h1>
        <img
                v-if="loading"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif">
        <ul v-else>
            <li v-for="product in products">
                {{product.title}} - {{product.price}} - {{product.quantity}}
                <button
                        :disabled="!productIsInStock(product)"
                        @click="addProductToCart(product)"
                >Add to cart
                </button>
            </li>
        </ul>
    </div>

</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: "ProductList",
        data() {
            return {
                loading: false,
                productIndex: 1
            }
        },

        computed: {
            ...mapState({
                products: state => state.products.items
            }),

            ...mapGetters({
                productIsInStock: 'products/productIsInStock'
            })
        },

        methods: {
            ...mapActions('products', {
                fetchProducts: 'fetchProducts',
            }),
            ...mapActions('cart', {
                addProductToCart: 'addProductToCard'
            }),
        },

        created() {
            //throw(this.$store.getters);
            this.loading = true;
            this.fetchProducts()
                .then(() => {
                    this.loading = false;
                })
        }
    }
</script>

<style scoped>

</style>