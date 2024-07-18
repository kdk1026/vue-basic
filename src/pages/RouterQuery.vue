<template>
    <div>
        <button @click="handlePage(1)">1</button>
        <button @click="handlePage(2)">2</button>
        <button @click="handlePage(3)">3</button>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

    const route = useRoute();
    const router = useRouter();

    const params = route.query;

    const pathname = window.location.pathname;

    const page = ref(params.page);

    const handlePage = (currentPage) => {
        page.value = currentPage;
    };

    onMounted(() => {
        if ( !page.value ) {
            page.value = '1';
        }
    });

    watch(page, () => {
        router.push({
            path: pathname,
            query: {
                page: page.value,
            }
        });
    });
</script>

<style scoped>

</style>