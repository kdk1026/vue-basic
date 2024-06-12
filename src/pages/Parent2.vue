<template>
    <div>
        <div>{{data}}</div>
        <child2 @setData="setData" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import Child2 from "../components/Child2.vue";

    const data = ref("initial data");

    const setData = (text) => {
        data.value = text;
    };
</script>

<style scoped>

</style>