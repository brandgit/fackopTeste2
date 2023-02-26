<template>
  <div class="flex flex-col items-center w-full h-[500px] sm:h-full relative bg-cover bg-no-repeat bg-center bg-[url('/images/backgroundFackop.png')] text-[#fff]">
    <h1 class="w-[90%] text-[15px] sm:text-[20px] text-center mt-[110px]">Prenez part a l'expension du Numerique avec le GROUP FACKOP</h1>
    <div class="text-center mt-5 w-[90%] sm:mt-[100px] sm:text-[40px] md:text-[50px] text-[30px]  lg:text-[65px]">
        <h1 class="font-bold ">FACKOP</h1>
        <h1 class="font-bold ">GROUPE NUMERIQUE</h1>
    </div>
    <p class="w-[90%] sm:w-[500px] text-center mt-[20px]">Des expériences innovantes permettant aux utilisateurs de bénéficier des avantages du Digital sans avoir à comprendre les détails techniques.</p>
    <div class=" mt-[50px] absolute top-[80%] sm:text-[20px] sm:h-[30px] w-[90%] h-[25px] ml-[5%]  text-white">
        <div class="  top-0  h-[25px]  sm:h-[30px] overflow-hidden">
          <div class="contenent">
            <div class="block text-[white]">Group numerique</div>
            <div class="block text-[white]">Developpement numerique</div>
            <div class="block text-[white]">Marketing digital</div>
            <div class="block text-[white]">Solutions innoventes</div>
            <div class="block text-[white]">Group numerique</div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.containerVideo {
  min-height: 100vh;
  position: relative;
  min-width: 330px;
}
.containerVideo .video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contenent {
  position: relative;
  animation: carousel 10s ease-in-out infinite;
}

@keyframes carousel {
  0%,
  20% {
    transform: translateY(0);
  }
  25%,
  45% {
    transform: translateY(-25px);
  }
  50%,
  70% {
    transform: translateY(-50px);
  }
  75%,
  95% {
    transform: translateY(-75px);
  }
  100% {
    transform: translateY(-100px);
  }
}

@media screen and (min-width: 640px) {
  @keyframes carousel {
    0%,
    20% {
      transform: translateY(0);
    }
    25%,
    45% {
      transform: translateY(-30px);
    }
    50%,
    70% {
      transform: translateY(-60px);
    }
    75%,
    95% {
      transform: translateY(-90px);
    }
    100% {
      transform: translateY(-120px);
    }
  }
}
</style>
