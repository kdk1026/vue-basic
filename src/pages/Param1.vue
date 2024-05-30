<template>
    <div>
        <h2>Param1 (Path Variable)</h2>
        <p>요청 id : {{id}}</p>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

    const route = useRoute();

    const {id} = route.params;
</script>

<style scoped>

</style>