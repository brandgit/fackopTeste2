<template>
  <div class="wrapperAboutPage">
    <!-- Top on the page -->
    <div class="flex flex-col pt-40 items-center w-full h-[500px]  sm:h-[100vh]  relative bg-cover bg-no-repeat bg-center bg-[url('/images/aboutYou.jpg')] text-[#fff]">

      <div class="text-center   w-[90%] sm:mt-[100px] sm:text-[40px] md:text-[50px] text-[30px]  lg:text-[65px]">
        <h1 class="font-bold  ">LE GROUPE FACKOP</h1>
      </div>
      <div class="w-[90%] sm:w-[60%] text-center mt-[20px]">
        <p>
            FACKOP est un GROUPE NUMERIQUE qui a pour but de développer des
            solutions numériques et informatiques afin de faire en profité le
            plus grand nombre
          </p>
      </div>
    </div>

    <div class="flex flex-col items-center text-center mt-[50px] w-full">
      <div class="w-[90%]">
        <TitleH1 title="CORE MEMBERS" />
      </div>
      <div class="w-[80%] sm:text-[20px] mt-5">
        <p>
            Des créateurs et partenaires pationnés du numérique qui mettent la
            technologie au service du monde réel
        </p>
      </div>
      <div class="container">
          <!-- <Fondator  image="/imageTests/profile3.jpg" name="JORDAN NTOUNTOUM" proffession="Directeur Artistique"/> -->
          <Fondator image="/imageTests/profile4.jpg" name="TIKOUE TIKOUE BRAND" proffession="Data Scientist/Formateur Web"/>
          <Fondator image="/imageTests/profile5.jpg" name="MOUSSAVOU LIONEL" proffession="Dev Full stack/Ingénieur Devops"/>
      </div>
    </div>
    <div class="flex flex-col items-center w-full">
      <!-- Service 1  -->
        <div class="w-[90%]">
          <p class="text-end text-[1.3rem]  text-[#5D3891] font-bold sm:text-[20px] md:text-[30px] lg:text-[35px] mt-20">
              Accompagner les entreprise dans leur developpement
          </p>
          <div class="flex flex-col md:flex-row-reverse md:justify-between items-center">
            <img class="mt-10 rounded-[15px] md:w-[50%]" src="/images/serviceAbout1.jpg" alt="">
            <p class="sm:text-[1.3rem] md:text-[1rem] lg:text-[1.4rem] mt-5 md:w-[45%]">
              Nous sommes là pour vous accompagner dans votre développement, car ous croyons que les entreprises sont les moteurs de la croissance économique, et nous sommes déterminés à vous aider à atteindre vos objectifs en vous fournissant les outils et le soutien dont vous avez besoin. 
            </p>
          </div>
        </div>

        <!-- Service 2  -->
        <div class="w-[90%]">
          <p class="text-[#5D3891] font-bold sm:text-[20px] md:text-[30px] lg:text-[35px] mt-20">
            Facilité l'accès le quotidien de tous 
          </p>
          <div class="flex flex-col md:flex-row md:justify-between items-center">
            <img class="mt-10 rounded-[15px] md:w-[50%]" src="/images/serviceAbout4.jpg" alt="">
            <p class="sm:text-[1.3rem] md:text-[1rem] lg:text-[1.4rem] mt-5 md:w-[45%]">
              Grâce à nos solutions innovante, nous rendons l'accès à un large éventail de services quotidiens plus facile et plus rapide que jamais. Du shopping au transport en passant par solution de diverses domaines d'activités, nous vous offrons un moyen simple de gérer votre vie quotidienne.  
            </p>
          </div>
        </div>

         <!-- Service 3  -->
        <div class="w-[90%]">
          <p class="text-end text-[#5D3891]  font-bold sm:text-[20px] md:text-[30px] lg:text-[35px] mt-20">
            Promouvoir le numérique
          </p>
          <div class="flex flex-col md:flex-row-reverse md:justify-between items-center">
            <img class="mt-10 rounded-[15px] md:w-[50%]" src="/images/serviceAboute2.jpg" alt="">
            <p class="sm:text-[1.3rem] md:text-[1rem] lg:text-[1.4rem] mt-5 md:w-[45%]">
              De la simplification des tâches quotidiennes à l'accès à des informations plus vastes, nous vous montrerons comment le numérique peut vous faciliter la vie. Rejoignez-nous dans notre mission pour promouvoir le numérique et découvrez comment vous pouvez en tirer le meilleur parti.
            </p>
          </div>
        </div>

       <!-- JOINT Fackop  -->
      <div class="flex flex-col items-center w-full py-10 mt-16 bg-[#d2c1eb] ">
        <TitleH1 title="Rejoignez Fackop." />
        <div class="font-bold w-[80%] sm:text-[20px] mt-5">
          <p>
            Prenez part au développement de la technologie de demain en nous
            rejoignant.
          </p>
        </div>
        <div class="w-[80%] sm:text-[20px] mt-5">
          <p>
            La construction de systèmes numériques avancés requiert une collaboration interdisciplinaire entre personnes provenant de différents domaines et perspectives. Chez Fackop, nous sommes constamment à la recherche de personnes curieuses et talentueuses pour nous aider à concevoir des solutions sécurisées et de haute qualité.
          </p>
        </div>
        <div class="flex font-bold w-[80%] sm:text-[20px] mt-5">
          <h1>Nos offres:</h1>
        </div>
        <div class=" w-[90%] py-20">
           <p>Pas d'offres disponible pour le moment</p>
      </div>
      </div>
    </div>
    
    <ContactItem/>
    <Footer/>
  </div>
</template>

<script setup>
// import { Icon } from "@iconify/vue";
import ContactItem from '../components/global/ContactItem.vue';
import Fondator from "../components/Home/Fondator.vue"
import TitleH1 from "../components/global/TitleH1.vue"
import Footer from '../components/Footer/Footer.vue';
</script>

<style scoped>
.wrapperAboutPage {
  width: 100%;
  height: 100vh;
  /* background-color: #5d3891; */
  overflow: hidden;
  overflow-y: scroll;
}
.wrapperAboutPage::-webkit-scrollbar {
  background-color: transparent;
  width: 0px;
}
.container {
  display: flex;
  flex-direction: column;
  height: 1000px;
  width: 90%;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
}


@media (min-width: 500px) {
  .container {
    display: flex;
    flex-direction: row;
    height: 350px;
  }
}
@media (min-width: 650px) {
  .container {
    display: flex;
    flex-direction: row;
    height: 400px;
  }
}
@media (min-width: 750px) {
  .container {
    display: flex;
    flex-direction: row;
    height: 500px;
  }
}
@media (min-width: 850px) {
  .container {
    display: flex;
    flex-direction: row;
    height: 550px;
    width: 70%;
  }
}

</style>
