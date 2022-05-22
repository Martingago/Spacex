<template>
    <div class="main-section-index">
        <div class="planeta">
            <div class="planeta-marte">
                <div class="shadow"></div>

            </div>
        </div>
        <div class="astronauta">
            <img src="@/assets/img/astonauta.png" alt="">
        </div>

    </div>
</template>

<script>
</script>

<style scoped>
.main-section-index {
    display: grid;
    height: 100%;
    grid-template-columns: minmax(720px, 50%) auto;
    grid-template-rows: 100%;
    overflow: hidden;
}

.main-section-index .planeta {
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.main-section-index .planeta .planeta-marte {
    width: 697px;
    height: 697px;
    background-image: url("@/assets/img/mars-texture-map.jpg");
    background-position: 1387px 0;
    background-size: cover;
    border-radius: 50%;
    animation: rotacionPlaneta 50s infinite linear;
}

@keyframes rotacionPlaneta {
    0%{ background-position: 0px;}
    100% {background-position: 1387px;}
    
}
.shadow{
    border-radius: 50%;
    width: 700px;
    height: 700px;
    -webkit-box-shadow: inset -50px -15px 35px 24px rgba(0, 0, 0, 1);
    -moz-box-shadow: inset -50px -15px 35px 24px rgba(0, 0, 0, 1);
    box-shadow: inset -50px -15px 35px 24px rgba(0, 0, 0, .96);
}

.main-section-index .astronauta {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-section-index .astronauta img {
    display: flex;
    width: 200px;
    transform: scaleX(-1);
    animation: movimientoAstronauta 35s infinite linear;

}

@keyframes movimientoAstronauta {
    20% {
        transform: translate(-4rem, 3rem) scale(2) rotateZ(30deg) scaleX(-1);
    }

    35% {
        transform: translate(-3rem, -3.5rem) scale(1.2) rotateZ(0deg) scaleX(-1);
    }

    65% {
        transform: translate(2rem, 4rem) scale(1) rotateZ(-20deg) scaleX(-1);
    }

    80% {
        transform: translate(2.5rem, -3rem) scale(.8) rotateZ(-40deg) scaleX(-1);
    }

    100% {
        transform: translate(0, 0) scale(1) rotateZ(0deg) scaleX(-1);
    }

}
</style>