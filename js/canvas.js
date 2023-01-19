
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


function patibulo(){
    pincel.fillStyle = "black"
    pincel.strokeStyle = "black"
    pincel.lineWidth = 8
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
    //cabeza
    pincel.beginPath();
   pincel.arc(255, 80,30,2*Math.PI,false)
   pincel.moveTo(275, 78);
   pincel.arc(255, 78, 20, 0, Math.PI, false);
   pincel.moveTo(245, 70)
   pincel.arc(245, 70,3,2*Math.PI,false)
   pincel.moveTo(265, 70)
   pincel.arc(265, 70,3,2*Math.PI,false)
    pincel.stroke();
    //cuerpo
    pincel.beginPath();
    pincel.moveTo(255,110);
    pincel.lineTo(255,260);
    pincel.stroke();
    //brazo izq
    pincel.beginPath();
    pincel.moveTo(255,130);
    pincel.lineTo(210,190);
    pincel.stroke();
    //brazo derecho
    pincel.beginPath();
    pincel.moveTo(255,130);
    pincel.lineTo(295,190);
    pincel.stroke();
     //pierna izq
     pincel.beginPath();
     pincel.moveTo(255,260);
     pincel.lineTo(210,300);
     pincel.stroke();
     //pierna der
     pincel.beginPath();
     pincel.moveTo(255,260);
     pincel.lineTo(295,300);
     pincel.stroke();



    
 
    
  
}