<template>
    <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="onChange"
    />
    <br />
    <div style="color: red">{{errorMessage}}</div>
</template>

<script setup>
    const props = defineProps({
        type: String,
        value: String,
        placeholder: String,
        onChange: Function,
        errorMessage: String
    });
</script>

<style scoped>

</style>