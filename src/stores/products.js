import { defineStore } from "pinia";

export const productStore = defineStore("products", {
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    fetchProductsFromDB() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
          this.products = res;
        });
    },
    addToCart(product){
        this.cart.push(product)
    },
    removeFromCart(id){
       this.cart = this.cart.filter((item) => item.id !== id)
    }
  },
});
