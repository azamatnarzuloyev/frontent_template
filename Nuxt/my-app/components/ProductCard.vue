<template >
    <div class="card text-center" style="margin: 20px ; padding: auto; margin-top:50px" >
     <img :src="product.image" alt="product img" class="thumb">
    <p class="font-bold text-gray-500 m-4 trancate"> {{ product.title }}</p> 
  <NuxtLink :to="`product/${product.id}`"> <p class="btn my-4"> View deatail  </p></NuxtLink>
    </div>
  

    
   
</template>
<script setup>
const  { product } = defineProps(['product'])

</script>
<style>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}



</style>