<template>
  <div class="w-full h-[100vh] relative bg-cover bg-no-repeat bg-center bg-[url('/images/backgroundFackop.png')]">
    <div class="flex flex-col top-[30%] sm:top-[35%] lg:top-[35%] absolute w-full z-1 bg-blck">
      <div class=" w-[80%] ml-[5%] sm:w-[600px] sm:text-[50px] md:w-[700px] md:text-[60px] lg:w-[900px] xl:w-[900px] text-[33px]  lg:text-[75px] text-white">
        <h1 class="font-bold ">Prenez part a l'expension du Numerique avec le GROUP FACKOP</h1>
      </div>
      <div class="  mt-[20px] sm:text-[20px] sm:h-[30px] w-[80%] h-[25px] ml-[5%]  text-white">
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
