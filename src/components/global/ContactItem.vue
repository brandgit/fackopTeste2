<template>
    <div class="flex flex-col items-center text-center w-full bg-white">
      <div class="flex flex-col items-center text-center w-[90%]">
          <TitleH1 title="VOUS SOUHAITEZ NOUS CONTACTER ?" />
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
        <div class="flex justify-center items-center absolute left-0 top-0 flex-col  w-full h-full">
           <!-- <div class="flex flex-col justify-between w-[150px] h-[80px]">
            <router-link
              class="flex cursor-pointer w-[100%] h-[45%] text-white justify-center items-center bg-black rounded-[10px] border-[2px] border-solid border-black"
              to="/contact">
                Contact
            </router-link>
            <router-link
              class="flex cursor-pointer w-[100%] h-[45%] text-white justify-center items-center bg-black rounded-[10px] border-[2px] border-solid border-black"
              to="/newsletter">
                Newsletter
            </router-link>
           </div> -->
           <div class="flex flex-col items-center text-white w-[95%]">
              <TitleH1 title="Abonnez-vous à la newsletter" />
              <div class="flex flex-col justify-between h-[120px] w-full sm:w-[300px] mt-10">
                <input type="text" placeholder="Saisissez votre adresse e-mail" name="Prenom" class="h-[50px] w-full rounded-[10px] pl-5 border-gray-400"/>
                <router-link
                  class="flex cursor-pointer h-[50px] w-full text-white justify-center items-center bg-black rounded-[10px] border-[2px] border-solid border-black"
                  to="/newsletter">
                    Newsletter
                </router-link>
              </div>
            </div>
         </div>
      </div>
    </div>
</template>

<script setup>
import TitleH1 from "./TitleH1.vue"
import TitleH2 from "./TitleH2.vue"
const forme = ">   ";
</script>

<style scoped>
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
</style>