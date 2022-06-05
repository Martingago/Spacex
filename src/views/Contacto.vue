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
        grid-template-columns: 50% 50%;
    }
</style>