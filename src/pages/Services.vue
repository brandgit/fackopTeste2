
<script setup>
import Footer from '../components/Footer/Footer.vue';
</script>

<template>
  <div class="wrapperPages">
    <h1>Services ok PAGE</h1>
    <Footer/>
  </div>

  
  <!-- <div class="wrapperservices">
    <topservices /> -->
    <!-- <div
      class="flex flex-col items-center text-black text-center mt-[100px] w-[100%]"
    >
      <TitleH1 title=" NOS SERVICES :" />
      <div class="w-[90%] sm:text-[20px] mt-5">
        <p>
          Le <Strong>GROUPE FACKOP</Strong> est spécialisé dans l'utilisation
          des technologies innovantes afin <br />
          de vous faire découvir les avantages du Numérique , de l'Informatique
          et du Marketing Digital.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center w-full">
      <section class="presentation">
        <div class="content">
          <img src="/Images/Fackopimg0.jpg" />
          <div class="text">
            <h1><strong>KIDANGUI</strong></h1>
            <h3>
              <strong> Numériques & Marketing digital </strong>
            </h3>
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

            <NuxtLink
              class="flex cursor-pointer w-[20%] h-[35%] text-white justify-center items-center bg-black rounded-[10px] border-[2px] border-solid border-black"
              to="/kidangui"
            >
              <h2>Learn more</h2>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>

    <div
      class="mt-10 relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[green]"
    >
 
      <video
        autoplay="true"
        loop="true"
        class="video"
        src="/Video/contact.mp4"
      ></video>
      <div
        class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
      >
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
          >
            Newsletter
          </NuxtLink>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.wrapperservices {
  background-color: #f1f3f2;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/*.servicesbg {
  width: 100%;
  height: 100vh;
  background: linear-gradient(90.21deg, #f8f9f9 -5.91%, #191a1aea 90.58%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}*/

.presentation {
  width: 100%;
  height: 100vh;
  background-color: #f1f3f2;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.presentation .content img {
  height: auto;
  width: 360px;
  max-width: 90%;
}

.content {
  width: 1200px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.text {
  width: 450px;
  max-width: 100%;
  padding: 0 10px;
  color: #141414;
}
.text h1 {
  color: #141414;
  font-size: 65px;
  margin-bottom: 20px;
  text-transform: capitalize;
}

.text h3 {
  color: #5d3891;
  font-size: 25px;
  margin-bottom: 25px;
  text-transform: capitalize;
  letter-spacing: 2px;
}

.text p {
  color: black;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 1px;
  margin-bottom: 35px;
}

.text h2 {
  border: 2px solid transparent;
  border-radius: 10px;
  text-decoration: none;
  padding: 10px;
  font-size: 10px;
  font-weight: bold;
}

.text h2:hover {
  transform: scale(1.2);
  background-color: black;
  border: 2px solid #f1f3f2;
  transition: 0.4s;
  cursor: pointer;
}

@media screen and (max-width: 1180px) {
  .services {
    width: 100%;
    height: auto;
    padding: 70px 0px;
  }
}

@media screen and (max-width: 650px) {
  .services .content img {
    margin-bottom: 35px;
  }
  .text h1 {
    font-size: 60px;
    margin-bottom: 25px;
  }
}

@media screen and (max-width: 1180px) {
  .presentation {
    width: 100%;
    height: auto;
    padding: 70px 0px;
  }
}

@media screen and (max-width: 650px) {
  .presentation .content img {
    margin-bottom: 35px;
  }
  .text h1 {
    font-size: 60px;
    margin-bottom: 25px;
  }
}
/*.main {
  width: 500px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}*/
.row {
  height: auto;
  width: 500px;
  margin-right: 20%;
  padding-right: 30%;
  position: relative;
}

@media (min-width: 600px) {
  .container {
    grid-template: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .container {
    grid-template: repeat(3, 1fr);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@media screen and (min-width: 640px) {
  .slider .slide {
    height: 500px;
    width: 350px;
  }
}
@media screen and (min-width: 1020px) {
  .slider .slide {
    height: 450px;
    width: 350px;
  }
}
</style>
