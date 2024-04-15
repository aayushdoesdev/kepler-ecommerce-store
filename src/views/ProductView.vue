<template>
  <main class="px-8">
    <div class="space-y-1 mt-4">
      <p class="text-sm font-medium">Home / Products /</p>
      <h1 class="text-2xl font-semibold">Everyday Products</h1>
    </div>
    <div class="mt-6 flex justify-between">
      <div
        class="flex gap-8 border-2 border-neutral-400 w-[180px] justify-center items-center py-1 rounded-3xl font-semibold"
      >
        <p>Women</p>
        <p class="bg-black text-white px-4 rounded-3xl py-1">Men</p>
      </div>
      <div
        class="flex gap-8 border-2 border-neutral-400 w-[150px] justify-between px-6 items-center rounded-3xl font-semibold"
      >
        <p class="text-neutral-700 text-lg">Filter</p>
        <i class="pi pi-sliders-h text-2xl"></i>
      </div>
    </div>
    <div class="flex flex-wrap gap-4 ">
    <div class="flex flex-wrap gap-4 mb-8 lg:gap-10 cursor-pointer" v-for="product in store.products" :key="store.id" @click="goToProductDetails(product.id)">
      <div
        class="mt-5 bg-neutral-100 w-[250px] max-h-[350px] flex flex-col items-center rounded-lg lg:w-[320px] lg:h-[420px] lg:space-y-3"
      >
        <img
          :src="product.image"
          class="rounded-lg mt-4 w-[150px] h-[150px]"
          alt=""
        />
        <h1 class=" font-semibold text-center lg:text-xl">{{ truncatedTitle(product.title) }}</h1>
        <p class="font-medium text-center lg:text-lg">Rating: {{ product.rating.rate }} stars</p>
        <p class="font-bold">${{ product.price }}</p>
      </div>
    </div>
  </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Products",
});
</script>

<script setup>
import { onMounted } from "vue";
import { productStore } from "@/stores/products";
import { useRouter } from "vue-router";

const router = useRouter();
const store = productStore();

const goToProductDetails = (id) => {
    router.push({name: "ProductPage", params: {id}})
}

const truncatedTitle = (title) => {
  if (title.length > 50) {
    return title.slice(0, 50) + "...";
  } else {
    return title;
  }
};

onMounted(async () => {
  await store.fetchProductsFromDB();
  // console.log(store.products);
});
</script>
