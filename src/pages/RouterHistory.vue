<template>
    <div>

    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

    const router = useRouter();

    // 데이터 없이 이동하는 경우
    //router.push("/routerHistoryMove");

    router.push({
        path: "/routerHistoryMove",
        state: {
            data : { name: '홍길동', age: 20 }
        }
    });
</script>

<style scoped>

</style>