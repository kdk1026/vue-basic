<template>
    <form @submit="onSubmit">
        <InputField
            :type="inputEl.type"
            :value="movieTitle"
            :placeholder="inputEl.movieTitlePlaceholder"
            :onChange="onInputMovieTitle"
            :errorMessage="titleError"
        />
        <InputField
            :type="inputEl.type"
            :value="movieYear"
            :placeholder="inputEl.movieYearPlaceholder"
            :onChange="onInputMovieYear"
            :errorMessage="yearError"
        />
        <button type="submit">영화추가</button>
    </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import InputField from "./InputField.vue";

    const inputEl = reactive({
        type: "text",
        movieTitlePlaceholder: "영화제목",
        movieYearPlaceholder: "개봉년도"
    });

    const props = defineProps({
        addMovie: Function
    });

    const movieTitle = ref("");
    const movieYear = ref("");

    const titleError = ref("");
    const yearError = ref("");

    const onInputMovieTitle = (e) => {
        movieTitle.value = e.target.value;
    };

    const onInputMovieYear = (e) => {
        movieYear.value = e.target.value;
    };

    const resetForm = () => {
        movieTitle.value = "";
        movieYear.value = "";
    };

    const resetErrors = () => {
        titleError.value = "";
        yearError.value = "";
    };

    const validateForm = () => {
        resetErrors();

        let isValidated = true;

        if ( !movieTitle.value ) {
            titleError.value = "영화제목을 넣어주세요.";
            isValidated = false;
        }

        if ( !movieYear.value ) {
            yearError.value = "개봉년도를 넣어주세요.";
            isValidated = false;
        }

        return isValidated;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        if ( validateForm() ) {
            props.addMovie({
                id: Date.now(),
                title: movieTitle.value,
                year: movieYear.value
            });

            resetErrors();
            resetForm();
        }
    }
</script>

<style scoped>

</style>