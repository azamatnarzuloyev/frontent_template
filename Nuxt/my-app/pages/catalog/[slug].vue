<template>
    <title> {{ slug }}</title>
    <div>
        <h2>
            hello product {{ slug }}
        </h2>
    </div>
</template>
<script setup>

    const { slug }  = useRoute().params

</script>
<style >
    
</style>