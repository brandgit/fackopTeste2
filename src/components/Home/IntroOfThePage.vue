<template>
  <div class="flex flex-col text-center py-10 items-center w-full text-[#fff]">
      <div class="w-[90%] text-center py-7">
        <TitleH1 title="BATIR UN DEMAIN PLUS OPTIMISER"/>
      </div>
      <div class="flex flex-col gap-5 lg:flex-row  lg:items-center lg:justify-between  lg:py-16 w-[90%] lg:w-[80%] ">
        <div class="flex justify-center w-full py-5 lg:py-0   lg:w-[60%]">
          <div class="flex flex-col  items-center lg:items-start w-[90%]">
            <div class="flex flex-col gap-4  justify-between  sm:text-[20px] mt-5 lg:text-start">
              <div class="">
                <TitleH2 title="Créez l'histoires avec votre GROUPE NUMERIQUE"/>
              </div>
              <p class="">
                Ne restez pas en arrière en adoptez les technologies numériques
                pour augmenter votre efficacité et rester compétitif sur le
                marché actuel en constante évolution.
              </p>
              <p class="">
                Nous vous aidons à concevoir des expériences qui simplifient quotidienne pour tous.
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center lg:w-[40%] h-[380px] bg-black ">
          <img class="h-full  rounded-[15px]" src="/images/cardIntroOfTfePage.jpg" alt="">
        </div>
      </div>
  </div>
</template>

<script setup>
import TitleH1 from '../global/TitleH1.vue';
import TitleH2 from '../global/TitleH2.vue';
</script>

<style scoped>

.containerVideoTop {
  min-height: 60%;
  position: relative;
  min-width: 200px;
}
.containerVideoTop{
  width: 100%;
  height: 400px;
}
.containerVideoTop .videoTop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: aqua;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
}

@media screen and (min-width: 820px) {
  .containerVideoTop {
    min-height: 70vh;
    position: relative;
    min-width: 200px;
  }
}

@media screen and (min-width: 1024px) {
  .containerVideoTop {
    min-height: 70vh;
    position: relative;
    min-width: 200px;
    width: 60%;
  }
}
</style>