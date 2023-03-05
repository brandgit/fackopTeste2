<template>
    <div class="wrapperContactPage">
        <!-- Top on the page -->
        <div class="flex flex-col items-center w-full h-[450px] md:h-[100%]  relative bg-cover bg-no-repeat bg-center bg-[url('/images/contactImage.jpg')] text-[#fff]">
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
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]  md:w-[200px] md:h-[200px] bg-black rounded-[100%]">
              <Icon class=" w-[60%] h-[60%] " icon="mdi:github" />
            </div>
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]  md:w-[200px] md:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="basil:gmail-solid" />
            </div>
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]  md:w-[200px] md:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="ant-design:twitter-circle-filled" />
            </div>
          </div>
          <div class="flex justify-between w-full">
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]  md:w-[200px] md:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="basil:gmail-solid" />
            </div>
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]  md:w-[200px] md:h-[200px] bg-black rounded-[100%]">
              <Icon class="w-[60%] h-[60%]" icon="ph:instagram-logo-bold" />
            </div>
            <div class="flex justify-center items-center cursor-pointer w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]  md:w-[200px] md:h-[200px] bg-black rounded-[100%]">
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

      <div class="min-h-screen py-5" style="background-color:">
      <div class="container mx-auto">
        <div
          class="flex flex-col gap-5 w-10/12 mx-auto overflow-hidden bg-white shadow-lg lg:flex-row lg:w-8/12 rounded-xl"
        >
          <div
            class="flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-1/2"
            style="background-image: url('/images/Fackopcontactcover1.jpg')"
          >
            <h1 class="mb-3 text-3xl text-white font-bold">Bienvenue</h1>
            <div>
              <p class="text-white font-bold">
                Nous nous mettons à votre service afin d'assurer le conseil , la
                conception et le suivi de solutions numériques d’une entité
                professionnelle.
                <router-link
                  class=" font-bold text-purple-500"
                  to="/about"
                  >En savoir plus</router-link
                >
              </p>
            </div>
          </div>
          <div class="w-full py-16 lg:w-1/2">
            <div class="w-[100%] mb-7">
              <TitleH1 title="CONTACT" />
            </div>
            <!-- <h2 class="mb-4 text-3xl font-bold text-[#5D3891]">Contact</h2> -->
            <p class="mb-4">Contactez-nous</p>
            <form @submit.prevent="registerUser" class="flex flex-col gap-4 w-full" target="_blank" action="https://formsubmit.co/tikouetikouebrand@gmail.com" method="POST">
              <!-- <div class=""> -->
                <input
                  type="text"
                  placeholder="Nom"
                  v-model="name"
                  name="Nom"
                  required
                  class="h-[50px] w-full rounded-[10px] pl-5 bg-[grey]"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  v-model="firstname"
                  name="Prenom"
                  required
                  class="h-[50px] w-full rounded-[10px] pl-5 bg-[grey]"
                />
              <!-- </div> -->
              <!-- <div class="mt-5"> -->
                <input
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  name="Email"
                  class="h-[50px] w-full rounded-[10px] pl-5 bg-[grey]"
                  required
                />
              <!-- </div> -->
              <!-- <div class="mt-5"> -->
                <input
                  type="text"
                  name="Number"
                  v-model="phone"
                  placeholder="Entrer votre numéro de téléphone"
                  autocomplete="off"
                  class="h-[50px] w-full rounded-[10px] pl-5 bg-[grey]"
                  required
                />
              <!-- </div> -->

              <!-- <div class="mt-5"> -->
                <textarea
                  rows="5"
                  cols="60"
                  name="message"
                  v-model="message"
                  placeholder="Entrer votre message "
                  autocomplete="off"
                  required
                  class="w-full rounded-[10px] px-2 py-1 bg-[grey]"
                ></textarea>
              <!-- </div> -->

              <div >
                <input type="checkbox" class="border bg-[grey]" />
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
                type="submit"
                  class="w-full py-3 rounded-[10px] text-center text-white bg-purple-500"
                >
                  Envoyez
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ContactItem/>
    </div>
    <!-- <ContactItem/> -->
    <Footer/>
  </div>
  
 
</template>

<script setup>
import axios from "axios"
import TitleH1 from "../components/global/TitleH1.vue"
import TitleH2 from "../components/global/TitleH2.vue"
import { Icon } from '@iconify/vue';
import Footer from '../components/Footer/Footer.vue';
import ContactItem from "../components/global/ContactItem.vue"
import { ref } from 'vue'

const name = ref("")
const firstname = ref("")
const email = ref("")
const phone = ref("")
const message = ref("")


      
      
      
      

const registerUser = () =>{
  const form = { name:name.value,
    firstname:firstname.value,
    email:email.value,
    phone:phone.value,
    message:message.value
  }
  axios.post(`http://localhost:8080/api/user/registeruser`,form)
  .then((res) =>{
    let responseData = res.data
    console.log(responseData)
    console.log("Formulaire réussi")
  }).catch((err) =>{
    console.log(err);
    console.log("Formulaire non réussi")
  })
}
</script>

<style scoped>
.wrapperContactPage {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
}
.wrapperContactPage::-webkit-scrollbar {
  background-color: transparent;
  width: 0px;
}

</style>
