<template>
    <div @click="modalHandler()" class="flex fixed w-full h-screen z-20  top-[80px] left-0 ease-out duration-500 bg-[rd] " :class="[stateManu ? 'left-[-100%]' : 'left-0']" >
        <div class="flex flex-col w-full h-full bg-black bg-opacity-50 backdrop-blur-[15px] ">
          
            <div class="flex flex-col gap-10 h-[75%] bg-black">
                <div class="ml-[5vw] h-[130px] w-[95%]">
                    <div class="flex font-bold items-center cursor-pointer mt-5 text-[15px]">
                        <h1>MENU</h1>
                    </div>
                    <div class="flex flex-col justify-evenly h-full text-[12px] mt-3 ml-5 text-[#d2caca]">
                        <router-link  to="/"><h1>Home</h1></router-link>
                        <router-link to="/services"><h1>Services</h1></router-link>
                        <router-link to="/about"><h1>About</h1></router-link>
                        <router-link to="/contact"><h1>Contacts</h1></router-link>
                    </div>
                </div>

                <div class="ml-[5vw] h-[185px] w-[95%]">
                    <div class="flex font-bold items-center cursor-pointer mt-5 text-[15px]">
                        <h1>ALL FACKOP RESSOURCES</h1>
                    </div>
                    <div class="flex flex-col justify-evenly h-full text-[12px] mt-3 ml-5 text-[#d2caca]">
                        <router-link  to="#"><h1>Allô-chop</h1></router-link>
                        <router-link to="#"><h1>Clando</h1></router-link>
                        <router-link to="#"><h1>Falla</h1></router-link>
                        <router-link to="#"><h1>Kidangui</h1></router-link>
                        <router-link to="#"><h1>Ogoula</h1></router-link>
                        <router-link to="#"><h1>Pôpô</h1></router-link>
                    </div>
                </div>
            </div>
            <div class="flex items-end w-[100%] h-[25%]">
                <div class='flex w-full h-full text-[14px] border-t-[#d2caca] border-solid border-t-[2px] text-[#d2caca]'>
                    <div class='flex text-xs mt-[4%] flex-col items-center w-[100%] '>
                        <p>Copyright - Fackop © 2023 Inc.</p>
                        <p class="sm:ml-5">Tous droits réservés.</p>
                        <p class="sm:ml-5">Mentions légales</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { computed } from 'vue';
    import store from '../../store';
    import TitleH2Vue from '../global/TitleH2.vue';

    // Récupération d'une variable du state
    const stateManu = computed(() => store.getters.getStateMenu)

    const modalHandler = () => {
        stateManu  && store.commit('setStateMenu',!stateManu.value)
    }
</script>

<style scoped>
.wrapperHome {
  overflow: hidden;
  overflow-y: scroll;
}
.wrapperHome::-webkit-scrollbar {
  background-color: transparent;
  width: 0px;
}
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
    background-color: red;

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

    .none{
        display: none;
    }

.wrapperContainerMenuBurger{
    width: 300px;
    height: 100%;
    backdrop-filter: blur(15px);
    background-color:rgb(0, 0, 0, 0.5);
}
</style>