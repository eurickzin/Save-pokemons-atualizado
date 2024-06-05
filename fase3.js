var capturados3 = 0;

var arbokcapturado = false;
var butterfreecapturado = false;
var pidgeycapturado = false;
var miaucapturado = false;
var eeveecapturado = false;
var venonatcapturado = false;

function drawfase3(){
    background(fundofase3);

    fill("#fff");
    rect(780, 15, 100, 80, 20);
    var mouse = `X: ${mouseX}\nY: ${mouseY}`;
    fill(0);
    stroke(0);
    textSize(25);
    text(mouse, 800, 45); // POSIÇÃO DO MOUSE

    text(capturados3, 700, 30); // Contador de capturados

    if (info == true) {
        image(missao3, 250, 10, 400, 200); // MISSÃO
      } else {
        image(infoicone, 425, 20, 50, 50);
      }
    
    fill("#fff");
    rect(780, 100, 100, 80, 20);
    fill(0);
    stroke(0);
    textSize(25);
    text(state, 800, 120); // ESTADO DO PERSONAGEM
    text(charX, 800, 150); // POSIÇÃO PERSONAGEM
    text(charY, 800, 170); // POSIÇÃO PERSONAGEM
    text(capturados3, 700, 30); // Contador de capturados

    if (capturados3 < 3) {
        image(porta, 730, 485, 150, 140); // PORTA
      } else {
        image(pokecentro, 730, 485, 150, 140); // POKÉCENTRO
      }

    image(comando, 350, 618, 160, 80); // COMANDO

    image(plataforma3, 100, 200, 100, 35);
    image(plataforma3, 450, 200, 100, 35);
    image(plataforma3, 680, 200, 100, 35);
    image(plataforma3, 20, 300, 100, 35);
    image(plataforma3, 300, 300, 100, 35);
    image(plataforma3, 540, 300, 100, 35);
    image(plataforma3, 450, 400, 100, 35);
    image(plataforma3, 650, 400, 100, 35);
    image(plataforma3, 180, 400, 100, 35);
    image(plataforma3, 50, 500, 100, 35);
    image(plataforma3, 300, 500, 100, 35);
    image(plataforma3, 500, 500, 100, 35);

    if (!eeveecapturado) {
        image(eevee, 200, 350, 60, 60); // SQUIRTLE PRIMO
      }
      if (!venonatcapturado) {
        image(venonat, 550, 206, 95, 100); // PIDGEOTTO PRIMO
      }
      if (!butterfreecapturado) {
        image(butterfree, 100, 95, 100, 100); // VENUSAUR PRIMO
      }
      if (!pidgeycapturado) {
        image(pidgey, 320, 235, 70, 70); // PIKACHU NÃO É PRIMO
      }
      if (!arbokcapturado) {
        image(arbok, 685, 110, 100, 100); // BEEDRILL NÃO É PRIMO
      }
      if (!miaucapturado) {
        image(miau, 665, 323, 65, 80); // POLIWAG
      }

    drawCharacter();
    colisaoPorCima3();
    colisaoPorBaixo3();
    queda3()
}

function colisaoPorCima3() {
    if (state == falling) {
      if (charY >= 470 && charY <= 475) {
        if ((charX > 25 && charX < 150) || (charX > 270 && charX < 400) || (charX > 500 && charX < 600)) {
          state = idle;
          chaoY = 470;
        }
      }
      if (charY >= 370 && charY <= 375) {
        if ((charX > 155 && charX < 255) || (charX > 440 && charX < 540) || (charX > 630 && charX < 730)) {
          state = idle;
          chaoY = 370;
        }
      }
      if (charY >= 270 && charY <= 275) {
        if ((charX > 0 && charX < 100) || (charX > 270 && charX < 400) || (charX > 540 && charX < 640)) {
          state = idle;
          chaoY = 270;
        }
      }
      if (charY >= 170 && charY <= 175) {
        if ((charX > 100 && charX < 200) || (charX > 450 && charX < 550) || (charX > 680 && charX < 780)) {
          state = idle;
          chaoY = 270;
        }
      }
    }
  }

function colisaoPorBaixo3() {
    if (state == jumping) {
      if (charY <= 515 && charY >= 510) {
        if ((charX > 20 && charX < 150) || (charX > 275 && charX < 400) || (charX > 475 && charX < 580)) {
          state = falling;
        }
      }
      if (charY <= 415 && charY >= 410) {
        if ((charX > 155 && charX < 255) || (charX > 440 && charX < 540) || (charX > 630 && charX < 730)) {
          state = falling;
        }
      }
      if (charY <= 315 && charY >= 310) {
        if ((charX > 0 && charX < 100) || (charX > 300 && charX < 400) || (charX > 540 && charX < 640)) {
          state = falling;
        }
      }
      if (charY <= 215 && charY >= 210) {
        if ((charX > 100 && charX < 200) || (charX > 450 && charX < 550) || (charX > 680 && charX < 780)) {
          state = falling;
        }
      }
    }
  }

function queda3() {
    if (state == idle) {
      if (charY < 580 && charY >= 470) {
        if ((charX < 25 || charX > 125) && (charX < 275 || charX >= 390) && (charX < 475 || charX > 580)) {
          state = falling;
          chaoY = 580;
        }
      }
  
      if (charY < 470 && charY >= 370) {
        if ((charX < 155 || charX > 255) && (charX < 425 || charX > 525) && (charX < 625 || charX > 725)) {
          state = falling;
          chaoY = 580;
        }
      }
  
      if (charY < 370 && charY >= 270) {
        if ((charX < 0 || charX > 100) && (charX < 275 || charX > 400) && (charX < 540 || charX > 640)) {
          state = falling;
          chaoY = 580;
        }
      }
      if (charY < 270 && charY >= 170) {
        if ((charX < 100 || charX > 200) && (charX < 450 || charX > 550) && (charX < 680 || charX > 780)) {
          state = falling;
          chaoY = 580;
        }
      }
    }
  }