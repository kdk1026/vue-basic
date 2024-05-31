<template>
    <div>
        <input type="file" accept="image/*" @change="fileChange" />
        <div>
            <p>파일명 : {{fileRef.name}}</p>
            <p>사이즈 : {{fileRef.size}}</p>
            <p>MimeType : {{fileRef.type}}</p>
        </div>
        <div>
            <img :src="imgUrlRef" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

    const fileRef = ref({});
    const imgUrlRef = ref("");

    const fileChange = (e) => {
        fileRef.value = e.target.files[0];
        previewImage(e);
    };

    const previewImage = (e) => {
        return new Promise(resolve => {
            const fileReader = new FileReader();
            fileReader.onload = event => {
                resolve(event.target.result);
                imgUrlRef.value = event.target.result;   
            }
            fileReader.readAsDataURL(e.target.files[0]);
        });
    };
</script>

<style scoped>

</style>