<template>
 <div class="container text-center">
    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <h2> Create Article</h2>
            <form @submit.prevent>
              <div class="form-outline mb-4">
               
               <Input :type="'text'" placeholder="title"  v-model="title"/> 
               </div>
               <div class="form-outline mb-4">
               <Input :type="'text'" placeholder="body"  v-model="body"/> 
               </div>  
               <Textarea placeholder="description" v-model="description"> </Textarea>  
              <div class="text-center text-lg-start mt-4 pt-2">
                <Button type="submit"  :disabled="isLoading" @click="CreateArticlehandler">  Create article</Button>
             
              </div>
    
            </form>
          </div>
 </div>
</template>
<script>
export default {

    data() {
        return {
            title: '',
            body:'',
            description: '',

        }
    },

    methods : {
        CreateArticlehandler() {
            const article = {
                title: this.title,
                body: this.body,
                description: this.description,
                tagList: []

            }
            console.log(article)
           this.$store.dispatch('createArticle', article)
           this.$router.push('/')
    }
    }
}
</script>
<style >
    
</style>