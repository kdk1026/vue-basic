<template>
    <div>
        <div>Picked: {{checkedGender}}</div>

        <input type="radio" id="male" name="gender" value="male" v-model="checkedGender" />
        <label for="male">남자</label>

        <input type="radio" id="female" name="gender" value="female" v-model="checkedGender" />
        <label for="female">여자</label>

    </div>
</template>

<script setup>
    const checkedGender = defineModel("checkedGender");
</script>

<style scoped>

</style>