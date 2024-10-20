//Tenutto Lucila
//Gonzalez Victoria

let pantalla = 0; 
let imagenes = []; 
let tiempoCambio = 50000; 
let tiempoUltimoCambio;
let textos;
let fuente1, fuente2;
let posTextoX, posTextoY; 
let botones = [];
let song;


function setup() {
createCanvas(640, 480);
inicializarBotones();
dibujarBotones();
tiempoUltimoCambio = millis();
song.setVolume(0.5);
}

function draw() {
background(50);


if (millis() - tiempoUltimoCambio > tiempoCambio) {
    pantalla++;
    if (pantalla >= imagenes.length) {
      pantalla = 0; 
    }
    tiempoUltimoCambio = millis();
   
  }
   image(imagenes[pantalla], 0, 0, width, height);
    for (let i = 0; i < botones[pantalla].length; i++) {
        dibujarBotones(botones[pantalla][i]);
    }
      if (pantalla < textos.length) {
    textSize(24);
    fill(255);
    text(textos[pantalla], 50, 50);
  } else {
    fill(255);
  }
    textSize(12);
  fill(0);
 
}

function inicializarBotones() {
   botones[0] = [
       {x: 150, y: 350, ancho: 100, alto: 50, proximaPantalla: 2}, 
       {x: 350, y: 350, ancho: 100, alto: 50, proximaPantalla: 1}
   ]; 

   botones[1] = [
       {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 0}
   ]; 

   botones[2] = [
       {x: 150, y: 400, ancho: 100, alto: 50, proximaPantalla: 3}, 
   ];

   botones[3] = [
       {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 4}
   ];
   
   botones[4] = [
       {x:150, y: 350, ancho: 100, alto: 50, proximaPantalla: 5},
       {x:350, y: 350, ancho: 100, alto: 50, proximaPantalla: 8}  
   ];
   
    botones[5] = [
      {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 6}
   ];
   
    botones[6] = [
      {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 7}
   ];
   
    botones[7] = [
       {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 0}
   ];
   
    botones[8] = [
      {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 9}
   ];
   
    botones[9] = [
      {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 10}
   ];
   
     botones[10] = [
        {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 11}
   ];
   
     botones[11] = [
       {x:150, y: 350, ancho: 100, alto: 50, proximaPantalla: 12},
       {x:350, y: 350, ancho: 100, alto: 50, proximaPantalla: 14}
   ];
   
     botones[12] = [
        {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 13}
   ];
   
     botones[13] = [
       {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 0}
   ];
   
     botones[14] = [
       {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 15}
   ];
   
     botones[15] = [
       {x: 250, y: 400, ancho: 100, alto: 50, proximaPantalla: 0}
   ];
}
function dibujarBotones() {
   for (let i = 0; i < botones[pantalla].length; i++) {
       let boton = botones[pantalla][i];
       rect(boton.x, boton.y, boton.ancho, boton.alto);
   }
}
function mousePressed() {
   for (let i = 0; i < botones[pantalla].length; i++) {
       let boton = botones[pantalla][i];
       if (mouseX > boton.x && mouseX < boton.x + boton.ancho &&
           mouseY > boton.y && mouseY < boton.y + boton.alto) {
           pantalla = boton.proximaPantalla;
           }
   }
    pantalla++;
  if (pantalla >= textos.length) {
    pantalla = 0; 
  }
}
function mostrarPantalla(pantalla) {
   for (let i = 0; i < botones[pantalla].length; i++) {
       let boton = botones[pantalla][i];
       
       fill(200); //color del botón
       rect(boton.x, boton.y, boton.ancho, boton.alto);
   }
}
function keyPressed () {
  //musica
  if (key === 'm' && song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
