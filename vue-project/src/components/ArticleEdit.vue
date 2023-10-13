<template>
               <form @submit.prevent>
                 <div class="form-outline mb-4">
                  
                  <Input type="text" placeholder="title"  v-model="title"/> 
                  </div>
                  <div class="form-outline mb-4">
                  <Input type="text" placeholder="body"  v-model="body"/> 
                  </div>  
                  <Textarea type="text" placeholder="description" v-model="description"> </Textarea>  
                 <div class="text-center text-lg-start mt-4 pt-2">
                   <Button type="submit">  Edit article</Button>
                
                 </div>
       
               </form>
      
</template>
<script>
export default {
    
    
    // props: {
    //     title: {
    //         type: String,
    //         required: true,

    //     },
    //     body: {
    //         type: String,
    //         required: true,

    //     },
    //     description: {
    //         type: String,
    //         required: true,

    //     }
    // }
    
}

</script>
