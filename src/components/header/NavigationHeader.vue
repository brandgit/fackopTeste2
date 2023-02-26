<template>
    <nav class="w-[55%] h-full">
        <div class="flex items-center justify-center w-full h-full" >
            <div class="flex items-center justify-between  h-full w-[300px] ">
                <router-link  @click="changeHome()"  class="flex items-center  h-full  " to="/"><h1 :class="[homeState? 'bottomBar' : null ]" >Presentation</h1></router-link>
                <router-link @click="changeServices()" class="flex items-center  h-full  " to="/services"><h1 :class="[servicesState? 'bottomBar' :null ]">Services</h1></router-link>
                <router-link @click="changeAbout()" class="flex items-center  h-full  " to="/about"><h1 :class="[contactState? 'bottomBar' : null ]">About</h1></router-link>
                <router-link @click="changeContact()" class="flex items-center  h-full  " to="/contact"><h1 :class="[aboutState? 'bottomBar' : null ]">Contacts</h1></router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { computed } from 'vue';
import store from '../../store';


const homeState = computed(() => store.getters.getStateNavBar(0))
const servicesState = computed(() => store.getters.getStateNavBar(1))
const contactState = computed(() => store.getters.getStateNavBar(2))
const aboutState = computed(() => store.getters.getStateNavBar(3))

const changeHome = () =>{
  if(homeState === true ){
    store.commit('setStateHome',true)
    store.commit('setStateServices',false)
    store.commit('setStateAbout',false)
    store.commit('setStateContact',false)
  }
  else{
    store.commit('setStateHome',true)
    store.commit('setStateServices',false)
    store.commit('setStateAbout',false)
    store.commit('setStateContact',false)
  }
}
const changeServices = () =>{
  if(servicesState === true ){
    store.commit('setStateServices',true)
    store.commit('setStateHome', false)
    store.commit('setStateAbout',false)
    store.commit('setStateContact',false)
    
  }else{
    store.commit('setStateServices',true)
    store.commit('setStateHome',false)
    store.commit('setStateAbout',false)
    store.commit('setStateContact',false)
    
  }

}
const changeAbout = () =>{
  if(aboutState === true ){
    store.commit('setStateAbout',true)
    store.commit('setStateHome', false)
    store.commit('setStateServices',false)
    store.commit('setStateContact',false)
    
  }else{
    store.commit('setStateAbout',true)
    store.commit('setStateHome', false)
    store.commit('setStateServices',false)
    store.commit('setStateContact',false)
    
  }

}

const changeContact = () =>{
  if(contactState === true ){
    store.commit('setStateContact',true)
    store.commit('setStateServices',false)
    store.commit('setStateHome', false)
    store.commit('setStateAbout',false)
    
    
  }else{
    store.commit('setStateContact',true)
    store.commit('setStateServices',false)
    store.commit('setStateHome', false)
    store.commit('setStateAbout',false)
    
  }

}
</script>

<style scoped>
 nav{
    display: none;
}

@media screen and (min-width: 1030px) {
    nav{
        display: block;
    }
}
.bottomBar{
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: aliceblue;
}
  
</style>