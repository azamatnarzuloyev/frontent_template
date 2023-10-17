<template>

   
   <div  class=" mx-auto p-4 justify-between  mr-0 pr-0" >
    <NuxtLink to="/" >  Home </NuxtLink>
   <NuxtLink to="/about" class="tracking-tighter  m-5">  about </NuxtLink>
   <NuxtLink to="/product" class="tracking-tighter  m-5 btn">  product </NuxtLink>
   <div>
        <h2 class="text-slate-400 font-medium shadow-md rounded-full box w-100" style="text-align: right; padding-right: 50px; width: 100%;"> Tailwins css </h2>
    </div>
   </div>
  
   <slot> </slot>
</template>