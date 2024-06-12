<template>
    <div>
        <button @click="onUpdateHandler">
            send data to parent
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        setData: Function
    });

    const onUpdateHandler = () => {
        props.setData("data from child");
    };
</script>

<style scoped>

</style>