<template>
  <div class="wrapperHome"> 
    <!-- Top Home page -->
    <TopHome/>

    <!-- Global presentation -->
    <IntroOfThePage/>

    <!-- SERVICS CONTENT  -->
    <div class="flex flex-col text-center items-center w-full py-20 bg-white ">
      <div class="w-[90%] lg:w-[60%] ">
        <TitleH1 title="UN ENVIRONEMENT OU CHANCUN PEUT TROUVER SA PLACE"/>
      </div>
      <div class="w-[80%] lg:w-[60%]   sm:text-[20px] mt-10">
          <p>
            Des solutions numériques pour le bien-être de tous, avec des outils qui
            vous permettent de vous sentir plus connecté aux personnes et aux
            choses qui vous importent.
          </p>
      </div>
      <router-link  class="text-[#5D3891] font-bold w-[80%] mt-3" to="/services">
          {{ forme }}En savoir plus sur nos Services
      </router-link >
      <Carrousel/>
    </div>


    <!-- ABOUT CONTENT  -->
    <div class="flex flex-col items-center text-center w-full bg-white pb-16">
      <div class="w-[90%]  lg:w-[60%] ">
        <TitleH1 title="UNE ENTREPRISE QUI S'ENGAGE DANS UNE MISSION" />
      </div>

      <div class="flex flex-col gap-5 lg:flex-row  lg:items-center lg:justify-between  lg:py-16 w-[90%] lg:w-[80%] ">
        <div class="flex justify-center w-full py-5 lg:py-0   lg:w-[60%]">
          <div class="flex flex-col  items-center lg:items-start w-[90%]">
            <div class="flex flex-col gap-4  justify-between  sm:text-[20px] mt-5 lg:text-start">
              <div class="">
                <TitleH2 title="Qui sommes nous ?"/>
              </div>
              <p>
                FACKOP est groupe numérique qui propose des solutions afin d'accompagner les entreprises et les particuliers dans leur orientation numérique. Avec notre expertise en constante évolution, nous vous aidons à réussir dans l'univers numérique.
              </p>
            </div>
            <router-link  class="text-[#5D3891] font-bold w-[80%] mt-3" to="/services">
                  {{ forme }}En savoir plus sur nous
            </router-link >
          </div>
        </div>
        <div class="flex justify-center lg:w-[40%] h-[380px] ">
          <img class="h-full  rounded-[15px]" src="/images/cardAbout.jpg" alt="">
        </div>
      </div>
      <div class="flex flex-col gap-5 lg:flex-row  lg:items-center lg:justify-between  lg:py-16 w-[90%] lg:w-[80%] ">
        <div class="flex justify-center w-full py-5 lg:py-0   lg:w-[60%]">
          <div class="flex flex-col  items-center lg:items-start w-[90%]">
            <div class="flex flex-col gap-4  justify-between  sm:text-[20px] mt-5 lg:text-start">
              <div class="">
                <TitleH2 title="Des créateurs et partenaires pationnés du numérique qui mettent la technologie au service du monde réel"/>
              </div>
              <p>
                Rencontrez les équipes responsables de nos produits et découvrez
                 notre vision de l’avenir.
              </p>
            </div>
            <router-link  class="text-[#5D3891] font-bold w-[80%] mt-3" to="/services">
                  {{ forme }}En savoir plus sur nous
            </router-link >
          </div>
        </div>
        <div class="flex justify-center lg:w-[40%] h-[380px] ">
          <img class="h-full  rounded-[15px]" src="/images/about.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- CONTACTS ITEM  -->
    <ContactItem/>
    
    <Footer/>
  </div>
</template>
<script setup >
import { computed } from 'vue';
import store from "../store"
import TopHome from "../components/Home/TopHome.vue";
import IntroOfThePage from "../components/Home/IntroOfThePage.vue";
import Footer from '../components/Footer/Footer.vue';
import TitleH1 from "../components/global/TitleH1.vue"
import TitleH2 from "../components/global/TitleH2.vue"
import Carrousel from "../components/Home/Carrousel.vue"
import ContactItem from '../components/global/ContactItem.vue';

const forme = ">   ";
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
</style>
