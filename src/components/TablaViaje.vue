<template>
    <div class="section-viaje-selector">
        <h1 class="tittle-section-viaje">Elige tu destino</h1>
        <div class="planeta-viaje-selector">
            <div class="planeta"></div>
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
    </div>
</template>

<script setup>
</script>

<style scoped>
.section-viaje-selector {
    display: grid;
    grid-template-columns: minmax(200px, 500px) auto;
    justify-content: center;
    width: 90%;
    margin: auto;
    padding: 2rem;
    gap:  4rem 6rem;
}
.tittle-section-viaje{
    grid-column: 1 / 3;
    color: white;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: lighter;
    margin: 0 1rem;
}
/* planeta */
.planeta-viaje-selector {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.planeta-viaje-selector .planeta {
    margin: auto;
    position: relative;
    width: 100%;
    background-image: url("@/assets/img/mars-texture-map-ajustada.jpg");
    background-position: 0%;
    background-size: cover;
    border-radius: 50%;
    animation: rotacionPlaneta 60s infinite linear;
}

.planeta-viaje-selector .planeta::after {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 47%;
    -webkit-box-shadow: inset -50px -35px 35px 30px rgba(0, 0, 0, .955);
    -moz-box-shadow: inset -50px -35px 35px 30px rgba(0, 0, 0, .955);
    box-shadow: inset -50px -35px 35px 30px rgba(0, 0, 0, .955);
    background-image: url("@/assets/img/nubes-planeta-marte.png");
    background-size: contain;
    transform: scale(1.1);
    animation: rotacionNubes 20s infinite linear;
}

@keyframes rotacionNubes {
    0% {transform:  scale(1.1) rotateZ(0deg);}
    50%{transform: scale(1.1) rotateZ(25deg);}
    100% {transform:  scale(1.1) rotateZ(0deg);}
    
}




.planeta-viaje-selector .planeta::before{
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    display: block;
    padding-bottom: 100%;
    width: 100%;
    border-radius: 49%;
    box-shadow:  inset 5px -3px 5px rgb(8, 8, 8);
    -webkit-box-shadow: inset 5px -3px 5px rgb(8, 8, 8);
    -moz-box-shadow: inset 5px -3px 5px rgb(8, 8, 8);
}

@keyframes rotacionPlaneta {
    0% {
        background-position: 0%;
    }

    100% {
        background-position: 67%;
    }
}

.component-viaje-selector {
    display: grid;
    grid-template-columns: auto;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: 500px;
    gap: 2.5rem;
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
    border-bottom: 4px solid transparent;
    transition: border .3s linear;
}

.nav-viaje .selector-viaje:hover {
    border-bottom: 4px solid white;
}

/* Tabla del viaje */

.tabla-viaje-info {
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
}


.tabla-viaje-info .tittle {
    font-size: 4rem;
    line-height: 4rem;
    color: white;
    letter-spacing: .25rem;
    margin-bottom: .5rem;
    transform: scaleY(1.4);
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
    background-color: rgba(255, 255, 255, 0.3);

}

.table-statics {
    display: grid;
    grid-template-columns: auto 1fr;
    width: auto;
    gap: 3rem;
}

.table-statics .statics {
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