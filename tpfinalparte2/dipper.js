class Dipper {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.diam = 30;
    this.velocidad = 5;
  }
  
  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad; 
    }
       if (this.x < this.diam / 2) {
      this.x = this.diam / 2; 
    }
    if (this.x > width - this.diam / 2) {
      this.x = width - this.diam / 2;
    }
  }
  tocaCirculo(obj) {
    let distancia = dist(this.x, this.y, obj.x, obj.y);
    //return distancia < (this.diam / 2 + obj.diam / 2);
    let sumaDeRadios = ((this.diam / 2) + (obj.diam / 2));
    return distancia < sumaDeRadios;  
  }
  
  tocaRectangulo(rect) {
    // Radio del círculo
    let radioCirculo = this.diam / 2;
  
    // El lado del cuadrado es el diámetro
    let ladoCuadrado = rect.diam;
  
    // Encuentra el punto más cercano del cuadrado al centro del círculo
    let closestX = Math.max(rect.x, Math.min(this.x, rect.x + ladoCuadrado));
    let closestY = Math.max(rect.y, Math.min(this.y, rect.y + ladoCuadrado));
  
    // Calcula la distancia entre el centro del círculo (this.x, this.y) y el punto más cercano
    let distancia = dist(this.x, this.y, closestX, closestY);
  
    // Si la distancia es menor que el radio del círculo, hay colisión
    return distancia < radioCirculo;
  }

  
  mostrar() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.diam);
  }
}
