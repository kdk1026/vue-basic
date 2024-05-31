<template>
    <div>
        <input type="text" name="email" v-model="emailModel" ref="emailRef" />
        <input type="password" name="password" v-model="passwordModel" ref="passwordRef" />
        <button @click="onConfirm">확인</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

    const emailRef = ref("");
    const passwordRef = ref("");

    const emailModel = defineModel('emailModel');
    const passwordModel = defineModel('passwordModel');

    const onConfirm = () => {
        if ( !emailModel.value ) {
            alert("이메일을 입력해주세요.");
            emailRef.value.focus();
            return false;
        }

        if ( !passwordModel.value ) {
            alert("비밀번호를 입력해주세요.");
            passwordRef.value.focus();
            return false;
        }
    };
</script>

<style scoped>

</style>