<template>
    <div>
        <div>{{data}}</div>
        <child :setData="setData" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import Child from "../components/Child.vue";

    const data = ref("initial data");

    const setData = (text) => {
        data.value = text;
    };
</script>

<style scoped>

</style>