<template>

    <nav class="main-menu">
        <ul class="index-menu">
            <li>
                <router-link to="">Inicio</router-link>
            </li>
        </ul>
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

</template>
<script setup>

</script>

<style scoped>
.main-menu{
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: rgba(155,155,155, .5);
    margin: 1rem;
    border-radius: 10px;
    overflow: hidden;
}
    .main-menu .navegation-menu{
        display: flex;
        flex-direction: row;
    }
    .main-menu .index-menu li a{
        display: flex;
        width: 200px;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        font-size: 2rem;
        text-decoration: none;
        color: white;
    }
    .main-menu .navegation-menu li a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 100%;
        font-size: 1.5rem;
        text-decoration: none;
        color: white;
    }
    .main-menu .index-menu li a:hover, .main-menu .navegation-menu li a:hover{
        background-color: rgba(179, 125, 224, 0.5);
    }

</style>