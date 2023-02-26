<template>
    <h1 class="text-[20px] font-bold  md:text-[30px] text-[#5d3891]">
        {{ props.title }}
    </h1>
</template>

<script setup>
 const props = defineProps({
    title:String
 })
</script>