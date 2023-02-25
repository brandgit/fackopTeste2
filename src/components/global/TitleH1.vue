<template>
    <h1 class="text-[25px] font-bold sm:text-[40px] md:text-[50px] text-center">
        {{ props.title }}
    </h1>
</template>

<script setup>
 const props = defineProps({
    title:String
 })
</script>