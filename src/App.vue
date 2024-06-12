<template>
  <div class="App">
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/counter">Counter</router-link> | <router-link to="/input">Input</router-link> |
      <router-link to="/input2">Input2</router-link> | <router-link to="/userList">UserList</router-link> |
      <router-link to="/movies">Movies</router-link> | <router-link to="/param/20">Param (Path Variable)</router-link> |
      <router-link to="/param?q=aa&page=10">Param (Query String)</router-link> |
      <router-link :to="{path: 'param', query: {q: 'bb', page: 20}}">Param (Query String)</router-link> |
      <router-link to="/param2?q=aa&page=10">Param (Query String)</router-link> |
      <router-link to="/linkSendData">Link Send Data</router-link> |
      <router-link to="/main/article">Article 목록</router-link> | <router-link to="/focus">Focus</router-link> |
      <router-link to="/textarea">TextArea</router-link> | <router-link to="/checkbox">CheckBox</router-link>
      <router-link to="/radio">Radio</router-link> | <router-link to="/select">Select</router-link> | 
      <router-link to="/inputFile">InputFile</router-link> | <router-link to="/vue-multiselect">vue-multiselect</router-link> |
      <router-link to="/vue-cookies">vue-cookies</router-link> | <router-link to="/routerHistory">RouterHistory</router-link> |
      <router-link to="/fileDownload">파일 다운로드</router-link> | <router-link to="/fileUpload">파일 업로드</router-link> | 
      <router-link to="/parent">자식->부모 props</router-link> | <router-link to="/parent2">자식->부모 emit</router-link>
    </nav>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script setup>
</script>

<style>
  @import "./assets/css/app.css";
</style>
