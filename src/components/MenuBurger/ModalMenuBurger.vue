<template>
    <!-- <div @click="modalHandler()" :class="[stateManu ? 'notActive' : 'active']"> -->
        <div class="active">
        <!-- <div v-if="stateManu" class="contentMenuBurger">
            <div class="h-[200px] w-[95%]">
                <div class="flex flex-col justify-evenly h-full sm:text-[15px] ">
                    <router-link  to="/"><h1>Home</h1></router-link>
                    <router-link to="/services"><h1>Services</h1></router-link>
                    <router-link to="/about"><h1>About</h1></router-link>
                    <router-link to="/contact"><h1>Contacts</h1></router-link>     
                </div>
            </div>
            <div class="h-[200px] w-[95%] ">
                <div class="flex items-center cursor-pointer text-[11px] sm:text-[15px] ">
                    <h1 >All Fackop ressources</h1>
                </div>
                <div class="flex text-[#908d8d]  ml-4 flex-col justify-evenly h-[150px] ">
                    <router-link  to="/"><h1>Home</h1></router-link>
                    <router-link to="/services"><h1>Services</h1></router-link>
                    <router-link to="/about"><h1>About</h1></router-link>
                    <router-link to="/contact"><h1>Contacts</h1></router-link>
                </div>
            </div>
            <div class="flex items-end w-[95%] h-[200px] ">
                <div class='flex w-full text-[14px] text-white'>
                    <div class='flex text-xs flex-col  pt-5 pb-3 items-center w-[90%]   border-t-white border-solid border-t-[2px]'>
                        <p>Copyright - Fackop © 2023 Inc.</p>
                        <p class="sm:ml-5">Tous droits réservés.</p>
                        <p class="sm:ml-5">Mentions légales</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else></div> -->

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
    background-color: blue;

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
    backdrop-filter: blur(15px);
        background-color:rgb(0, 0, 0, .5);
}
</style>