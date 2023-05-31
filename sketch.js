var anchoPincel = 3;
var anchoLineas = 5;

function setup() {
  createCanvas(400, 400);

  background(100, 200, 150);
}

function draw() {
  // background(100, 200, 150);

  if (keyIsPressed) {
    if (key == "a" || key == "A") {
      stroke(150, 150, 150, 150);
    } else if (key == "z" || key == "Z") {
      stroke(0, 100, 100, 100);
    } else if (key == "c" || key == "C") {
      stroke(50, 50, 255, 200);
    }
    strokeWeight(anchoLineas);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  // if (keyIsPressed) {
  // if (key == "b" || key == "B") {
  // fill(150, 150, 150, 150);
  //}
  //strokeWeight(anchoPincel);
  //ellipse(100, 100, 100, 100);
  //}

  //lineas negras
  push();
  line(330, 130, 400, 130); //lineas horizontales
  line(250, 160, 400, 160);
  line(350, 200, 400, 200);

  line(220, 20, 270, 90); //lineas diagonales
  line(250, 20, 300, 80);

  line(150, 250, 60, 350); //lineas al lado de circulo pequeño
  line(150, 200, 56, 311); //Linea al lado de circulo pequeño

  line(300, 40, 100, 100); //linea sola
  line(80, 80, 300, 300); //linea triangulo
  line(200, 100, 300, 300); //linea triangulo
  pop();

  //circulos
  fill(255, 100, 150, 150);
  stroke(1);
  ellipse(150, 280, 80, 80); //rosa

  stroke(0);
  fill(255);
  ellipse(100, 250, 60, 60); //blanco

  noStroke();
  fill(500, 150, 0);
  ellipse(100, 250, 50, 50); //naranja

  fill(250, 250, 250);
  stroke(1);
  ellipse(100, 100, 140, 140); //blanco grande

  fill(250, 250, 20);
  noStroke();
  ellipse(100, 100, 100, 100); //amarillo
}

document.oncontextmenu = function () {
  return false;
};
