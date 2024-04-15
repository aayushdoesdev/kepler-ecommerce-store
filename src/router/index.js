import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import ProductView from "@/views/ProductView.vue"
import ProductDetails from "@/views/ProductDetails.vue"
import CartView from "@/views/CartView.vue"
import ContactView from "@/views/ContactView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/products",
      name: "Products",
      component: ProductView
    },
    {
      path: "/products/:id",
      name: "ProductPage",
      component: ProductDetails
    },
    {
      path: "/cart",
      name: "Cart",
      component: CartView
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView
    }
  ]
})

export default router
