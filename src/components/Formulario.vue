<template>
<form action="#" id="my-form">
    <input type="text" placeholder="Nombre" id="input-nombre" required>
    <input type="email" name="Email" id="input-email" required placeholder="E-mail">
    <input type="text" name="asunto" id="input-asunto" placeholder="Asunto">
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
    padding: 1rem;
    border-radius: 5px;
    background-color: rgb(102, 70, 105 , .3);
    backdrop-filter: blur(1px);
    box-shadow: 4px 4px 10px lightgray;
}

input{
    border: none;
    font-size: 1.3rem;
    border-radius: 5px;
    padding: .5rem 1rem;
    background-color: rgba(255,255,255, .6);
    color: white;
}
input:focus{
    outline: none;
    background-color: rgba(255,255, 255 , .5);
}
textarea{
    resize: none;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 1.3rem;
    padding: .5rem 1rem;
    font-style: normal;
    background-color: rgba(255,255,255, .6);
    color: white;
}
textarea:focus{
    outline: none;
    background-color: rgba(255,255, 255 , .5);
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
    cursor: pointer;
    transition: all .2s linear;
}
#btn-submit:hover{
    transform: scale(1.05);
    box-shadow: 0px 0px 8px 2px darkgray;
}


</style>

