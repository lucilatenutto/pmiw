function imgs () {
  if (imagenes[estadoActual]) {
    image(imagenes[estadoActual], 0, 0, width, height);
  }
}

function txt () {
  if (textosPantalla[estadoActual]) {
    text(textosPantalla[estadoActual], width / 2, height / 4);
  }
}

function tiempo () {
  if (millis() - tiempoUltimoCambio > tiempoCambio) {
    pantalla++;
    if (pantalla >= imagenes.length) {
      pantalla = 0;
    }
    generarEstiloTexto( pantalla, color(random(255), random(255), random(255)), random(50, width - 50), random(50, height - 100));
    tiempoUltimoCambio = millis();
  }
}

function generarEstiloTexto(indicePantalla, nuevoColor, posX, posY) {
  coloresTexto[indicePantalla] = nuevoColor;
  posicionesTexto[indicePantalla] = createVector(posX, posY);
}


function musiquita () {
  if (key === 'm' && song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
