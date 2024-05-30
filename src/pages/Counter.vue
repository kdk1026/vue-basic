<template>
    <div>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
        <p>{{count}}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";

    let count = ref(0);

    const increase = () => {
        count.value = count.value + 1
    };

    const decrease = () => {
        count.value = count.value - 1
    }
</script>

<style scoped>

</style>