const seccion_inicio = document.querySelector("#seccion_inicio");
const seccion_nueva_palabra = document.querySelector("#seccion_nueva_palabra");
const seccion_juego= document.querySelector("#seccion_juego");


const boton_inicio_juego = document.querySelector("#jugar");
const boton_agregar_palabra = document.querySelector("#agregar_palabra_inicio");
const boton_agregar_palabra_nueva = document.querySelector("#agregar_palabra_nueva");
const boton_cancelar = document.querySelector("#cancelar");
const boton_desistir = document.querySelector("#desistir");

boton_inicio_juego.addEventListener("click", () => {crear_juego()});
boton_agregar_palabra.addEventListener("click", () => {agregar_palabra()});
boton_cancelar.addEventListener("click", () => {inicio()});
boton_desistir.addEventListener("click", () => {inicio()});


function crear_juego(){


    seccion_inicio.style.display = "none";
    seccion_juego.style.display = "flex";
    seccion_nueva_palabra.style.display = "none";
}
function agregar_palabra(){
    seccion_inicio.style.display = "none";
    seccion_juego.style.display = "none";
    seccion_nueva_palabra.style.display = "flex";
}
function inicio(){
    seccion_inicio.style.display = "flex";
    seccion_juego.style.display = "none";
    seccion_nueva_palabra.style.display = "none";
}

