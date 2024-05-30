<template>
    <router-link :to="{path: 'linkReceiveData', state: {data: data}}">데이터 넘기기</router-link>
</template>

<script setup>
    const data = {
        name: '홍길동',
        age: 20
    };
</script>

<style scoped>

</style>