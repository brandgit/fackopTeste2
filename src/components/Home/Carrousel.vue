<template>
  <div class="relative mt-10 w-full h-[320px] sm:h-[450px]">
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="/carrousel/immo1.jpg" alt="" />
          <img src="/carrousel/marche.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/application1.jpg" alt="" />
          <img src="/carrousel/dev2.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/dev1.jpg" alt="" />
          <img src="/carrousel/immo1.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/llivraison2.jpg" alt="" />
          <img src="/carrousel/ville.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/application2.jpg" alt="" />
          <img src="/carrousel/commerce1.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/taxi.jpg" alt="" />
          <img src="/carrousel/immo2.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/dev2.jpg" alt="" />
          <img src="/carrousel/transport.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/application3.jpg" alt="" />
          <img src="/carrousel/llivraison1.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/livraison2.jpg" alt="" />
          <img src="/carrousel/dev2.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/immo1.jpg" alt="" />
          <img src="/carrousel/application4.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/application4.jpg" alt="" />
          <img src="/carrousel/commerce2.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/llivraison1.jpg" alt="" />
          <img src="/carrousel/marche.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/immo3.jpg" alt="" />
          <img src="/carrousel/immo2.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/taxi.jpg" alt="" />
          <img src="/carrousel/marche.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/marche.jpg" alt="" />
          <img src="/carrousel/livraison3.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/ville.jpg" alt="" />
          <img src="/carrousel/application1.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="/carrousel/immo2.jpg" alt="" />
          <img src="/carrousel/llivraison1.jpg" alt="" />
        </div>
      </div> 
          <div
            class="bottom-0 p-0 left-0 absolute rounded-tl-[100%] w-[50%] h-[30px] lg:h-[40px] bg-[white]"
          ></div>
          <div
            class="bottom-0 p-0 right-0 absolute rounded-tr-[100%] w-[50%] h-[30px] lg:h-[40px] bg-[white]"
          ></div>
          <div
            class="top-0 left-0 p-0 absolute rounded-bl-[100%] w-[50%] h-[30px] lg:h-[40px] bg-[white]"
          ></div>
          <div
            class="top-0  right-0 p-0 absolute rounded-br-[100%] w-[50%] h-[30px] lg:h-[40px] bg-[white]"
          ></div>
    </div>
  </div>
</template>


<style scoped>
.slider {
  height: 100%;
  width: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  
}
.slide-track {
  -webkit-animation: scroll 30s linear infinite;
  animation: scroll 30s linear infinite;
  display: flex;
  height: 100%;
  width: calc(350px * 14);
}



.slider .slide-track {
  -webkit-animation: scroll 30s linear infinite;
  animation: scroll 30s linear infinite;
  display: flex;
  width: calc(350px * 14);
  height: 100%;
}

.slider .slide {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.slider .slide img {
  width: 100%;
  height: 50%;
  border-radius: 10px;
  border: 2px solid #bbbbbb;
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
  
}

@media screen and (min-width: 1020px) {
 
}
</style>