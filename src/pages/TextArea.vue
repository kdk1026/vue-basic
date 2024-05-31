<template>
    <div>
        <textarea v-model="contentModel"></textarea>
        <div>{{contentModel}}</div>
    </div>
</template>

<script setup>
    const contentModel = defineModel("contentModel");
</script>

<style scoped>

</style>