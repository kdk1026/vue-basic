<template>
    <div>
        <h1>vue-multiselect</h1>
        <VueMultiselect
            v-model="selectedOption"
            :options="options"
            label="label"
        />
        <br />
        <VueMultiselect
            v-model="selectedOption"
            :options="options"
            label="label"
            :multiple="true"
            track-by="label"
        />
    </div>
</template>

<script setup>
import VueMultiselect from 'vue-multiselect';

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const selectedOption = defineModel('selectedOption');

</script>

<style scoped>
    @import "vue-multiselect/dist/vue-multiselect.css";
</style>