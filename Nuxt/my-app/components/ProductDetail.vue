<template>
  <div class="grid grid-flow-col auto-cols-max md:auto-cols-min"></div>
  <h1 class="text-[24px] text-dark font-[600]">{{ product.title }}</h1>
    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <img :src="`${product.image}`" class="mx-auto my-7 hue-rotate-90" />
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ product.title }}</h2>
          <p class="text-xl my-7">Price - ${{ product.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
          <p class="mb-7">{{ product.description }}</p>
        </div>
      </div>
    </div>
  
  </template>
  
  <script setup>
    const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
    img {
      max-width: 400px;
    }
    .mrrr {
      margin-left: 0 auto;
      padding-left: 0;
    }
  </style>