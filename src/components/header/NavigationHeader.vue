<template>
    <nav class="w-[55%] h-full">
        <div class="flex items-center justify-center w-full h-full" >
            <div class="flex items-center justify-between  h-full w-[300px] ">
                <router-link   class="flex items-center  h-full  " to="/"><h1 class="flex items-center h-full hover:border-solid hover:border-b-white hover:border-b-[2px]" >Presentation</h1></router-link>
                <router-link  class="flex items-center  h-full  " to="/services"><h1 class="flex items-center h-full hover:border-solid hover:border-b-white hover:border-b-[2px]">Services</h1></router-link>
                <router-link class="flex items-center  h-full  " to="/about"><h1 class="flex items-center h-full hover:border-solid hover:border-b-white hover:border-b-[2px]">About</h1></router-link>
                <router-link  class="flex items-center  h-full  " to="/contact"><h1 class="flex items-center h-full hover:border-solid hover:border-b-white hover:border-b-[2px]">Contacts</h1></router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
 nav{
    display: none;
}

@media screen and (min-width: 1030px) {
    nav{
        display: block;
    }
}
</style>