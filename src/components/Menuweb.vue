<template>

    <div class="section-menu" v-bind:class="{expanded: isActive}">
        <nav class="main-menu">
            <ul class="index-menu">
                <li>
                    <div class="btn" @click="isActive = !isActive"><i class="fa-solid fa-jedi"></i></div>
                </li>
            </ul>
            <hr class="menu-line">
            <ul class="navegation-menu">
                <li>
                    <router-link to="">Viaje</router-link>
                </li>
                <li>
                    <router-link to="">Informacion</router-link>
                </li>
                <li>
                    <router-link to="">Contacto</router-link>
                </li>
            </ul>
        </nav>
    </div>

</template>
<script setup>
import { ref } from "vue";

let isActive = ref();

</script>

<style scoped>
@media screen and (min-width:1081px) {


    .section-menu {
        width: calc(100% - 4rem);
        height: 62px;
        z-index: 2;
        margin: 1rem 2rem;
    }

    .main-menu {
        position: fixed;
        width: calc(100% - 4rem);
        height: fit-content;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
    }

    .main-menu .index-menu li .btn{
        display: flex;
        width: 55px;
        height: 55px;
        padding: .2rem;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        text-decoration: none;
        color: white;
        border-radius: 50%;
    }

    .main-menu .menu-line {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: .2rem;
        border: none;
        margin: auto 1rem;
        background-color: white;
    }

    .main-menu .navegation-menu {
        display: flex;
        flex-direction: row;
        height: fit-content;
    }

    .main-menu .navegation-menu li {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-menu .navegation-menu li a {
        width: 120px;
        padding: .5rem 1rem;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
        color: white;
    }

    .main-menu .index-menu li a:hover,
    .main-menu .navegation-menu li a:hover {
        background-color: rgba(179, 125, 224, 0.3);
        backdrop-filter: blur(3px);
    }
}

@media screen and (max-width: 1080px) {

    .section-menu {
        height: 55px;
        z-index: 2;
    }

    .menu-line {
        display: none;
    }

    .navegation-menu {
        display: none;
    }

    .main-menu .index-menu {
        height: auto;
    }

    .main-menu .index-menu li {
        display: flex;
    }

    .main-menu .index-menu li .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: fit-content;
        height: fit-content;
        padding: .5rem;
        margin: .5rem;
        border-radius: 50%;
        font-size: 2.5rem;
        color: white;
    }

    /* MENU EXPANDIDO */
    .expanded{
        height: 100vh;

    }

    .expanded .main-menu {
        position: fixed;
        width: 100%;
        height: inherit;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        background-image: url("@/assets/img/espacio-nebulosa-background.png");
        background-position: center;
    }

    .expanded .main-menu .index-menu {
        height: auto;
    }

    .expanded .main-menu .index-menu li {
        display: flex;
    }

    .expanded .main-menu .index-menu li a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: fit-content;
        height: fit-content;
        padding: .5rem;
        margin: .5rem;
        border-radius: 50%;
        font-size: 2.5rem;
        color: white;
    }

    .expanded .section-menu .main-menu .menu-line {
        align-self: center;
        width: auto;
        margin: auto 2rem;
        height: .2rem;
        border: none;
        background-color: white;
    }

    .expanded .navegation-menu {
        grid-column: 1 / 3;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 0 2rem;
    }

    .expanded .navegation-menu li {
        display: flex;
        width: 100%;
        border-bottom: 2px solid white;
    }

    .expanded .navegation-menu li a {
        display: flex;
        margin: auto;
        width: 100%;
        justify-content: center;
        padding: .5rem;
        font-size: 1.3rem;
        color: white;
        text-decoration: none;
        transition: transform .3s linear;
    }

    .expanded .navegation-menu li a:hover {
        transform: scale(1.3);
    }

}
</style>