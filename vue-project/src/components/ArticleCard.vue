<template>
    


<div class="col">
<div class="card shadow-sm" style="border: none; border-radius: none; box-shadow: none;">

<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

<div class="card-body">
    <div class="fw-bold p-10"> {{ article.title }}</div>
<hr>
<p class="card-text">{{ article.body.slice(0,150) }}</p>
<div class="d-flex justify-content-between align-items-center">
  <div class="btn-group card-footer">
    <button type="button" class="btn btn-sm btn-outline-success" @click="navigationhandler">Read more</button>
    <div v-if="article.author.username===user.username">
        <button type="button" class="btn btn-sm btn-outline-danger" @click="deletehandler">delete</button>
        <button type="button" class="btn btn-sm btn-outline-primary" @click="edithandler">edit</button>
    </div>

    <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
  </div>
  <small class="text-muted">{{new Date(article.createdAt).toLocaleString('uz')}}</small>
</div>
</div>
</div>
</div>


        
    
</template>
<script>
import { mapState } from 'vuex';
export default {

computed : {
    ...mapState({
        user: state => state.auth.user
    })
},

props : {
    article: {
        type:Object,
        required: true
    }
},
methods: {
    navigationhandler() {
        return this.$router.push(`/article/${this.article.slug}`)
    },
    deletehandler() {
       return  this.$store.dispatch('deleteArticle', this.article.slug).then(()=>{
            this.$store.dispatch('articles')
        })
       
      
    },
    edithandler() {
        return this.$router.push(`/edit-article/${this.article.slug}`)
        
    }
},
    
}
</script>
<style>
    
</style>