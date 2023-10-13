<template>
       <div class="container text-center">
       <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
           <h2> edit Article</h2>
     
         <ArticelEdit/>
               </div>
</div>
   </template>
<script>
import { mapState } from "vuex";
import ArticelEdit from "../components/ArticleEdit.vue"
export default {

 components : {
     ArticelEdit
 },

  computed : {
      ...mapState({
         article: state => state.articles.articeldetail,
      })
   },
   
    mounted() {
            // console.log(this.$route.params.slug);
            this.$store.dispatch('articleDetail', this.$route.params.slug)

     
      },  
    
}
</script>
<style>
    
</style>