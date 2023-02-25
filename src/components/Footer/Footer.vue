<script setup>
    import { Icon } from '@iconify/vue';
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
<template>
   <div class="flex justify-center items-center flex-col w-full text-[white] bg-black">
        <div class="w-[90%]">
            <div class="w-full py-10">
                <img class=" w-[90px] sm:w-[120px]" src="/logos/LogoFackop6.0.png" alt="logo-fackop">
                <h2 class="flex text-[1.5rem] font-bold justify-center text-[#5D3891] mt-5">GROUPE NUMERIQUE</h2>
            </div>
            <div class="flex flex-col gap-7 sm:flex-row justify-between w-full py-5 mb-5 ">
                <ul>
                    <li class="cursor-pointer"><router-link @click="changeServices()"  to="/services">Services</router-link></li>
                    <li class="cursor-pointer"><router-link @click="changeAbout()" to="/about">About</router-link></li>
                    <li class="cursor-pointer"><router-link @click="changeContact()"  to="/contact">Contacts</router-link></li>
                </ul>
                <ul>
                    <li class="cursor-pointer">Allô-chop</li>
                    <li class="cursor-pointer">Clando</li>
                    <li class="cursor-pointer">Falla</li>
                </ul>
                <ul>
                    <li class="cursor-pointer">Kidangui</li>
                    <li class="cursor-pointer">Ogoula</li>
                    <li class="cursor-pointer">Pôpô</li>
                </ul>
            </div>
        </div>
        
        <div class='flex flex-col sm:flex-row py-5  justify-center sm:items-center  px-[5%]  w-full  border-t-[grey] border-solid border-t-[2px]'>
            <div class="flex py-2 " >
                <Icon class="w-[20px] h-[20px]  mx-1" icon="ph:instagram-logo-bold" />
                <Icon class="w-[20px] h-[20px] mx-1" icon="ic:outline-tiktok" />
                <Icon class="w-[20px] h-[20px] mx-1" icon="ri:facebook-box-line" />
                <Icon class="w-[20px] h-[20px] mx-1" icon="icon-park-outline:youtube" />
            </div>
            <div class='flex justify-between text-xs sm:flex-row sm:justify-center  items-center w-full bg-[vilet]'>
                <p>Copyright - Fackop © 2023 Inc</p>
                <p class="sm:ml-5">Mentions légales</p>
            </div>
            <div class='flex justify-between text-xs sm:flex-row sm:justify-end  items-center w-full bg-[violt]'>
                <p class="sm:ml-5">Tous droits réservés</p>
                <p class="sm:ml-5">Confidentialité et conditions d'utilisation</p>
            </div>
        </div>
   </div>
</template>



<style scoped>

    .wrapperSocialMedias{
        /* Media */
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
        margin-bottom: 10px;
    }
    .wrapperServicesFooter{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
        color: white;
    }
    .wrapperLogoFooter{
        display: flex;
        justify-content: center;
        width: 90%;
        border-top-style: solid;
        border-top-color: white;
        border-bottom-style: solid;
        border-bottom-color: white;
        border-top-width: 1px;
        border-bottom-width: 1px;
    }
    .help {
        /* Media */
      display: flex;
      align-items: center;
      flex-direction: column;
       width: 100%;
       margin-bottom: 20px;
       margin-top: 20px;
       /* background-color: aqua; */
    }
    .contact {
        /* Media */
      display: flex;
      align-items: center;
      flex-direction: column;
       width: 100%;
       margin-bottom: 40px;
       margin-top: 20px;
       padding-top: 20px;
       border-top-style: solid;
        border-top-color: white;
        border-top-width: 1px;
        /* background-color: yellowgreen; */
    }



   

    @media screen and (min-width: 700px) {
        .wrapperServicesFooter{
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            flex-direction: row;
            margin-top: 30px;
            margin-bottom: 10px;
    }
    .containerServicesFooter{
        display: flex; 
        justify-content: center;
        width: 45%;
    }
    .containerServicesFooter1{
        display: flex; 
        justify-content: center;
        width: 50%;
    }
    .help {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
       width: 40%;
       margin-bottom: 10px;
    }
    .contact {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
       width: 40%;
       margin-bottom: 20px;
       border: none;
       padding: 0px;
    }
    }
</style>

