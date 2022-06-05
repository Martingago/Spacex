<template>
<form action="#" id="my-form">
    <input type="text" placeholder="Nombre" id="input-nombre" required>
    <input type="email" name="Email" id="input-email" required placeholder="E-mail">
    <input type="text" name="asunto" id="input-asunto" required placeholder="Asunto">
    <textarea name="texto" id="input-texto" cols="30" rows="10" placeholder="Mensaje"></textarea>
    <input type="submit" value="Enviar" id="btn-submit">
</form>
</template>

<style scoped>



#my-form{
    display: grid;
    grid-template-columns: auto auto;
    gap: .75rem;
    width: 90vw;
    max-width: 600px;
    margin: auto;
    padding: 1rem 2rem;
    border-radius: 5px;
    /* background-color: black; */
    border:2px solid rgba(255,255,255, .6);
    backdrop-filter: blur(1px);
}
input[type=text], input[type=email]{
    border: none;
    font-size: 1.3rem;
    line-height: 1.2rem;
    border-radius: 0px;
    padding: .1rem 0;
    background-color: transparent;
    color: white;
    border-bottom: 3px solid rgba(255,255,255, .6);
    transition: border .3s linear;
}
input[type=text]:hover, input[type=email]:hover{
    border-bottom: 3px solid white;
}
input[type=text]:focus, input[type=email]:focus, input[type=text]:valid, input[type=email]:valid{
    outline: none;
    border-bottom: 3px solid rgb(179, 8, 119);
}


textarea{
    resize: none;
    outline: none;
    border: none;
    border-radius: 0;
    font-size: 1.3rem;
    padding: .5rem 0;
    font-style: normal;
    background-color: transparent;
    color: white;
    border-bottom: 3px solid rgba(255,255,255, .4)
}
textarea:focus{
    outline: none;
    background-color: transparent;
    border-bottom: 3px solid rgb(179, 8, 119);
}

#input-asunto, #input-texto{
    grid-column: 1/ 3;
}

#btn-submit{
    grid-column: 1 / 3;
    margin: .5rem auto;
    width: fit-content;
    padding: .5rem 1rem;
    font-size: 1.5rem;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s linear;
    border: none;
    color:  rgba(255,255,255, .6);
    border-bottom: 3px solid rgba(255,255,255, .6)
}
#btn-submit:hover{
    color: white;
    border-bottom: 3px solid white;
}


</style>

