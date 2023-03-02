<template>
    <div @click="modalHandler()" :class="[stateManu ? 'notActive' : 'active']">
        <div class="wrapperContainerMenuBurger">
        
        </div>
    </div>
</template>

<script setup>

import { computed } from 'vue';
    import store from '../../store';

    // Récupération d'une variable du state
    const stateManu = computed(() => store.getters.getStateMenu)

    const modalHandler = () => {
        stateManu  && store.commit('setStateMenu',!stateManu.value)
    }
</script>

<style scoped>
 .active {
    width: 100%;
    height: 100vh;
    z-index: 2;
    display: flex;
    top: 80px;
    left: 0px;
    position: fixed;
    transition: ease-out 0.5s;
    font-family: monospace;

    }    
    .notActive{
        display: flex;
        position: fixed;
        width: 0%;
        height: 100vh;
        transition: ease-out 0.5s;
        top: 80px;
        left: 0px;
        z-index: 2;
    }
    .contentMenuBurger{
    /* flex flex-col items-end w-[250px] h-full bg-black */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 250px;
    height: 100%;
    backdrop-filter: blur(20px);
    background-color: rgba(0, 0, 0, 0.8);
}

.wrapperContainerMenuBurger{
    width: 300px;
    height: 100%;
    backdrop-filter: blur(15px);
    background-color:rgba(0, 0, 0, .5);
}
</style>