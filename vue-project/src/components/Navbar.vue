<template>
<div class="container">
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a  class="d-flex align-items-center link-body-emphasis text-decoration-none">
       <img :src="logo" alt="logo" style="width: 150px; height: 70px;" @click="Homeclick">
      
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none"> Register</RouterLink>
        <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none"> Login </RouterLink>
    
      </nav>
    </div>
</div>
</template>
<script>
import { RouterLink } from 'vue-router'
import {logo} from '../constants'

export default {
  data() {
    return {
      logo
    }
  },
  methods : {
    Homeclick() {
      return this.$router.push('/')
    }
  }

    
}
</script>
<style>
    
</style>