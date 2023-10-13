<template>
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <ValidationError v-if="validationsErrors" :validationsErrors="validationsErrors"/>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid" alt="Sample image">
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div class="form-outline mb-4">
               
               <Input :type="'email'" placeholder="email"  v-model="email"/> 
               </div>
               <div class="form-outline mb-4">
               <Input :type="'password'" placeholder="password"  v-model="password"/> 
               </div>    
              <div class="text-center text-lg-start mt-4 pt-2">
                <Button type="submit"  :disabled="isLoading" @click="setloadingclick">  Login</Button>
             
              </div>
    
            </form>
          </div>
        </div>
      </div>
      
    </section>
    </template>
<script>
import { mapState } from "vuex"
import ValidationError from "../components/ValidationError.vue"
export default {
  components : {
    ValidationError,
  },




  date () {
    return {
   
        password:'',
        email:'',
    }
  },

 
  computed: {
    ...mapState({
       isLoading: state => state.auth.isloading,

       validationsErrors : state => state.auth.errors

    })
    // isLoading() {
    //  return this.$store.state.auth.isloading
    // },
    // validationsErrors() {
    //   return this.$store.state.auth.errors
    // }
  },
  methods: {
    setloadingclick(e) {
      e.preventDefault();
   const data = {
      
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('login', data)
      .then(user => {
        console.log(user)
        this.$router.push('/')
        
      })
      .catch(error =>{
        console.log(error)
      })
      
    }
  },    
}
</script>
<style scoped>
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
</style>