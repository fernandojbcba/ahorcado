const seccion_inicio = document.querySelector("#seccion_inicio");
const seccion_nueva_palabra = document.querySelector("#seccion_nueva_palabra");
const seccion_juego= document.querySelector("#seccion_juego");


const boton_inicio_juego = document.querySelector("#jugar");
const boton_agregar_palabra = document.querySelector("#agregar_palabra_inicio");
const boton_agregar_palabra_nueva = document.querySelector("#agregar_palabra_nueva");
const boton_cancelar = document.querySelector("#cancelar");
const boton_desistir = document.querySelector("#desistir");
let guiones_text=document.querySelector("#guiones");
let errados_text=document.querySelector("#errados");
let nombres=["ORACLE","ALURA","LATAM","ONE"];
let palabraAleatoria_String="";
let palabraAleatoria_Length = 0;
let palabraAleatoria_Array =[];
let letra="";
var verificacionCaracter =  /^[A-Za-zñÑ]/;
let letras_erradas=[];
let letra_ingresadas=[];
let palabra_guiones=[];
let cant_acertadas=0;

boton_inicio_juego.addEventListener("click", () => {crear_juego()});
boton_agregar_palabra.addEventListener("click", () => {agregar_palabra()});
boton_cancelar.addEventListener("click", () => {inicio()});
boton_desistir.addEventListener("click", () => {inicio()});



function crear_juego(){

    seccion_inicio.style.display = "none";
    seccion_juego.style.display = "flex";
    seccion_nueva_palabra.style.display = "none";
    horca();
    findejuego=false;
    palabraAleatoria_String=(palabra_aleatoria());
    palabraAleatoria_Length=palabraAleatoria_String.length;
    palabraAleatoria_Array=palabraAleatoria_String.split("");
    generador_guion();
    
    

    console.log(errados_text);
    console.log(palabra_guiones);
    console.log(palabraAleatoria_Array);
    window.addEventListener('keydown', captura_letra);
    console.log(palabraAleatoria_String);



    
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

function palabra_aleatoria(){
let aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
return(aleatorio);
}

function captura_letra(event){
let letra_ingresada = event.key;
letra=letra_ingresada.toUpperCase();
console.log(letra);
if (verificacionCaracter.test(letra)){
    verifica_letra_en_palabra();
}
    
}
function verifica_letra_en_palabra(){
if (!letra_ingresadas.includes(letra)){
    letra_ingresadas.push(letra);
    if (palabraAleatoria_String.includes(letra)){
        console.log("se encontro");
        guiones_por_letras();
        acertadas();

    }
    else {
        ahorcado();
        letras_erradas.push(letra);
        errados_text.textContent = letras_erradas.join(" ");
        erradas();
    }
}
}
function generador_guion(){
    for(let i=0;i<palabraAleatoria_Length;i++){
    palabra_guiones.push("_");
    guiones_text.textContent = palabra_guiones.join(" ")
    }
}
function guiones_por_letras(){
    for(let a=0;a<palabraAleatoria_Length;a++) {
       if (letra == palabraAleatoria_String[a]){
        palabra_guiones[a]=letra;
        guiones_text.textContent = palabra_guiones.join(" ");
        cant_acertadas ++;
       }
    }
}
function acertadas(){
    if(cant_acertadas==palabraAleatoria_Length){
console.log("ganaste");

    }

}
function erradas(){
   if(contadorerrados==6){
    console.log("perdiste");
   }
}