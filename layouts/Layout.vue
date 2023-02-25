<template>
    <Header/>
    <RouterView/>
</template>

<script setup>
    import Header from '../src/components/header/Header.vue';
    import Footer from '../src/components/Footer/Footer.vue'
</script>

<style scoped>
.wrapperHome {
width: 100%;
height: 100vh;
background-color: white;
overflow: hidden;
overflow-y: hidden;
background-color: black;
}
.wrapperHome::-webkit-scrollbar {
background-color: red;
width: 4px;
}
</style>