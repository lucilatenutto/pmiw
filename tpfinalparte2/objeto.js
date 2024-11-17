class Objeto {
  constructor() {
    this.x = random(0, width);
    this.y = 0;
    this.diam = 20;
    this.velocidad = 2;
  }

  mostrar() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.diam);
    this.y += this.velocidad;
  }
}
