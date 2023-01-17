
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


function patibulo(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(100,600);
    pincel.lineTo(50,620);
    pincel.lineTo(150,620);
    pincel.fill();
    pincel.fillRect(95,205,10,400);
    pincel.fillRect(95,205,200,10);
    pincel.fillRect(295,205,10,50);
}