<template>
  <div class="wrapperPages">
    <h1>Newsletter PAGE</h1>
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
            Nous nous mettons à votre service afin d’assurer le conseil , la
            conception et le suivi de solutions numériques d’une entité
            professionnelle.
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
        class="flex flex-col items-center text-black text-center mt-[110px] w-[90%]"
      >
        <TitleH1 title="Rejoignez le groupe FACKOP" />
        <div class="w-[90%] sm:text-[20px] mt-3">
          <p>
            Nous nous mettons à votre service afin d’assurer le conseil , la
            conception et le suivi de solutions numériques d’une entité
            professionnelle.
          </p>
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
                  class="font-semibold font-bold text-purple-500"
                  to="/about"
                  >En savoir plus</NuxtLink
                >
              </p>
            </div>
          </div>
          <div class="w-full px-12 py-16 lg:w-1/2">
            <h2 class="mb-4 text-3xl font-bold text-[#5D3891]">Newsletter</h2>
            <p class="mb-4">Inscrivez-vous à notre Newsletter</p>
            <form
              target="_blank"
              action="https://formsubmit.co/fackopgroupenumerique@gmail.com "
              enctype="multipart/form-data"
              method="POST"
            >
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
                  name="Prénom"
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
                  name="Numéro"
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
                  <a href="#" class="font-semibold text-purple-500"
                    >D'utilisation</a
                  >
                  &
                  <a href="#" class="font-semibold text-purple-500"
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
// import { Icon } from "@iconify/vue";
import Footer from '../components/Footer/Footer.vue';
</script>

<style scoped>
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
