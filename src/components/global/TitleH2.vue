<template>
    <h1 class="text-[20px] font-bold sm:text-[30px] md:text-[40px] text-[#5d3891]">
        {{ props.title }}
    </h1>
</template>

<script setup>
 const props = defineProps({
    title:String
 })
</script>