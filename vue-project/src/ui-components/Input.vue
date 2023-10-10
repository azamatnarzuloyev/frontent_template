<template>

     <input :type="type" class="form-control form-control-lg" @input="UpdateVuale" :value="modelValue"/> 

</template>
<script>
export default {
    name: "Input",
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