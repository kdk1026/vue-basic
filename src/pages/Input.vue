<template>
    <div>
        <input type="text" :value="txtValue" @input="onChange" />
        <br />
        <p>{{txtValue}}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";

    const txtValue = ref("");

    const onChange = (e) => {
        txtValue.value = e.target.value;
    };
</script>

<style scoped>

</style>