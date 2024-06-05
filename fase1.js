var capturados = 0;
var squirtlecapturado = false;
var venusaurcapturado = false;
var pidgeottocapturado = false;
var pikachucapturado = false;
var poliwagcapturado = false;
var beedrillcapturado = false;
var passandofase = false;
var info = true;

function setup() {
  createCanvas(900, 700);
}

function drawfase1() {
  background(ceu);
  fill("#fff");
  rect(780, 15, 100, 80, 20);
  var mouse = `X: ${mouseX}\nY: ${mouseY}`;
  fill(0);
  stroke(0);
  textSize(25);
  text(mouse, 800, 45); // POSIÇÃO DO MOUSE
  
  fill("#fff");
  rect(780, 100, 100, 80, 20);
  fill(0);
  stroke(0);
  textSize(25);
  text(state, 800, 120); // ESTADO DO PERSONAGEM
  text(charX, 800, 150); // POSIÇÃO PERSONAGEM
  text(charY, 800, 170); // POSIÇÃO PERSONAGEM

  if (mouseX > 35 && mouseX < 135 && mouseY > 35 && mouseY < 65) {
    fill("#A9A9A9");
  } else {
    fill("#fff");
  }
  rect(35, 35, 100, 30, 20);
  fill(0);
  textSize(20);
  text("MENU", 55, 57);

  image(chao, 0, 200, 900, 500); // CHÃO

  if (capturados < 3) {
    image(porta, 730, 485, 150, 140); // PORTA
  } else {
    image(pokecentro, 730, 485, 150, 140); // POKÉCENTRO
  }

  if (info == true) {
    image(missao1, 250, 10, 400, 200); // MISSÃO
  } else {
    image(infoicone, 425, 20, 50, 50);
  }
   
  image(comando, 350, 618, 160, 80); // COMANDO

  // Desenho das plataformas
  image(plataforma, 100, 200, 100, 35);
  image(plataforma, 450, 200, 100, 35);
  image(plataforma, 680, 200, 100, 35);
  image(plataforma, 20, 300, 100, 35);
  image(plataforma, 300, 300, 100, 35);
  image(plataforma, 540, 300, 100, 35);
  image(plataforma, 450, 400, 100, 35);
  image(plataforma, 650, 400, 100, 35);
  image(plataforma, 180, 400, 100, 35);
  image(plataforma, 50, 500, 100, 35);
  image(plataforma, 300, 500, 100, 35);
  image(plataforma, 500, 500, 100, 35);

  // Desenho dos Pokémons
  if (!squirtlecapturado) {
    image(squirtlefase1, 200, 350, 60, 60); // SQUIRTLE PRIMO
  }
  if (!pidgeottocapturado) {
    image(pidgeotto, 550, 220, 100, 100); // PIDGEOTTO PRIMO
  }
  if (!venusaurcapturado) {
    image(venusaur, 120, 125, 75, 100); // VENUSAUR PRIMO
  }
  if (!pikachucapturado) {
    image(pikachufase1, 320, 235, 70, 70); // PIKACHU NÃO É PRIMO
  }
  if (!beedrillcapturado) {
    image(beedrill, 685, 125, 100, 100); // BEEDRILL NÃO É PRIMO
  }
  if (!poliwagcapturado) {
    image(poliwag, 665, 350, 80, 70); // POLIWAG
  }

  text(capturados, 700, 30); // Contador de capturados

  drawCharacter();
  colisaoPorBaixo();
  colisaoPorCima();
  queda();
  captura();
  passarfase();
}

function keyPressed() {
  if (keyCode == 87) {
    jumpPressed();
  } else if (keyCode == 73) { // Tecla "I"
    info = !info; // Alterna o estado da variável info
  }
}

function colisaoPorCima() {
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

function colisaoPorBaixo() {
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

function queda() {
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

function captura() {
  if (charY > 345 && charY < 375 && charX > 150 && charX < 250 && keyIsDown(69)) {//CAPTURA SQUIRTLE
    if (!squirtlecapturado) {
      squirtlecapturado = true;
      capturados++;
    }
  }
  if (charY > 245 && charY < 275 && charX > 520 && charX < 620 && keyIsDown(69)) {//CAPTURA PIDGEOTTO
    if (!pidgeottocapturado) {
      pidgeottocapturado = true;
      capturados++;
    }
  }
  if (charY > 145 && charY < 175 && charX > 105 && charX < 165 && keyIsDown(69)) {//CAPTURA VENUSAUR
    if (!venusaurcapturado) {
      venusaurcapturado = true;
      capturados++;
    }
  }
  if (charY > 245 && charY < 275 && charX > 320 && charX < 420 && keyIsDown(69)) {//CAPTURA PIKACHU
    if (!pikachucapturado) {
      pikachucapturado = true;
      // Reset Pokémons
      squirtlecapturado = false;
      venusaurcapturado = false;
      pidgeottocapturado = false;
      pikachucapturado = false;
      poliwagcapturado = false;
      beedrillcapturado = false;
      capturados = 0;
    }
  }
  if (charY > 145 && charY < 175 && charX > 685 && charX < 785 && keyIsDown(69)) {//CAPTURA BEEDRILL
    if (!beedrillcapturado) {
      beedrillcapturado = true;
      // Reset Pokémons
      squirtlecapturado = false;
      venusaurcapturado = false;
      pidgeottocapturado = false;
      pikachucapturado = false;
      poliwagcapturado = false;
      beedrillcapturado = false;
      capturados = 0;
    }
  }
  if (charY > 345 && charY < 375 && charX > 630 && charX < 720 && keyIsDown(69)) {//CAPTURA POLIWAG
    if (!poliwagcapturado) {
      poliwagcapturado = true;
      // Reset Pokémons
      squirtlecapturado = false;
      venusaurcapturado = false;
      pidgeottocapturado = false;
      pikachucapturado = false;
      poliwagcapturado = false;
      beedrillcapturado = false;
      capturados = 0;
    }
  }
}

function passarfase() {
  if (capturados >= 3) {
    passandofase = true;
  }

  if (passandofase) {
    if (charY >= 485 && charY <= 625 && charX > 730 && charX < 885 && keyIsDown(32)) {
      tela = 0;
    }
  }
}
