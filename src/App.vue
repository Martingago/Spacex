<template>
<Menuweb></Menuweb>
  <router-view/>
  <div class="background"></div>
  <Index></Index>
</template>

<script setup>
import Menuweb from '@/components/Menuweb.vue';
import Index from '@/views/Index.vue'
require ("@/assets/css/format.css")

</script>

<style>
.background{
  position: fixed;
  background-image: url("@/assets/img/espacio-nebulosa-background.png");
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: -1;
} 

#app{
  display: grid;
  min-height: 100vh;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
}
</style>