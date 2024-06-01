<template>
    <div>
        <p>{{data.name}}</p>
        <p>{{data.age}}</p>
    </div>
</template>

<script setup>
    const data = history.state.data;
</script>

<style scoped>

</style>