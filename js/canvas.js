
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


function patibulo(){
    pincel.fillStyle = "black"
    pincel.beginPath();
    pincel.moveTo(100,400);
    pincel.lineTo(50,420);
    pincel.lineTo(150,420);
    pincel.fillRect(50,420,100,20)
    pincel.fill();
    pincel.fillRect(95,100,10,310);
    pincel.fillRect(95,100,200,10);
    pincel.fillRect(295,100,10,50);
}