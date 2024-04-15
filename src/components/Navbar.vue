<template>
  <main class=" h-28 sticky top-0 bg-white shadow-sm z-20">
    <div class="flex justify-between px-7 py-3 cursor-pointer">
      <div class="text-2xl lg:hidden" @click="handleNav">
        <i class="pi pi-times z-20" v-if="open" ></i>
        <i class="pi pi-bars" v-else></i>
      </div>

      <div v-if="open">
        <ul class="absolute top-[110px] text-3xl font-bold bg-neutral-800 text-white h-[100vh] w-[45vh] duration-700 ease-in-out" :class="[open ? 'left-0' : 'left-[-100%]']">
          <router-link to="Products"><li class="mt-10 ml-10">Our Products</li></router-link>
          <router-link to="Contact"><li class="mt-10 ml-10">Contact Us</li></router-link>
          <router-link to="Cart"><li class="mt-10 ml-10" @click="">Cart</li></router-link>
        </ul>
      </div>



      <div class="lg:flex  items-center hidden">
        <ul class="flex space-x-14 text-lg font-semibold">
          <router-link to="Products"><li>Our Products</li></router-link>
          <li class="text-red-500">Sale</li>
          <router-link to="Contact"><li>Contact Us</li></router-link>
        </ul>
      </div>

      <router-link to="/"><h1 class="font-dancingScript text-3xl font-semibold lg:text-4xl">Kepler</h1></router-link>

      <div class="text-2xl flex items-center gap-1 space-x-7">
        <div class="space-x-8 hidden lg:flex">
          <ul class="flex text-lg font-semibold space-x-6">
            <li>Sustainability</li>
            <li>Stores</li>
          </ul>
        <i class="pi pi-user"></i>
        <i class="pi pi-question-circle"></i>
      </div>
      <div class="flex items-center gap-2">
        <router-link to="Cart"><i class="pi pi-shopping-cart"></i></router-link>
        <p class="text-sm font-bold">{{ store.cart.length }}</p>
      </div>
      </div>
    </div>
    <div class="flex justify-center items-center relative">
      <i class="pi pi-search absolute ml-[-450px] text-neutral-400"></i>
      <input type="search" class="bg-neutral-100 w-[30rem] rounded-lg h-7 px-8 text-neutral-500" placeholder="Search"/>
    </div>
  </main>
</template>

<script setup>
import "primeicons/primeicons.css";
import { useRouter } from "vue-router";
import {RouterLink} from "vue-router"
import { productStore } from "@/stores/products";
import { ref } from "vue";

const open = ref(false)
const store = productStore()
const router = useRouter()

const handleNav = () => {
  open.value = !open.value
}

const closeNav = () => {
  open.value = false
}

</script>
