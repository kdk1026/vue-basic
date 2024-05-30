<template>
    <div>
        <h2>Param2 (Query String)</h2>
        <p>param1 : {{params.q}} </p>
        <p>param2 : {{params.page}} </p>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

    const route = useRoute();

    const params = route.query;
</script>

<style scoped>

</style>