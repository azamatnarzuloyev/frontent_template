<template>
<div class="container">
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom aaaa">
      <a  class="d-flex align-items-center link-body-emphasis text-decoration-none">
       <img :src="logo" alt="logo" style="width: 150px; height: 70px;" @click="Homeclick" class="logosts">
      
      </a>
      <template v-if="isLoggedIn">
      
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto ml">
          <RouterLink :to="{name: 'create-article'}" class="me-3 py-2 link-body-emphasis text-decoration-none"> create</RouterLink>
          <a href="#" class="me-3 py-2 link-body-emphasis text-decoration-none">    {{ correntUsers.username }}</a>
          <a href="#" class="me-3 py-2 link-body-emphasis text-decoration-none" @click="logout">lagout</a>
      </nav>
        
      </template>
      <template v-else="isAnonamius">
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto ml">
        <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none"> Register</RouterLink>
      
        <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none"> Login </RouterLink>
    
      </nav>
          
        
      </template>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { RouterLink } from 'vue-router'
import {logo} from '../constants'
import {gettertypes} from '../moduls/types'

export default {
  data() {
    return {
      logo
    }
  },
  methods : {
    Homeclick() {
      return this.$router.push('/')
    },
    logout() {
      return this.$store.dispatch('logout')
    }
  },
  computed : {
    // ...mapState ({
    //   // correntuser: state => state.auth.user.username,
    //   loginInUser: state => state.auth.logindIn
    // }),
    ...mapGetters ({
      correntUsers: gettertypes.correntUsers

    }),
    // correntUsers() {
    //   return this.$store.getters[gettertypes.correntUsers]
    // },
    isLoggedIn() {
      return this.$store.getters[gettertypes.isLoggedIn]
    },
    isAnonamius() {
      return this.$store.getters[gettertypes.isAnonamius]
    },
    loagaoutuser() {
      return this.$store.state.auth.logout
    }
  },


    
}
</script>
<style scoped>

.ml {
  margin-right:50px ;
}
  .logosts {
    margin-left: 50px;
  }

    
</style>