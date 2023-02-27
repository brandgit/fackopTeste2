<template>
    <div class="wrapperContactPage">
        <!-- Top on the page -->
        <div class="flex flex-col items-center w-full h-[450px] md:h-[550px]  relative bg-cover bg-no-repeat bg-center bg-[url('/images/contactImage.jpg')] text-[#fff]">
        <h1 class="w-[90%] text-[15px] sm:text-[20px] text-center mt-[110px]">Nos agents à votre écoute</h1>
        <div class="text-center mt-10 w-[90%] sm:mt-[100px] sm:text-[40px] md:text-[50px] text-[30px]  lg:text-[65px]">
          <h1 class="font-bold ">LISTENING...</h1>
        </div>
        <div class="w-[90%] sm:w-[60%] text-center mt-[20px]">
            <p>
              Nous nous mettons à votre service afin d’assurer le conseil , la
            conception et le suivi de solutions numériques d’une entité
            professionnelle.
            </p>
        </div>
    </div>

    <div class="flex justify-center w-full ">
      <div class="flex flex-col gap-10 w-[90%] sm:w-[70%] py-10 text-white">
          <div class="flex justify-between w-full">
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] bg-black rounded-[100%]">
              <Icon class=" w-[60%] h-[60%] " icon="mdi:github" />
            </div>
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="basil:gmail-solid" />
            </div>
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="ant-design:twitter-circle-filled" />
            </div>
          </div>
          <div class="flex justify-between w-full">
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="basil:gmail-solid" />
            </div>
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="ph:instagram-logo-bold" />
            </div>
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="icon-park-outline:youtube" />
            </div>
          </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full">
      <div class="flex flex-col items-center text-center w-[90%] py-10">
        <TitleH1 title="RESTEZ A L'AFFUT AVEC FACKOP" />
        <div class="w-[100%] sm:w-[60%] text-center mt-[20px]">
              <p>
                Recevez des mises à jour sur FACKOP en recevant notre newsletter qui comprend les dernières nouvelles, mises à jour de produits et ressources. Inscrivez-vous ci-dessous!
              </p>
        </div>
      </div>
      <div class="w-[95%] bg-violet-900">
        <TitleH2 title="Abonnez-vous à la newsletter" />
        <input
                  type="text"
                  placeholder="Saisissez votre adresse e-mail"
                  name="Prenom"
                  class="px-2 py-1 border border-gray-400"
                />
      </div>

    </div>
    <Footer/>
  </div>
  
  <!-- <div class="wrapperNewsletter">
    <div class="flex flex-col items-center w-full">
      <div
        class="flex flex-col items-center text-black text-center mt-[150px] w-[90%]"
      >
        <div
          class="w-[70%] font-bold sm:text-[20px] md:text-[30px] lg:text-[35px] mt-5"
        >
          <p>
           
          </p>
        </div>
        <NuxtLink
          class="text-[#5D3891] w-[80%] sm:text-[18px] py-5 mt-3"
          to="/services"
          >En savoir plus sur nos Services</NuxtLink
        >
      </div>
      <div class="flex justify-center w-full">
        <div class="mt-10 w-[100%] h-[400px] sm:h-[700px]">
          <div class="containerVideo">
            <video
              muted
              autoplay="true"
              loop="true"
              class="video"
              src="/Video/Fackopvideo7.mp4"
            />
          </div>
        </div>
      </div>

      <div
        class="flex flex-col items-center text-black text-center mt-[100px] w-[100%]"
      >
        <TitleH1 title="Rejoignez le groupe FACKOP" />
        <div class="w-[90%] sm:text-[20px] mt-5">
          <p>
            Nous nous mettons à votre service afin d’assurer le conseil , la
            conception et le suivi de solutions numériques d’une entité
            professionnelle.
          </p>
          <NuxtLink
            class="text-[#5D3891] w-[80%] sm:text-[18px] py-5 mt-3"
            to="/about"
            >En savoir plus sur nous</NuxtLink
          >
        </div>
      </div>
      <div class="flex justify-center w-full">
        <div class="mt-10 w-[100%] h-[400px] sm:h-[700px]">
          <div class="containerVideo">
            <video
              muted
              autoplay="true"
              loop="true"
              class="video"
              src="/Video/Fackopvideo6.mp4"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="min-h-screen py-40" style="background-color: #f1f3f2">
      <div class="container mx-auto">
        <div
          class="flex flex-col w-10/12 mx-auto overflow-hidden bg-white shadow-lg lg:flex-row lg:w-8/12 rounded-xl"
        >
          <div
            class="flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-1/2"
            style="background-image: url('/Images/Fackopcontactcover1.jpg')"
          >
            <h1 class="mb-3 text-3xl text-white font-bold">Bienvenue</h1>
            <div>
              <p class="text-white font-bold">
                Nous nous mettons à votre service afin d’assurer le conseil , la
                conception et le suivi de solutions numériques d’une entité
                professionnelle.
                <NuxtLink
                  class=" font-bold text-purple-500"
                  to="/about"
                  >En savoir plus</NuxtLink
                >
              </p>
            </div>
          </div>
          <div class="w-full px-12 py-16 lg:w-1/2">
            <h2 class="mb-4 text-3xl font-bold text-[#5D3891]">Contact</h2>
            <p class="mb-4">Contactez-nous</p>
            <form target="_blank" action="https://formsubmit.co/tikouetikouebrand@gmail.com" method="POST">
              <div class="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Nom"
                  name="Nom"
                  class="px-2 py-1 border border-gray-400"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  name="Prenom"
                  class="px-2 py-1 border border-gray-400"
                />
              </div>
              <div class="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  class="w-full px-2 py-1 border border-gray-400"
                  required
                />
              </div>
              <div class="mt-5">
                <input
                  type="text"
                  number="number"
                  name="Number"
                  placeholder="Entrer votre numéro de téléphone"
                  autocomplete="off"
                  class="w-full px-2 py-1 border border-gray-400"
                  required
                />
              </div>

              <div class="mt-5">
                <textarea
                  rows="5"
                  cols="60"
                  name="message"
                  placeholder="Entrer votre message "
                  autocomplete="off"
                  required
                  class="w-full px-2 py-1 border border-gray-400"
                ></textarea>
              </div>

              <div class="mt-5">
                <input type="checkbox" class="border border-gray-400" />
                <span>
                  J'accepte les Conditions
                  <a href="#" class="font-semibold text-[#5D3891]-500"
                    >D'utilisation</a
                  >
                  &
                  <a href="#" class="font-semibold text-[#5D3891]-500"
                    >De politique de confidentialité</a
                  >
                </span>
              </div>
              <div class="mt-5">
                <button
                  class="w-full py-3 text-center text-white bg-purple-500"
                >
                  Envoyez
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import TitleH1 from "../components/global/TitleH1.vue"
import TitleH2 from "../components/global/TitleH2.vue"
import { Icon } from '@iconify/vue';
import Footer from '../components/Footer/Footer.vue';
</script>

<style scoped>
.wrapperContactPage {
  width: 100%;
  height: 100vh;
  /* background-color: #5d3891; */
  overflow: hidden;
  overflow-y: scroll;
}
.wrapperContactPage::-webkit-scrollbar {
  background-color: transparent;
  width: 0px;
}




.wrapperNewsletter {
  background-color: #f1f3f2;
}

.containerVideo {
  min-height: 60vh;
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
