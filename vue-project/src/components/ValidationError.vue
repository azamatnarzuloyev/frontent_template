<template>
   <div class="alert alert-primary" role="alert">
{{ this.validationsErrors }}
</div>
</template>
<script>
export default {
    props : {
        validationsErrors: {
            type : Object,
            required : true
        }
    },
    updated() {
        console.log(this.validationsErrors)
    }
    
}
</script>
<style>
    
</style>