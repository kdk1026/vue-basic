<template>
    <div class="movie">
        <div class="movie-title">
            {{movie.title}}
            <span class="movie-year">
                {{movie.year}}
            </span>
        </div>
        <div>
            <button @click="() => props.removeMovie(movie.id)">
                삭제
            </button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        movie: Object,
        removeMovie: Function
    });
</script>

<style scoped>

</style>