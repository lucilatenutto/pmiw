class Juego {
  constructor() {
    this.dipper = new Dipper();
    this.bill = new Bill();
    this.objetosRecolectados = 0;
    this.vidas = 3;
    this.juegoTerminado = false;
  }

  actualizar() {
    if (!this.juegoTerminado) {
      this.dipper.mover();
      this.bill.lanzarObjetos();
      this.bill.lanzarLaseres();

      for (let obj of this.bill.objetos) {
        if (this.dipper.tocaCirculo(obj)) {
          this.objetosRecolectados++;
          this.bill.removerObjeto(obj);
        }
      }
      for (let laser of this.bill.laseres) {
        if (this.dipper.tocaRectangulo(laser) && !laser.toco) {
          laser.toco = true;
          this.vidas--;
          this.bill.removerLaser(laser);
          if (this.vidas <= 0) {
            this.juegoTerminado = true;
          }
        }
      }

      if (this.objetosRecolectados >= 15) {
        this.juegoTerminado = true;
      }
    }
  }

  mostrar() {
    this.dipper.mostrar();
    this.bill.mostrar();
    fill(255);
    textSize(16);
    text(`objetos recolectados: ${this.objetosRecolectados}`, 10, 20);
    text(`vidas: ${this.vidas}`, 10, 40);

    if (this.juegoTerminado) {
      textSize(32);
      fill(255, 0, 0);
      text(this.vidas > 0 ? "ganaste" : "perdiste", width / 2 - 80, height / 2);
    }
  }
}
