<template>
    <div>
        <button @click="onUpdateHandler">
            send data to parent
        </button>
    </div>
</template>

<script setup>
    const emit = defineEmits(
        ['setData']
    );

    const onUpdateHandler = () => {
        emit('setData', 'data from child')
    };
</script>

<style lang="scss" scoped>

</style>