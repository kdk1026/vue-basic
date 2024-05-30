<template>
    <h1>Article 상세</h1>
    <div>요청 id : {{id}}</div>
    <router-link to="/main/article">목록</router-link>
</template>

<script setup>
import { useRoute } from "vue-router";

    const route = useRoute();

    const {id} = route.params;
</script>

<style scoped>

</style>