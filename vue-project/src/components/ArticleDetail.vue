<template>
    <div v-if="article">
    <div class="row">
        <div class="col-12">
           <p class="fs-2 text-center"> {{ article.title }}</p>
            </div>
            <div class="col-12 ">
            
               <p >  <span class="fw-bold"> description:    </span>{{ article.description }}</p>
            </div>
            <div class="col-12">
               <p><span class="fw-bold">Body: </span> {{ article.body }}</p>
            </div>
             <div class="col-4">
           
                <span class="fw-bold">
                    User:  {{ article.author.username }}
                </span>
                <p> <span class="fw-bold"> user Info</span>:  {{ article.author.bio }}</p>

             </div>

            <div class="col-12">
                <span class="fw-bold" style="margin-left: 5px;"> create date: {{new Date(article.createdAt).toLocaleString('uz')}}</span>
                <span class="fw-bold" style="margin-left: 50px;"> update date: {{new Date(article.updatedAt).toLocaleString('uz')}}</span>
            </div>
            
        </div>
    </div>


</template>
<script>
import { mapState } from 'vuex';
export default {
   computed : {
      ...mapState({
        article: state => state.articles.articeldetail,
        isloading: state =>state.articles.isloading
      })
   }
    
}
</script>
<style>
    
</style>