<template>
    <div class="wrapperMenuBurger">
        <div class="wrapperButtonMenuBurger">
            <div @click="navigationHandler" class="buttonMenuBurger">
                <div v-bind:class="[stateManu ? 'barBurgerUnclicked' : 'barBurgerClicked']"></div>
                <div v-bind:class="[stateManu ? 'barBurgerUnclicked' : 'barBurgerClicked']"></div>
                <div v-bind:class="[stateManu ? 'barBurgerUnclicked' : 'barBurgerClicked']"></div>
            </div>
        </div>                     
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import store from '../../store';

    // Récupération d'une variable du state
    const stateManu = computed(() => store.getters.getStateMenu)

    const navigationHandler = () => {
        stateManu  && store.commit('setStateMenu',!stateManu.value)
    }


</script>

<style scoped>
.wrapperMenuBurger{
        height: 80%;
        display: block;
    }
    .wrapperButtonMenuBurger{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .buttonMenuBurger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 15px;
        width: 20px;
        cursor: pointer;
    }
    .barBurgerUnclicked {
    height: 2px;
    width: 100%;
    background-color: white;
    /* background: linear-gradient(to right, rgba(253,255,0, .8) 35%, rgba(52, 73, 194, .8) 69%); */
    }
    .barBurgerClicked {
    height: 2px;
    width: 100%;
    background-color: white;
    /* background: linear-gradient(to right, rgba(253,255,0, .8) 35%, rgba(52, 73, 194, .8) 69%); */
    }
    .barBurgerClicked:nth-child(1) {
    transform: rotate(45deg) translate(0.25em, 0.3em);
    transition: ease-out 0.5s;
    }
    .barBurgerClicked:nth-child(2) {
    transform: scale(0.1);
    transition: ease-out 0.5s;
    }
    .barBurgerClicked:nth-child(3) {
    transform: rotate(-45deg) translate(0.25em, -0.3em);
    transition: ease-out 0.5s;
    }
    .barBurgerUnclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    }

    @media screen and (min-width: 1030px) {
    .wrapperMenuBurger {
        display: none;
    }
}
</style>




