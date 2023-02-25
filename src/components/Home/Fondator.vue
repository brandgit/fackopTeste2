<template>
    <div class="relative w-full h-full">
        <img
              class="absolute rounded-[15px] w-[100%] h-[80%]"
              :src="image"
              alt="/Images/p7.jpg"
            />
        <div class="flex flex-col justify-center absolute bottom-0 w-full h-[20%]">
              <h1 class="fondatorName">{{name}}</h1>
              <h1 class="fondatorWork">{{ proffession }}</h1>
        </div>
    </div>
</template>

<script setup>
 const props = defineProps({
    image:String,
    name:String,
    proffession:String
 })
</script>

<style scoped>
.fondatorName {
  font-weight: bold;
}

.fondatorWork {
  color: #5d3891;
}

@media (min-width: 500px) {
  .fondatorName,
  .fondatorWork {
    font-size: 10px;
  }
}
@media (min-width: 750px) {
  .fondatorName,
  .fondatorWork {
    font-size: 15px;
  }
}
@media (min-width: 850px) {
  .fondatorName,
  .fondatorWork {
    font-size: 20px;
  }
}

</style>