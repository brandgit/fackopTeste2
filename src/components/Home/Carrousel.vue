<template>
    <div class="flex items-center relative mt-3 justify-center w-full h-[300px] sm:h-[350px] lg:h-[450px]">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
                <img src="/carrousel/immo1.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/application1.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/dev1.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/livraison2.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/application2.jpg" alt="" />
              </div>
              <div class="slide">
                <div class="slide">
                <img src="/carrousel/immo2.jpg" alt="" />
              </div>
                <img src="/carrousel/dev2.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/application3.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/livraison2.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/immo1.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/application4.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/llivraison1.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/carrousel/immo3.jpg" alt="" />
              </div>
          </div>
          <div
            class="bottom-0 left-0 absolute rounded-tl-[100%] w-[50%] h-[30px] lg:h-[40px] bg-[white]"
          ></div>
          <div
            class="bottom-0 right-0 absolute rounded-tr-[100%] w-[50%] h-[30px] lg:h-[40px] bg-[white]"
          ></div>
          <div
            class="top-0 left-0 absolute rounded-bl-[100%] w-[50%] h-[30px] lg:h-[40px] bg-[white]"
          ></div>
          <div
            class="top-0 right-0 absolute rounded-br-[100%] w-[50%] h-[30px] lg:h-[40px] bg-[white]"
          ></div>
        </div>
    </div>
</template>


<style scoped>
.slide-track {
  -webkit-animation: scroll 30s linear infinite;
  animation: scroll 30s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slider {
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider .slide-track {
  -webkit-animation: scroll 30s linear infinite;
  animation: scroll 30s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slider .slide {
  height: 350px;
  width: 350px;
}

.slider .slide img {
  width: 98%;
  height: 100%;
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

.container {
  display: flex;

  flex-direction: column;
  height: 1200px;
  width: 100%;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
}

.fondatorName {
  font-weight: bold;
}

.fondatorWork {
  color: #5d3891;
}

@media (min-width: 500px) {
  .container {
    display: flex;

    flex-direction: row;
    height: 200px;
  }
  .fondatorName,
  .fondatorWork {
    font-size: 10px;
  }
}
@media (min-width: 650px) {
  .container {
    display: flex;

    flex-direction: row;
    height: 300px;
  }
}
@media (min-width: 750px) {
  .container {
    display: flex;

    flex-direction: row;
    height: 400px;
  }
  .fondatorName,
  .fondatorWork {
    font-size: 15px;
  }
}
@media (min-width: 850px) {
  .container {
    display: flex;

    flex-direction: row;
    height: 500px;
  }
  .fondatorName,
  .fondatorWork {
    font-size: 20px;
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
    height: 550px;
    width: 350px;
  }
}
</style>