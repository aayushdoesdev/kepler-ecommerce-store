<template>
  <main class="px-3 lg:px-16">
    <div class="bg-neutral-100 rounded-lg px-2 h-[60vh] lg:h-[105vh]">
      <div class="">
        <!-- Banner Section -->
        <img
          src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_3840/cms/3EiJ1YuBDHEw2H8HtlO7va/7a31eedc815188d19db508c8f083445f/24Q2-Core_TR_Hero_Women_Desktop_3840___1439-.jpg"
          alt=""
          class="mt-5 rounded-lg"
        />
      </div>
      <div class="mt-5 lg:mt-8 lg:flex lg:flex-col items-center lg:space-y-5">
        <h1 class="text-4xl font-semibold mb-3 lg:text-6xl">
          Your Escape Artist.
        </h1>
        <p class="text-lg font-bold lg:text-xl">
          Breathable, comfortable shoes that can take you just about anywhere.
        </p>
      </div>
      <div class="lg:flex items-center justify-center lg:mt-4">
        <p class="text-white bg-black inline-block px-4 py-2 text-xl mt-3 mr-3">
          Shop Men
        </p>
        <p class="text-white bg-black inline-block px-4 py-2 text-xl mt-3">
          Shop Women
        </p>
      </div>
    </div>



    <!-- New Products Section -->
    <div class="mt-12 px-5">
      <h1 class="text-3xl underline lg:text-5xl">New Arrivals</h1>
      <div
        class="flex flex-wrap justify-between px-2 mt-6 rounded max-h-[750px] overflow-hidden lg:hidden"
      >
        <swiper
          :slides-per-view="1"
          :navigation="true"
          :modules="modules"
          space-between="10"
          
        >
          <swiper-slide v-for="product in store.products" :key="store.id" @click="goToProductDetails(product.id)" >
            <div class="mt-5 ml-20 space-y-3">
              <img
                :src="product.image"
                alt="image"
                class="rounded-lg w-[300px] h-[350px]"
              />
              <h1 class="text-2xl font-semibold">{{ product.title }}</h1>
              <p class="text-lg font-semibold">${{ product.price }}</p>
              <p class="font-semibold">{{ truncatedDescription(product.description) }}</p>
              <button class="bg-black text-white px-6 py-2 rounded text-xl hover:bg-white hover:text-black border border-black transition duration-400 ease-in-out">
                Buy Now
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="hidden lg:flex items-center lg:mt-9">
        <swiper :slides-per-view="3" :navigation="true" :modules="modules" space-between="150">
          <swiper-slide v-for="product in store.products" :key="store.id">
            <div class="mt-5 space-y-4">
              <img
                :src="product.image"
                alt=""
                class="rounded-lg lg:w-[250px] lg:h-[300px]"
                width="250"
              />
              <h1 class="text-3xl font-semibold">{{ product.title }}</h1>
              <p class="text-xl font-bold">${{ product.price }}</p>
              <p class="font-semibold">{{ truncatedDescription(product.description) }}</p>
              <router-link to="products"><button class="bg-black text-white px-6 py-2 rounded text-xl mt-7 hover:bg-white hover:text-black border border-black transition duration-400 ease-in-out">
                Buy Now
              </button></router-link>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>


    <!-- Banner Section -->
    <div class="mt-20 lg:mt-28">
      <img
        src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1440/cms/24QzGcRbuw1bsB1FZTH2VK/45c841f4209229e7924df02160de2536/Secondary_Homepage_Desktop_-_Sustainability.jpg"
        alt=""
        class="rounded-lg lg:w-[1200px] m-auto"
      />
      <div
        class="flex flex-col items-center mt-4 space-y-5 lg:space-y-9 lg:mt-8 lg:px-16"
      >
        <h1 class="text-3xl text-center font-semibold lg:text-5xl">
          More Updates About Less Carbon
        </h1>
        <p class="text-lg text-center lg:text-xl">
          Reducing the carbon footprint of our products is at the heart of
          everything we do. And we've got good news: we continue to make
          headway. Read about our progress from 2022 in our latest Flight Status
          report.
        </p>
        <p class="text-white bg-black px-4 py-2 text-xl">
          Our Sustainability Strategy
        </p>
      </div>
    </div>



    <!-- About Us Section -->
    <div class="mt-20 mb-16 px-3 lg:space-y-10">
      <h1 class="font-bold text-3xl underline">The Keplar's Approach</h1>
      <div class="lg:flex items-center justify-evenly">
        <div class="mt-10 space-y-3 lg:max-w-[50vh]">
          <h2 class="text-xl font-bold">Wear-All-Day Comfort</h2>
          <p class="lg:text-lg">
            Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any
            outing feel effortless. Slip in, lace up, or slide them on and enjoy
            the comfy support. <span class="underline">Learn More</span>
          </p>
        </div>
        <div class="mt-5 space-y-3 lg:max-w-[50vh]">
          <h2 class="text-xl font-bold">Sustainablity In Every Step</h2>
          <p class="lg:text-lg">
            From materials to transport, we're working to reduce our carbon
            footprint to near zero. Holding ourselves accountable and striving
            for climate goals isn't a 30-year goal—it's now.
            <span class="underline">Learn More</span>
          </p>
        </div>
        <div class="mt-5 space-y-3 lg:max-w-[50vh]">
          <h2 class="text-xl font-bold">Materials from The Earth</h2>
          <p class="lg:text-lg">
            We replace petroleum-based synthetics with natural alternatives
            wherever we can. Like using wool, tree fiber, and sugar cane.
            They're soft, breathable, and better for the planet—win, win, win.
            <span class="underline">Learn More</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Contact Us Section -->
    <div
      class="flex flex-col items-center space-y-7 mb-16 bg-neutral-100 h-[25vh] justify-center rounded-lg"
    >
      <h1 class="font-semibold text-2xl lg:text-4xl">
        Want to suggest us how to improve our products?
      </h1>
      <router-link to="Contact"
        ><p class="text-white bg-black px-4 py-2 text-xl lg:text-2xl hover:bg-white hover:text-black border border-black transition duration-400 ease-in-out">
          Contact Us
        </p></router-link
      >
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

import "swiper/css";

export default defineComponent({
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
});
</script>

<script setup>
import { onMounted } from "vue";
import { productStore } from "@/stores/products";
import { useRouter } from "vue-router";


const router = useRouter()
const store = productStore();

const goToProductDetails = (id) => {
    router.push({name: "ProductPage", params: {id}})
}

const truncatedDescription = (title) => {
  if (title.length > 100) {
    return title.slice(0, 100) + "...";
  } else {
    return title;
  }
};

onMounted(async () => {
  await store.fetchProductsFromDB();
  console.log(store.products);
});
</script>
