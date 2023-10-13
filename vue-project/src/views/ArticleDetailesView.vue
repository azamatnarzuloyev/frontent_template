<template >

            <div class="container">
                   
              <ArtcleDetail />
            </div>

</template>
<script>

import ArtcleDetail from "../components/ArticleDetail.vue"
export default {

  

   components : {
      ArtcleDetail,
   },

      mounted() {
            this.$store.dispatch('articleDetail', this.$route.params.slug)
            
      },  
}
</script>
<style>
        
</style>