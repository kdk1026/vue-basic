<template>
    <div>
        <div>
            <input type="text" name="countryCode" v-model="countryCode" />
        </div>
        <div>
            <input type="text" name="countryName" v-model="countryName" />
        </div>
        <div>
            <input type="file" name="imgFile" accept="image/*" @change="onChangeImg" />
        </div>
        <button @click="onClickConfirm">콘솔 확인</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

    const countryCode = defineModel('countryCode');
    const countryName = defineModel('countryName');

    const imgFile = ref;

    const onChangeImg = (e) => {
        e.preventDefault();
        
        if ( e.target.files ) {
            const uploadFile = e.target.files[0];
            imgFile.value = uploadFile;
        }
    };

    const onClickConfirm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("countryCode", countryCode.value);
        formData.append("countryName", countryName.value);
        formData.append("imgFile", imgFile.value);

        console.log( formData.get("countryCode") );
        console.log( formData.get("countryName") );
        console.log( formData.get("imgFile") );
    };
</script>

<style scoped>

</style>