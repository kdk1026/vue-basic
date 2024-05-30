<template>
    <div>
        <div>
            <label>이름</label>
            <input type="text" id="name" v-model="nameModel" />
        </div>
        <div>
            <label>이메일</label>
            <input type="email" id="email" v-model="emailModel" />
        </div>
        <div>
            <label>전화번호</label>
            <input type="tel" id="tel" v-model="telModel" />
        </div>
        <p>이름: {{nameModel}}</p>
        <p>이메일: {{emailModel}}</p>
        <p>전화번호: {{telModel}}</p>
    </div>
</template>

<script setup>
    const nameModel = defineModel('nameModel');
    const emailModel = defineModel('emailModel');
    const telModel = defineModel('telModel');
</script>

<style scoped>

</style>