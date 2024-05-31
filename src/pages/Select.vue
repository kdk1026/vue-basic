<template>
    <div>
        <div>Selected: {{selectedModel}}</div>

        <select v-model="selectedModel">
            <option value="" disabled>-- 선택 --</option>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="lemon">레몬</option>
        </select>

        <br/><br/>

        <div>Multi Selected: {{multiSelected}}</div>

        <select v-model="multiSelected" multiple>
            <option value="" disabled>-- 선택 --</option>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="lemon">레몬</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from "vue";

    const selectedModel = defineModel("selectedModel", {
        default: ""
    });

    const multiSelected = ref([]);
</script>

<style scoped>

</style>