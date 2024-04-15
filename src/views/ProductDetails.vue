<template>
  <main class="px-8 lg:px-14">
    <div class="">
      <p class="text-sm font-medium my-3">
        Home / Products / Everyday Products /
      </p>
    </div>
    <div class="lg:flex justify-between">
      <div class="lg:flex-row max-w-[80vh]">
        <div class="flex items-center justify-between lg:gap-4">
          <h1 class="text-2xl font-semibold lg:text-4xl">
            {{ truncatedTitle(selectedProduct.title) }}
          </h1>
          <p class="text-xl font-semibold lg:text-2xl">
            ${{ selectedProduct.price }}
          </p>
        </div>
        <div class="flex justify-between items-center mt-3">
          <div class="space-x-1 flex items-center">
            <i class="pi pi-star-fill"></i>
            <i class="pi pi-star-fill"></i>
            <i class="pi pi-star-fill"></i>
            <i class="pi pi-star-fill"></i>
            <i class="pi pi-star"></i>
            <p>(98)</p>
          </div>
          <p
            class="bg-neutral-200 text-center w-[130px] py-1 rounded uppercase"
          >
            Free Shipping
          </p>
        </div>
        <div class="mt-8 hidden lg:mt-16 lg:block">
          <p class="text-xl font-semibold">Select Size:</p>
          <ul class="flex gap-2 mt-4">
            <li class="border border-neutral-400 px-5 py-3 text-xl">8</li>
            <li
              class="border border-neutral-400 px-5 py-3 text-xl text-neutral-500"
            >
              9
            </li>
            <li
              class="border border-neutral-400 px-5 py-3 text-xl text-neutral-500"
            >
              10
            </li>
            <li class="border border-neutral-400 px-5 py-3 text-xl">11</li>
            <li class="border border-neutral-400 px-5 py-3 text-xl">12</li>
            <li
              class="border border-neutral-400 px-5 py-3 text-xl text-neutral-500"
            >
              13
            </li>
            <li
              class="border border-neutral-400 px-5 py-3 text-xl text-neutral-500"
            >
              14
            </li>
          </ul>
          <p class="underline text-sm font-semibold mt-2 cursor-pointer">
            See Size Chart
          </p>

          <p
            class="text-center text-xl font-semibold text-white bg-black py-2 mt-5 rounded cursor-pointer hover:bg-white hover:text-black border border-black transition duration-400 ease-in-out"
            @click="goToCart"
          >
            Add to Cart
          </p>
          <div class="text-center mt-4 space-y-1">
            <p class="text-sm">
              or 4 interest-free payment of $24.50 with PayPal
            </p>
            <p class="font-semibold">
              Free 2-Day Shipping & Returns with SHOPRUNNER
            </p>
            <p class="text-sm">
              Free shipping on orders over $75. Free returns.
            </p>
          </div>
        </div>
      </div>
      <div class="">
        <img
          :src="selectedProduct.image"
          class="rounded-lg mt-4 lg:w-[400px] lg:mt-0"
          width="600"
          alt="image"
        />
      </div>
    </div>
    <div class="mt-8 lg:mt-16 lg:hidden">
      <p class="text-xl font-semibold">Select Size:</p>
      <ul class="flex gap-2 mt-4">
        <li class="border border-neutral-400 px-5 py-3 text-xl">8</li>
        <li
          class="border border-neutral-400 px-5 py-3 text-xl text-neutral-500"
        >
          9
        </li>
        <li
          class="border border-neutral-400 px-5 py-3 text-xl text-neutral-500"
        >
          10
        </li>
        <li class="border border-neutral-400 px-5 py-3 text-xl">11</li>
        <li class="border border-neutral-400 px-5 py-3 text-xl">12</li>
        <li
          class="border border-neutral-400 px-5 py-3 text-xl text-neutral-500"
        >
          13
        </li>
        <li
          class="border border-neutral-400 px-5 py-3 text-xl text-neutral-500"
        >
          14
        </li>
      </ul>
      <p class="underline text-sm font-semibold mt-2 cursor-pointer">
        See Size Chart
      </p>

      <button
        class="text-center text-xl font-semibold text-white bg-black py-2 px-48 mt-5 rounded cursor-pointer hover:bg-white hover:text-black border border-black transition duration-400 ease-in-out"
        @click="goToCart"
      >
        Add to Cart
      </button>
      <div class="text-center mt-4 space-y-1">
        <p class="text-sm">or 4 interest-free payment of $24.50 with PayPal</p>
        <p class="font-semibold">
          Free 2-Day Shipping & Returns with SHOPRUNNER
        </p>
        <p class="text-sm">Free shipping on orders over $75. Free returns.</p>
      </div>
    </div>


    <!-- Banner  Section -->
    <div class="mt-10 lg:flex lg:gap-10 lg:items-center">
      <img
        src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_375/cms/7N2T54CAzWM4HqpybqwwRN/ba60f8aae8623c191d27a5de43d5cdc9/23Q3_SNS_BelowTheFold-01_Mobile_Courier-W.jpg"
        width="600"
        alt="image"
        class="mb-5 lg:w-[800px]"
      />
      <div class="">
        <h3 class="font-semibold text-2xl lg:text-3xl">Versatile Design</h3>
        <h1 class="font-semibold text-3xl mt-2 lg:text-4xl lg:font-bold">
          A Classic, Anywhere
        </h1>
        <p class="text-lg mt-6 lg:text-xl lg:font-semibold">
          The clean, retro silhouette keeps things casual while the intricate
          details give this sneaker enough elevated oomf to wear out and about.
        </p>
      </div>
    </div>


    <!-- Banner Section -->
    <div
      class="mt-10 lg:flex lg:gap-10 lg:items-center lg:flex-row-reverse lg:mt-20"
    >
      <img
        src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_860/cms/4f1yRdH0nzoeOnYOtBAIv3/35167a78060f50b2c17f3c3e6c54a1d5/23Q3_SNS_BelowTheFold-03_Desktop_Courier-Men.jpg"
        width="600"
        alt="image"
        class="mb-5 lg:w-[800px]"
      />
      <div class="">
        <h3 class="font-semibold text-2xl lg:text-3xl">Versatile Design</h3>
        <h1 class="font-semibold text-3xl mt-2 lg:text-4xl lg:font-bold">
          A Classic, Anywhere
        </h1>
        <p class="text-lg mt-6 lg:text-xl lg:font-semibold">
          The clean, retro silhouette keeps things casual while the intricate
          details give this sneaker enough elevated oomf to wear out and about.
        </p>
      </div>
    </div>



    <!-- Reviews Section -->
    <div class="mt-10 mb-5">
      <h1 class="text-xl font-bold border-b-2 py-6 underline">98 Reviews</h1>
    </div>
    <div class="space-y-2">
      <h1 class="text-2xl font-bold lg:text-3xl">1st Kepler shoe pair</h1>
      <p class="lg:text-xl">Comfortable and Stable</p>
      <div class="bg-neutral-200 px-4 py-3 rounded space-y-1">
        <h1 class="text-xl font-bold mb-5 lg:text-3xl">
          Gnani J. <span class="font-light text-sm">(Verified Buyer)</span>
        </h1>
        <p class="text-sm font-semibold lg:text-xl lg:font-bold">
          Activity Level:
          <span class="font-normal lg:font-light">Commuting</span>
        </p>
        <p class="text-sm font-semibold lg:text-xl">
          Overall Fit: <span class="font-normal lg:font-light">Just Right</span>
        </p>
        <p class="text-sm font-semibold lg:text-xl">
          Size Purchased: <span class="font-normal lg:font-light">11</span>
        </p>
        <p class="text-sm font-semibold lg:text-xl">
          Typical Size: <span class="font-normal lg:font-light">10.5</span>
        </p>
        <p class="text-sm font-semibold lg:text-xl">
          Typical Width: <span class="font-normal lg:font-light">Wide</span>
        </p>
      </div>
    </div>
    <div class="mt-2 mb-2">
      <h1 class="text-xl font-bold border-b-2 py-5"></h1>
    </div>
    <div class="space-y-4 mb-16">
      <h1 class="text-2xl font-bold lg:text-3xl">Looks good, rides ok</h1>
      <p class="lg:text-xl lg:max-w-[150vh]">
        I enjoy the look and I get a lot of compliments. They are a little on
        the tight side and I have a narrow foot. The green and red portions of
        the shoe are beginning to crack and rip.
      </p>
      <div class="bg-neutral-200 px-4 py-3 rounded space-y-1">
        <h1 class="text-xl font-bold mb-5">
          Andrew S. <span class="font-light text-sm">(Verified Buyer)</span>
        </h1>
        <p class="text-sm font-semibold lg:text-xl lg:font-bold">
          Activity Level:
          <span class="font-normal lg:font-light"
            >Walking, Running Errands</span
          >
        </p>
        <p class="text-sm font-semibold lg:text-xl lg:font-bold">
          Overall Fit: <span class="font-normal lg:font-light">Runs Small</span>
        </p>
        <p class="text-sm font-semibold lg:text-xl lg:font-bold">
          Size Purchased: <span class="font-normal lg:font-light">11</span>
        </p>
        <p class="text-sm font-semibold lg:text-xl lg:font-bold">
          Typical Size: <span class="font-normal lg:font-light">11</span>
        </p>
        <p class="text-sm font-semibold lg:text-xl lg:font-bold">
          Typical Width: <span class="font-normal lg:font-light">Narrow</span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import "primeicons/primeicons.css";
export default defineComponent({
  name: "ProductPage",
});
</script>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { productStore } from "@/stores/products";

const store = productStore();
const route = useRoute();
const router = useRouter();

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});

const goToCart = () => {
  store.addToCart(selectedProduct.value);
  router.push({ name: "Cart" });
};

const truncatedTitle = (title) => {
  if (title.length > 50) {
    return title.slice(0, 50) + "...";
  } else {
    return title;
  }
};
</script>
