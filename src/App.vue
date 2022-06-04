<template>
<Menuweb></Menuweb>
  <router-view/>
  <div class="background"></div>
</template>

<script setup>
import Menuweb from '@/components/Menuweb.vue';
require ("@/assets/css/format.css")
require ('@/assets/css/app.css')

</script>
