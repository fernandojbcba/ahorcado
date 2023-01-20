
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");
let contadorerrados = 0
let findejuego = false
pincel.fillStyle = "black"
    pincel.strokeStyle = "black"
    pincel.lineWidth = 8
//dibujo horca
function horca(){
    
    pincel.beginPath();
    //base
    pincel.moveTo(25, 350);
    pincel.lineTo(325, 350);
    //columna
    pincel.moveTo(105, 0);
    pincel.lineTo(105, 350);
    //angulos soporte columna
    pincel.moveTo(165, 350);
    pincel.lineTo(105, 320);
    pincel.lineTo(45, 350);
    pincel.fill();
    // VIGA
    pincel.moveTo(160, 0);
    pincel.lineTo(105, 60);
    
    pincel.moveTo(255, 4);
    pincel.lineTo(105, 4);
    // CUERDA
    pincel.moveTo(255, 0);
    pincel.lineTo(255, 50);
    pincel.stroke();
}
//
function ahorcado(){
    
pincel.beginPath();
contadorerrados ++;
switch(contadorerrados){
    case 1: //cabeza
        pincel.arc(255, 80,30,2*Math.PI,false)
        pincel.moveTo(275, 78);
        pincel.arc(255, 78, 20, 0, Math.PI, false);
        pincel.moveTo(245, 70)
        pincel.arc(245, 70,3,2*Math.PI,false)
        pincel.moveTo(265, 70)
        pincel.arc(265, 70,3,2*Math.PI,false)
        break;
    case 2: //cuerpo
        pincel.moveTo(255,110);
        pincel.lineTo(255,260); ;
        break;
    case 3: //brazo izq
        pincel.moveTo(255,130);
        pincel.lineTo(210,190);;
        break;   
    case 4: //brazo der
        pincel.moveTo(255,130);
        pincel.lineTo(295,190);;
        break;  
    case 5: //pierna
        pincel.moveTo(255,260);
        pincel.lineTo(210,300);
        break;
    case 6: //pierna der 
        pincel.moveTo(255,260);
        pincel.lineTo(295,300);
        break;   
}
pincel.stroke();

}

    
 
    
  
