<template>
    <tr>
        <td>{{userData.name}}</td>
        <td>{{userData.email}}</td>
    </tr>
</template>

<script setup>
    const props = defineProps({
        userData: Object
    });
</script>

<style scoped>

</style>