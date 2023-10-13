<template>

    <textarea :type="type" class="form-control form-control-lg" @input="UpdateVuale" :value="modelValue"> </textarea> 

</template>
<script>
export default {
   name: "Textarea",
   props : {

       type: String,
       modelValue: [ String, Number],
   },
   methods : {
       UpdateVuale(e) {
           this.$emit('update:modelValue', e.target.value)
       }
   }

   
}
</script>
<style>
   
</style>