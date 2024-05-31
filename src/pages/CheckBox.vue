<template>
    <div>
        <input type="checkbox" id="male" value="male" v-model="checkedGenders" />
        <label for="male">남자</label>
        <input type="checkbox" id="female" value="female" v-model="checkedGenders" />
        <label for="female">여자</label>
        <br/>
        <span>체크한 이름: {{checkedGenders}}</span>
    </div>
</template>

<script setup>
import { ref } from "vue";

    const checkedGenders  = ref([]);
</script>

<style scoped>

</style>