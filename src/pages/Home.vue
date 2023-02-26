<template>
  <div class="wrapperHome"> 
    <!-- Top Home page -->
    <TopHome/>

    <!-- Global presentation -->
    <IntroOfThePage/>
     <div class="w-full h-[100vh] bg-[#141414]"></div>
     <div class="w-full h-[100vh] bg-white"></div>
     <div class="w-full h-[100vh] bg-red-500"></div>
     <!-- Footer -->
     <Footer/>
  </div>
      <!-- <Footer/> -->
  
 
  <!-- <div class="flex flex-col items-center w-full">
     TOP HOME PAGE
    <TopHome/>

     INTRO OF THE PAGE 
    <IntroOfThePage/>

     SERVICS CONTENT 
    <div class="flex flex-col justify-center items-center w-full">
      <div class="flex flex-col items-center text-center w-[90%]">
        <TitleH1 title="Un environnement où chacun peut trouver sa place" />
        <div class="w-[80%] sm:text-[20px] mt-5">
          <p>
            Des solutions numériques pour le bien-être de tous, des outils qui
            vous permettent de vous sentir plus connecté aux personnes et aux
            choses qui vous importent.
          </p>
        </div>
        <NuxtLink class="text-[#5D3891] w-[80%] sm:text-[18px] mt-3" to="/services">
          {{ forme }}En savoir plus sur nos Services
        </NuxtLink>
      </div>
    </div>
    <Carrousel/>

     ABOUT CONTENT 
    <div class="flex flex-col items-center text-center mt-[100px] w-[90%]">
        <TitleH1 title="Une entreprise qui s'engage dans une mission" />
        <div class="w-[80%] sm:text-[20px] mt-5">
          <p>
            Des créateurs et partenaires pationnés du numérique qui mettent la
            technologie au service du monde réel
          </p>
        </div>
        <div class="container">
          <Fondator  image="/imageTests/profile3.jpg" name="JORDAN NTOUNTOUM" proffession="Directeur Artistique"/>
          <Fondator image="/imageTests/profile4.jpg" name="TIKOUE TIKOUE BRAND" proffession="Data Scientist/Formateur Web"/>
          <Fondator image="/imageTests/profile5.jpg" name="MOUSSAVOU LIONEL" proffession="Dev Full stack/Ingénieur Devops"/>
        </div>
    </div>
     TEAMS ITEM
    <div class="w-[80%] text-center sm:text-[20px] mt-5">
      <p>
            Rencontrez les équipes responsables de nos produits et découvrez
            notre vision de l’avenir.
      </p>
    </div>
    <NuxtLink class="text-[#5d3891] text-center w-[80%] sm:text-[18px] mt-3" to="/about">
      {{ forme }}En savoir plus sur nos a propos de Nous
    </NuxtLink>
        <div class="mt-10 w-full h-[380px] sm:h-[700px]">
          <img class="w-full h-full" src="/images/about0.1.jpg" alt="/images/about.jpg">
        </div>

        CONTACTS ITEM 
        <div class="flex flex-col items-center text-center mt-[100px] w-[90%]">
          <TitleH1 title="Nos contacts" />
          <div class="w-[80%] sm:text-[20px] mt-5">
            <p>
              Nous sommes là pour vous accompagner, n'hésitez pas à nous faire
              part de vos besoins
            </p>
          </div>
          <NuxtLink class="text-[#5d3891] w-[80%] sm:text-[18px] mt-3" to="/contact">
              {{ forme }}En savoir plus sur nos contacts
          </NuxtLink>
        </div>
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
import Header from '../components/header/Header.vue';
</script>

// import Footer from '../components/Footer/Footer.vue';
// 
// import Footer from "~~/components/Global/Footer/Footer.vue";
// import IntroOfThePage from "~~/components/Home/IntroOfThePage.vue";
// import Carrousel from "../components/Home/Carrousel.vue"
// import TitleH1 from "~~/components/Global/TitleH1.vue";
// import Fondator from "../components/Home/Fondator.vue"
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
