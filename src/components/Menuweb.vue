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
                    <router-link to="/">Inicio</router-link>
                </li>
                <li>
                    <router-link to="/viajes">Viaje</router-link>
                </li>
                <li>
                    <router-link to="/">Informacion</router-link>
                </li>
                <li>
                    <router-link to="/contacto">Contacto</router-link>
                </li>
            </ul>
        </nav>
    </div>

</template>
<script setup>
import { ref } from "vue";
require('@/assets/css/menu.css')

let isActive = ref();

</script>
