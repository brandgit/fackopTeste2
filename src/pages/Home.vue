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
    <div class="flex flex-col items-center text-center w-full bg-white">
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
          <img class="h-full  rounded-[15px]" src="/images/cardAbout.jpg" alt="">
        </div>
      </div>
      
      
        <!-- <div class="w-[90%]">
          <div class="container">
            <Fondator  image="/imageTests/profile3.jpg" name="JORDAN NTOUNTOUM" proffession="Directeur Artistique"/>
            <Fondator image="/imageTests/profile4.jpg" name="TIKOUE TIKOUE BRAND" proffession="Data Scientist/Formateur Web"/>
            <Fondator image="/imageTests/profile5.jpg" name="MOUSSAVOU LIONEL" proffession="Dev Full stack/Ingénieur Devops"/>
          </div>
        </div> -->
    </div>
    <!-- CONTACTS ITEM  -->
    <div class="flex flex-col items-center text-center w-full bg-white">
      <div class="flex flex-col items-center text-center mt-[100px] w-[90%]">
          <TitleH1 title="Nos contacts" />
          <div class="w-[80%] sm:text-[20px] mt-5">
            <p>
              Nous sommes là pour vous accompagner, n'hésitez pas à nous faire
              part de vos besoins
            </p>
          </div>
          <router-link  class="text-[#5D3891] font-bold w-[80%] mt-3" to="/services">
            {{ forme }}En savoir plus sur nos contacts
          </router-link >
      </div>

      <div class="mt-10 relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[green]">
        <div class="containerVideo">
          <video  muted
            autoplay="true"
            loop="true" class="video" src="/videos/contact.mp4" />
        </div>
        <div class="flex absolute left-[30%] top-[40%] flex-col justify-between w-[150px] h-[80px]">
            <NuxtLink
              class="flex cursor-pointer w-[100%] h-[45%] text-white justify-center items-center bg-black rounded-[10px] border-[2px] border-solid border-black"
              to="/contact"
              >
          Contact
          </NuxtLink>
            <NuxtLink
              class="flex cursor-pointer w-[100%] h-[45%] text-white justify-center items-center bg-black rounded-[10px] border-[2px] border-solid border-black"
              to="/newsletter"
              >Newsletter</NuxtLink
            >
         </div>
      </div>
    </div>
     <Footer/>
  </div>
      <!-- <Footer/> -->
  
 
  <!-- <div class="flex flex-col items-center w-full">
   

     

    
     TEAMS ITEM
    <div class="w-[80%] text-center sm:text-[20px] mt-5">
      <p>


        
        <div class="mt-10 relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[green]">
        <div class="containerVideo">
          <video  muted
            autoplay="true"
            loop="true" class="video" src="/videos/contact.mp4" />
        </div>
        <div class="flex justify-center items-center w-full h-full top-0 left-0 absolute">
          <div class="flex flex-col justify-between w-[150px] h-[80px]">
            <NuxtLink
              class="flex cursor-pointer w-[100%] h-[45%] text-white justify-center items-center bg-black rounded-[10px] border-[2px] border-solid border-black"
              to="/contact"
              >
          Contact
          </NuxtLink>
            <NuxtLink
              class="flex cursor-pointer w-[100%] h-[45%] text-white justify-center items-center bg-black rounded-[10px] border-[2px] border-solid border-black"
              to="/newsletter"
              >Newsletter</NuxtLink
            >
         </div>
        </div>
      </div>
      
       
  </div> -->
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
import Fondator from "../components/Home/Fondator.vue"

const forme = ">   ";
</script>

// import Footer from '../components/Footer/Footer.vue';
// 
// import Footer from "~~/components/Global/Footer/Footer.vue";
// import IntroOfThePage from "~~/components/Home/IntroOfThePage.vue";
// import Carrousel from "../components/Home/Carrousel.vue"
// import TitleH1 from "~~/components/Global/TitleH1.vue";
// 
// import { Icon } from "@iconify/vue";

// const forme = ">   ";

<style scoped>
.wrapperHome {
  overflow: hidden;
  overflow-y: scroll;
}
.wrapperHome::-webkit-scrollbar {
  background-color: transparent;
  width: 0px;
}

.containerVideo {
  min-height: 60%;
  height: 100%;
  position: relative;
  min-width: 200px;
}
.containerVideo .video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container {
  display: flex;
  flex-direction: column;
  height: 1200px;
  width: 100%;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
}


@media (min-width: 500px) {
  .container {
    display: flex;
    flex-direction: row;
    height: 200px;
  }
}
@media (min-width: 650px) {
  .container {
    display: flex;
    flex-direction: row;
    height: 300px;
  }
}
@media (min-width: 750px) {
  .container {
    display: flex;
    flex-direction: row;
    height: 400px;
  }
}
@media (min-width: 850px) {
  .container {
    display: flex;
    flex-direction: row;
    height: 500px;
  }
}


</style>
