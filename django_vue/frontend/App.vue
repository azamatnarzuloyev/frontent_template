<template>
  <div>
      <Header class="box "> </Header> 
   {{ count }} 
   <button @click="increment"> incremeent </button>
  </div>
 
</template>
<script>

// const props = defineProps({
//    token: String,
//    user: String,
   
// })
// const token = props.token ? props.token: null
// const user = props.user ? props.user: ''
// console.log(token)
// console.log(user)

import Header from "./components/Header.vue"
export default {
 components : {
  Header,
 },

  data() {
    return  {
        count : 1
    }
  },
  methods: {
    increment() {
      return this.count++
    }
  },
}

</script>
<style>
.box {
  text-align: center;
  font-size: 40px;
  color: red;
}

</style>
