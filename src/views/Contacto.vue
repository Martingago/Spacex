<template>
    <div class="section-contacto">
        <div></div>
        <FormularioVue></FormularioVue>
    </div>

</template>
<script setup>
import FormularioVue from '@/components/Formulario.vue';

</script>
<style scoped>
    .section-contacto{
        display: grid;
        grid-template-columns: auto 1fr;
    }
    @media screen and (max-width:1080px) {
        .section-contacto{
            grid-template-columns: 1fr;
        }
    }
</style>