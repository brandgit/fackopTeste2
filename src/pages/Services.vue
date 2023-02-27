
<script setup>
import ContactItem from '../components/global/ContactItem.vue';
import TitleH1 from "../components/global/TitleH1.vue"
import TitleH2 from "../components/global/TitleH2.vue"
import Footer from '../components/Footer/Footer.vue';

const forme = ">   ";
</script>

<template>
  <div class="wrapperServicePage">

    <!-- Top on the page -->
    <div class="flex flex-col items-center w-full h-[100vh]  relative bg-cover bg-no-repeat bg-center bg-[url('/images/servicesImage2.jpg')] text-[#fff]">
      <h1 class="w-[90%] text-[15px] sm:text-[20px] text-center mt-[110px]">Nos services à votre disposition</h1>
      <div class="text-center mt-10 w-[90%] sm:mt-[100px] sm:text-[40px] md:text-[50px] text-[30px]  lg:text-[65px]">
        <h1 class="font-bold ">FACKOP</h1>
      </div>
      <div class="w-[90%] sm:w-[60%] text-center mt-[20px]">
          <p>
              Nous offrons des solutions digitales performantes et personnalisées pour aider les entreprises de toutes tailles à réussir sur le marché. Notre approche innovante et notre expérience utilisateur fluide sont conçues pour atteindre des résultats concrets et maximiser votre succès.
          </p>
      </div>
    </div>

    <!-- Nos services -->
    <div class="flex flex-col text-center items-center w-full py-16">
      <div class="w-[100%] mb-7">
        <TitleH1 title="NOS SERVICES" />
      </div>

      <div class="wrapperServiceItem">
        <div class=" w-full justify-center py-10">
                  <TitleH2 title="KIDANGUI"/>
        </div>
        <div class="flex flex-col items-center gap-5 lg:flex-row  lg:items-center lg:justify-between  w-[100%] lg:w-[100%] ">
          <div class="flex justify-center w-full lg:w-[60%]">
          
            <div class="flex flex-col  items-center lg:items-start w-[90%]">
              
              <div class="flex flex-col gap-4  justify-between  sm:text-[20px] mt-5 lg:text-start">
                
                <p class="flex flex-col w-full text-start">
                  <strong>{{ forme }} Numériques </strong>
                  <strong>{{ forme }} Marketing digital </strong>
                </p>
                <p>
                    Nous nous mettons à votre service afin d’assurer le conseil,la
                  conception et le suivi des solutions numériques de votre
                  société.<br />
                  <br />
                  Afin de vous permettre d’avoir un meilleur suivi organisationnel
                  et opérationnel, <br />
                  nous disposons des compétences pluridisciplinaires qui se
                  diversifient selon la taille aini que le secteur de votre
                  entreprise.
                </p>
              </div>
              <router-link  class="text-[#5D3891] font-bold w-[80%] mt-3" to="/services">
                    {{ forme }}Accedez au service
              </router-link >
            </div>
          </div>
          <div class="flex justify-center cursor-pointer w-[90%] rounded-[15px] lg:w-[40%] lg:mr-[2.5%] h-[250px] bg-[url('/images/backgroundKidangui.jpg')]">
            <div class=" flex flex-col justify-evenly w-[95%] h-full">
              <p>Nous sommes une agence digitale spécialisée dans la création de solutions numériques et l'accompagnement des entreprises de toutes tailles à réussir sur le marché</p>
              <h1>KIDANGUI</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <ContactItem/>
    <Footer/>
  </div>

</template>

<style scoped>
.wrapperServicePage {
  width: 100%;
  height: 100vh;
  /* background-color: #5d3891; */
  overflow: hidden;
  overflow-y: scroll;
}
.wrapperServicePage::-webkit-scrollbar {
  background-color: transparent;
  width: 0px;
}

.wrapperServiceItem{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:90% ;
  background-color: #141414;
  color: white;
  border-radius: 15px;
  padding-bottom: 50px;

  
}

</style>