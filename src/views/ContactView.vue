<template>
  <main class="px-5 lg:px-52">
    <h1 class="text-3xl font-bold lg:text-center mt-7 lg:text-5xl">Contact Us</h1>
    <div class="flex flex-col space-y-1 mt-8">
      <label class="text-lg">Full Name</label>
      <input
        type="text"
        class="border border-neutral-300 rounded w-full py-2"
      />
      <label class="text-lg">Email</label>
      <input
        type="email"
        class="border border-neutral-300 rounded w-full py-2"
      />
      <label class="text-lg">Subject</label>
      <input
        type="text"
        class="border border-neutral-300 rounded w-full py-2"
      />
      <label class="text-lg">Write Your Suggestion here</label>
      <textarea
        cols="30"
        rows="10"
        class="border border-neutral-400 rounded"
      ></textarea>
    </div>
    <div
      class="bg-black text-white text-center text-xl font-semibold py-2 mt-5 rounded mb-24"
    >
      <button>Submit</button>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Contact",
});
</script>
