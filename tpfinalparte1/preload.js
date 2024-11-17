function preload() {
  soundFormats ('mp3', 'ogg');
  song = loadSound ('/data/musica.mp3');

  imagenes[0] = loadImage('data/principal2.jpg'); 
  imagenes[1] = loadImage('data/principal1.jpg'); 
  imagenes[2] = loadImage('data/desaparicion3.jpg');
  imagenes[3] = loadImage('data/viaje1.jpg'); 
  imagenes[4] = loadImage('data/pistas.jpg'); 
  imagenes[5] = loadImage('data/bosque3.jpg'); 
  imagenes[6] = loadImage('data/cueva3.jpg'); 
  imagenes[7] = loadImage('data/cueva1.jpg'); 
  imagenes[8] = loadImage('data/bosque2.jpg'); 
  imagenes[9] = loadImage('data/auto1.jpg'); 
  imagenes[10] = loadImage('data/libros.jpg'); 
  imagenes[11] = loadImage('data/maquinatiempo1.jpg'); 
  imagenes[12] = loadImage('data/maquinatiempo3.jpg'); 
  imagenes[13] = loadImage('data/festejo.jpg'); 
  imagenes[14] = loadImage('data/maquinatiempo2.jpg');
  imagenes[15] = loadImage('data/tds2.jpg'); 

  fuente1 = loadFont('data/fuente1.ttf');
}
