<template>
    <div @click="modalHandler()" class="flex fixed w-full h-screen z-20  top-[80px] left-0 ease-out duration-500 bg-[rd] " :class="[stateManu ? 'left-[-100%]' : 'left-0']" >
        <div class="w-[300px] h-full bg-black bg-opacity-50 backdrop-blur-[15px]">

        </div>
        <!-- <div class="flex flex-col items-center w-full bg-white">
            <div class="w-[90%] bg-yellow-400"> -->
                <!-- :class="[stateManu ? 'notActive' : 'active']" -->
                <!-- <TitleH2Vue title="Menu"/> -->

            <!-- </div>
        </div> -->
        <!-- <div class="active   transition  font-mono">
  
</div> -->
        <!-- <div class="w-[300px] text-black bg-[red] sm">
            <div >
                           <div class="ml-[5vw] h-[200px] w-[95%]">
                                <div class="flex flex-col justify-evenly h-full sm:text-[15px] ">
                                    <router-link  to="/"><h1>Home</h1></router-link>
                                    <router-link to="/services"><h1>Services</h1></router-link>
                                    <router-link to="/about"><h1>About</h1></router-link>
                                    <router-link to="/contact"><h1>Contacts</h1></router-link>
                                </div>
                           </div>
                           <div class="ml-[5vw] h-[200px] w-[95%] ">
                                <div class="flex font-bold items-center cursor-pointer text-[11px] sm:text-[15px] ">
                                    <h1 >All Fackop ressources</h1>
                                </div>
                                <div class="flex text-[#686565]  ml-4 flex-col justify-evenly h-[190px] ">
                                    <router-link  to="#"><h1>Allô-chop</h1></router-link>
                                    <router-link to="#"><h1>Clando</h1></router-link>
                                    <router-link to="#"><h1>Falla</h1></router-link>
                                    <router-link to="#"><h1>Kidangui</h1></router-link>
                                    <router-link to="#"><h1>Ogoula</h1></router-link>
                                    <router-link to="#"><h1>Pôpô</h1></router-link>
                                </div>
                           </div>
                           <div class="flex items-end w-[100%] h-[200px] ">
                                <div class='flex w-full text-[14px] text-black'>
                                    <div class='flex text-xs flex-col  pt-5 pb-3 items-center w-[100%] border-t-black border-solid border-t-[2px]'>
                                        <p>Copyright - Fackop © 2023 Inc.</p>
                                        <p class="sm:ml-5">Tous droits réservés.</p>
                                        <p class="sm:ml-5">Mentions légales</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                        
                        <div v-else class="none"></div>
        </div> -->
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