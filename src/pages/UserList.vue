<template>
    <table>
        <thead>
            <tr>
                <th>이름</th>
                <th>이메일</th>
            </tr>
        </thead>
        <tbody>
            <User v-for="user in users" :key="user.name" :userData="user" />
        </tbody>
    </table>
</template>

<script setup>
import User from "../components/User";

    const users = [
        {email: "ryu@gmail.com", name: "유재석"},
        {email: "kim@gmail.com", name: "김종국"},
        {email: "ha@gmail.com", name: "하하"},
        {email: "song@gmail.com", name: "송지효"}
    ];
</script>

<style scoped>

</style>