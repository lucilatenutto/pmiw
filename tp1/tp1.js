//Tenutto Lucila
//tp1
//comision 2
//link youtube: https://youtu.be/Y1hmzUMdyA8?si=FES8uOf-h1fIVVqf

let arte;
let tam;
let cant = 20;
let animacion = true;

let colorCirculos;
let colorCuadrados;
let colorFondo;

function preload() {
arte = loadImage('assets/opart2.jpg');
}

function setup() {
createCanvas(800, 400);
tam = width / (2 * cant);
iniciarColores(); 
noLoop();

}


function draw() {
background(colorFondo);
image(arte, 0, 0);
dibujarPatron();

}

function iniciarColores(){
  colorFondo = color(255);
  colorCirculos = color(0);
  colorCuadrados = color(0);
}

function verColor(x, y) {
  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = map(x + y, 0, width + height, 0, 255);
  return color(r, g, b);
}

function reiniciarColorFondo() {
  colorFondo = color(255); 
  redraw();
}

function reiniciarColoresFormas() {
  colorCirculos = color(0);
  colorCuadrados = color(0);
  redraw();
}

function dibujarPatron() {   
for (let i = 400; i < width; i += tam) { 
  for (let j = 0; j < height; j += tam) {
      if ((i / tam + j / tam) % 2 === 0) {
        if(animacion){
         fill(verColor(mouseX, mouseY));
        }else{
          fill(colorCirculos);
        }
        ellipse(i + tam / 2, j + tam / 2, tam, tam);
      } else {
        if (animacion){
         fill(verColor(mouseX, mouseY));
        } else {
          fill(colorCuadrados);
        }
        rect(i, j, tam, tam); 
      }
}
}
}
function mousePressed() { 
  if (mouseX >= 400 && mouseX < 800 && mouseY >= 0 && mouseY < 400) {
    cambiarFormaAleatorio(255, 255, 255);
  } 
  else {
    alternarAnimacion();
  }
}

function cambiarFormaAleatorio(maxR, maxG, maxB) {
  colorCirculos = color(random(maxR), random(maxG), random(maxB));
  colorCuadrados = color(random(maxR), random(maxG), random(maxB));
  redraw();
}

function cambiarFondoRandom() {
  colorFondo = color(random(255), random(255), random(255));
  redraw();
}

function alternarAnimacion() {
  animacion = !animacion;
  if (animacion) {
    loop();
  } else {
    noLoop();
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciarColorFondo();
  } else if (key === 'f' || key === 'F') {
    cambiarFondoRandom();
  } else if (key === 'a' || key === 'A') {
    reiniciarColoresFormas();
  }
}
