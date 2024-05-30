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
      <router-link to="/main/article">Article 목록</router-link>
    </nav>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script setup>
</script>

<style>
  @import "./assets/css/app.css";
</style>
