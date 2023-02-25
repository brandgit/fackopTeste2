<script setup>
 import { ref } from 'vue'
 import { Icon } from '@iconify/vue';
 import Logo from '../global/Logo.vue';
 import MenuBurger from '../MenuBurger/MenuBurger.vue';
 import ModalMenuBurger from '../MenuBurger/ModalMenuBurger.vue';
 import ContenteMenuBurger from "../MenuBurger/ContenteMenuBurger.vue"
 import NavgationHeader from './NavigationHeader.vue';

 const StateAllFackop = ref(true)

   function changeOfStateAllFackop()
    {
        if(StateAllFackop){
            StateAllFackop.value = false
        }else{
            StateAllFackop.value = true
            StateAllFackop.value = false
        }
       
    }
</script>

<template>
    <div class="wrappHeader">
        <div class="flex justify-between items-center w-[90%] h-full ">
            <div class="flex justify-between items-center h-full w-[120px]  sm:w-[155px]">
                <!-- Menu burger -->
                <MenuBurger/>
                <ContenteMenuBurger/>
                <!-- Logo -->
                <Logo/>
            </div>

            <!-- Navigation Header -->
            <NavgationHeader/>

            <!-- All Fackop -->
            <div @click="StateAllFackop = true &&  !StateAllFackop" class="flex items-center cursor-pointer text-[11px] sm:text-[15px] ">
                <h1 class="text-" >All Fackop ressources</h1>
                <Icon class="text-white sm:ml-1 w-10 h-7" icon="ic:baseline-arrow-drop-down" />
            </div>
            <div :class="[StateAllFackop? 'nomodalCart' : 'modalCart' ]" @click="StateAllFackop = true &&  !StateAllFackop">
                <div class="flex justify-end w-[90%] ">
                    <div class=" px-6 rounded-[3px] mt-[55px] w-[160px] sm:w-[200px] h-[200px] sm:h-[220px] bg-white text-black text-[11px] sm:text-[12px]" v-if="!StateAllFackop">
                        <ul class="flex  flex-col h-[90%] justify-evenly">
                            <li class="cursor-pointer">Fallaa</li>
                            <li class="cursor-pointer">Allô-Tchop</li>
                            <li class="cursor-pointer">Clando</li>
                            <li class="cursor-pointer">Kidangui</li>
                            <li class="cursor-pointer">Ogoula</li>
                            <li class="cursor-pointer">Pôpô</li>
                        </ul>
                    </div>
                    <div v-else></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrappHeader{
    display: flex;
    min-width: 320px;
    position: fixed;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, .4);
    color: white;
    z-index: 1;
}
    .modalCart{
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    transition: ease-out 0.5s;
    top: 0px;
    right: 0px;
    z-index: 2;
}
.nomodalCart{
    display: flex;
    position: fixed;
    width: 100vw;
    height: 0px;
    transition: ease-out 0.5s;
    top: 0px;
    right: 0px;
}

</style>
