let juego;
let fondo;

function preload() {
  fondo = loadImage('data/fondo.jpg');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  image(fondo, 0, 0, width, height); 
  juego.actualizar();
  juego.mostrar();
}
