<template>
    <div>
        <h1>vue-cookies</h1>
        <button @click="setCookie">
            쿠키 설정
        </button>
        <button @click="getCookie">
            쿠키 확인
        </button>
        <div>{{testCookie}}</div>
        <button @click="removeCookie">
            쿠키 삭제
        </button>
    </div>
</template>

<script setup>
import { inject } from "vue";

    const $cookies = inject('$cookies');

    const testCookie = defineModel('testCookie');

    const setCookie = () => {
        $cookies.set("test", "testValue", "7d");
    };

    const getCookie = () => {
        const cookieVal = $cookies.get("test");
        testCookie.value = cookieVal;
    };

    const removeCookie = () => {
        $cookies.remove("test");
    };
</script>

<style scoped>

</style>