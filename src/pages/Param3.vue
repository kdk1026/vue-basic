<template>
    <div>
        <h2>Param3 (Set Query String)</h2>
        <p>고정 param : {{params.q}} </p>
        <p>변경 param : {{params.page}} </p>
        <p>추가 param : {{params.sort}} </p>
        <div>
            <button @click="() => movePage(1)">1</button>
            <button @click="() => movePage(2)">2</button>
            <button @click="() => movePage(3)">3</button>
        </div>
        <div>
            <button @click="appendSort">추가</button>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

    const route = useRoute();
    const router = useRouter();

    const params = route.query;

    const movePage = (pageNumber) => {
        router.push({
            path: 'param2',
            query: {
                q: params.q,
                page: pageNumber
            }
        });
    };

    const appendSort = () => {
        if ( !params.sort ) {
        router.push({
            path: 'param2',
            query: {
                q: params.q,
                page: params.page,
                sort: 'asc'
            }
        });
        }
    };
</script>

<style scoped>

</style>