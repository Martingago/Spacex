<template>
    <div class="planeta-viaje-selector">
        
    </div>
    <div class="component-viaje-selector">
        <nav class="nav-viaje">
            <ul>
                <li>
                    <router-link class="selector-viaje" to="/">Marte</router-link>
                </li>
                <li>
                    <router-link class="selector-viaje" to="/">Luna</router-link>
                </li>
                <li>
                    <router-link class="selector-viaje" to="/">Estacion espacial</router-link>
                </li>
            </ul>
        </nav>
        <div class="tabla-viaje-info">
            <h2 class="tittle">MARTE</h2>
            <p class="description">Lorem ipsum dolor seri Maioress esse consectetur. Distinctio ea impedit pariatur
                perspiciatis, ratione quidem blanditiis eveniet rerum non error consequuntur, ut accusantium eos
                voluptatum fuga quam. Voluptates, perspiciatis ullam.</p>
            <hr>
            <div class="table-statics">
                <div class="statics">
                    <h3>Distancia</h3>
                    <p>214343 km</p>
                </div>
                <div class="statics">
                    <h3>Tiempo</h3>
                    <p>9 meses</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
.component-viaje-selector {
    display: grid;
    grid-template-columns: auto;
    margin: auto;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    gap: 1.2rem;
    z-index: 1;
}

/* Selector viaje */
.nav-viaje {
    width: 100%;
    max-width: 500px;
}

.nav-viaje ul {
    display: grid;
    grid-template-columns: auto auto auto;
}

.nav-viaje .selector-viaje {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    text-transform: uppercase;
}

.nav-viaje .selector-viaje:hover{
    border-bottom: 4px solid white;
}

/* Tabla del viaje */

.tabla-viaje-info {
    display: grid;
    grid-template-columns: auto;
    padding: 1rem;
    gap: 1rem;
}


.tabla-viaje-info .tittle {
    font-size: 4.2rem;
    line-height: 4.2rem;
    color: white;
    letter-spacing: .8rem;
    margin-bottom: .5rem;
}

.tabla-viaje-info .description {
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: white;
   
}

.tabla-viaje-info hr {
    width: 100%;
    height: .1rem;
    border: none;
    background-color: white;
    
}

.table-statics {
    display: grid;
    grid-template-columns: auto 1fr;
    width: auto;
    gap: 3rem;
}
.table-statics .statics{
    display: flex;
    flex-direction: column;
    gap: .4rem;
}

.statics h3 {
    color: white;
    font-size: .9rem;
    line-height: 1.2rem;
    text-transform: uppercase;
}

.statics p {
    font-size: 1.6rem;
    line-height: 1.6rem;
    text-transform: uppercase;
    color: white;
}
</style>