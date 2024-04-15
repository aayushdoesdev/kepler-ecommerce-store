<template>
  <main class="px-5 lg:px-10">
    <div class="h-[80vh]" v-if="!store.cart.length">
      <h1 class="text-2xl font-bold text-center mt-10">
        Add Something to Cart...
      </h1>
    </div>
    <div class="" v-else>
      <h1 class="text-3xl font-bold mt-8 lg:text-5xl">Orders.</h1>
      <div
        class="flex justify-between border border-neutral-400 px-3 py-3 rounded mt-8"
        v-for="item in store.cart"
        :key="item.id"
      >
        <div class="flex gap-4">
          <img :src="item.image" width="100" alt="" class="lg:w-[150px] h-[200px]" />
          <div class="flex flex-col space-y-1">
            <p class="text-xl font-semibold lg:text-3xl">{{ truncatedTitle(item.title) }}</p>
            <p class="text-sm lg:text-lg uppercase">{{ item.category }}</p>
            <p class="text-lg font-semibold lg:text-xl">Rating: {{ item.rating.rate }} stars</p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between">
          <button class="text-2xl lg:text-4xl" @click="removeFromCart(item.id)">
            x
          </button>
          <p class="text-xl font-bold lg:text-2xl">${{ item.price }}</p>
        </div>
      </div>

      <div class="border-b-2 border-neutral-300 mt-16"></div>

      <div class="flex items-center justify-between mt-4">
        <div class="text-xl font-semibold space-y-3 lg:text-2xl">
          <h3>Subtotal</h3>
          <h3>GST 18% <span class="text-sm">(9% CGST & 9% SGST)</span></h3>
          <h3>Shipping</h3>
        </div>
        <div class="font-medium text-xl space-y-3 lg:text-2xl">
          <p>&#x20b9; {{ subTotal }}</p>
          <p>&#x20b9; {{ gst }}</p>
          <p>Free</p>
        </div>
      </div>

      <div class="border-b-2 border-neutral-300 mt-16"></div>

      <div class="flex items-center justify-between mt-4">
        <div class="text-xl font-bold space-y-3 lg:text-2xl">
          <h3>Grand Total</h3>
        </div>
        <div class="font-medium text-xl space-y-3 lg:text-2xl">
          <p>&#x20b9; {{ grandTotal }}</p>
        </div>
      </div>
      <div class="text-center bg-black text-white py-2 mt-8 rounded mb-16">
        <button class="text-xl font-semibold lg:text-2xl" @click="proceedCheckout">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Cart",
});
</script>

<script setup>
import { productStore } from "@/stores/products";
import { computed } from "vue";
const store = productStore();

const truncatedTitle = (title) => {
  if (title.length > 50) {
    return title.slice(0, 50) + "...";
  } else {
    return title;
  }
};

const removeFromCart = (id) => {
  store.removeFromCart(id);
};

const proceedCheckout = () => {
  store.checkOut()
}

const subTotal = computed(() => {
  return store.cart.reduce((total, item) => Math.floor(total + item.price * 83), 0);
});

const gst = computed(() => {
    return Math.floor(subTotal.value * 0.18)
})

const grandTotal = computed(() => {
  return subTotal.value + gst.value
})
</script>
