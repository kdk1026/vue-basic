<template>
    <h1>Movie list</h1>
    <MovieForm :addMovie="addMovie" />
    <div v-if="computed(() => movies.value.length)">
        <Movie
            v-for="movie in movies" :key="movie.id"
            :movie="movie"
            :removeMovie="removeMovie"
        />
    </div>
    <div v-else>
        추가된 영화가 없습니다.
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import MovieForm from "../components/MovieForm.vue";
import Movie from "../components/Movie.vue";

    const movies = ref([]);

    const removeMovie = (id) => {
        movies.value = movies.value.filter(
            movie => {
                return movie.id != id;
            }
        );
    };

    const addMovie = (movie) => {
        movies.value.push(movie);
    }
</script>

<style scoped>

</style>