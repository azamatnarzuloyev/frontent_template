<template >
<div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
    <ArticleCard v-for="article in data" :article="article" :key="article.id"/>
</div>
</div>



</template>
<script>
import ArticleCard from "../components/ArticleCard.vue"
import { mapState } from 'vuex';
export default {
 components : {
    ArticleCard,
 },

    computed : {
   ...mapState ({
        data: state => state.articles.data,
        isloading: state => state.articles.isloading,
        error: state => state.articles.error

   }),
  },
mounted() {
    this.$store.dispatch('articles')
}
  
}
</script>
<style>
 
</style>