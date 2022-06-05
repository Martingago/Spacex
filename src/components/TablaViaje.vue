<template>
    <div class="section-viaje-selector">
        <h1 class="tittle-section-viaje">Elige tu destino</h1>
        <div class="planeta-viaje-selector">
            <div class="planeta marte" v-if="index == 0"></div>
            <div class="planeta luna" v-if="index == 1"></div>
            <div class="planeta est-espacial" v-if="index == 2">
                <img  class="astronauta" src="@/assets/img/astonauta.png" alt="asas">
            </div>
        </div>

        <div class="component-viaje-selector">
            <nav class="nav-viaje">
                <ul>
                    <li>
                        <div class="selector-viaje" @click="index = 0;" :class="{selected: index == 0}">Marte</div>
                    </li>
                    <li>
                        <div class="selector-viaje" @click="index = 1" :class="{selected: index == 1}">Luna</div>
                    </li>
                    <li>
                        <div class="selector-viaje" @click="index = 2" :class="{selected: index == 2}">Estacion espacial</div>
                    </li>
                </ul>
            </nav>
            <div class="section-table-planetas">
                <div class="tabla-viaje-info" v-if="index == 0">
                    <h2 class="tittle">MARTE</h2>
                    <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, corporis? Magnam ullam nam nemo, quas quod atque odit officia a repudiandae, cupiditate sunt rem consectetur molestias similique, fuga sapiente rerum!a repudiandae, cupiditate sunt rem consectetur molestias similique, fuga sapiente rerum!</p>
                    <hr>
                    <div class="table-statics">
                        <div class="statics">
                            <h3>Distancia</h3>
                            <p>224.614.343 km</p>
                        </div>
                        <div class="statics">
                            <h3>Tiempo</h3>
                            <p>237 dias</p>
                        </div>
                    </div>
                </div>
                <div class="tabla-viaje-info" v-if="index == 1">
                    <h2 class="tittle">LUNA</h2>
                    <p class="description">Lorem ipsum dolor seri Maioress esse consectetur. Distinctio ea impedit
                        pariatur
                        perspiciatis, ratione quidem blanditiis eveniet rerum non error consequuntur, ut accusantium eos
                        voluptatum fuga quam. Voluptates, perspiciatis ullam.</p>
                    <hr>
                    <div class="table-statics">
                        <div class="statics">
                            <h3>Distancia</h3>
                            <p>384.400 km</p>
                        </div>
                        <div class="statics">
                            <h3>Tiempo</h3>
                            <p>56 horas</p>
                        </div>
                    </div>
                </div>
                <div class="tabla-viaje-info" v-if="index == 2">
                    <h2 class="tittle">Est.ESPACIAL</h2>
                    <p class="description">Lorem ipsum dolor seri Maioress esse consectetur. Distinctio ea impedit
                        pariatur
                        perspiciatis, ratione quidem blanditiis eveniet rerum non error consequuntur, ut accusantium eos
                        voluptatum fuga quam. Voluptates, perspiciatis ullam.</p>
                    <hr>
                    <div class="table-statics">
                        <div class="statics">
                            <h3>Distancia</h3>
                            <p>456 km</p>
                        </div>
                        <div class="statics">
                            <h3>Tiempo</h3>
                            <p>17 minutos</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
require('@/assets/css/TablaViaje.css');

const  index = ref(0);
</script>

