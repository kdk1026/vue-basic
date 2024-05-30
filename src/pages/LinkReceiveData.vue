<template>
    <p>{{data.name}}</p>
    <p>{{data.age}}</p>
</template>

<script setup>
    const data = history.state.data;
</script>

<style scoped>

</style>