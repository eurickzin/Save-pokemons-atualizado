var capturados2 = 0;
var spearowcapturado = false;
var golbatcapturado = false;
var sandslashcapturado = false;
var psyduckcapturado = false;
var charmandercapturado = false;
var dugtriocapturado = false;
var passandofase2 = false;

function drawfase2(){
    background(fundofase2);
    fill("#fff");
    rect(780, 15, 100, 80, 20);
    var mouse = `X: ${mouseX}\nY: ${mouseY}`;
    fill(0);
    stroke(0);
    textSize(25);
    text(mouse, 800, 45); // POSIÇÃO DO MOUSE

    text(capturados2, 700, 30); // Contador de capturados

    if (info == true) {
        image(missao2, 250, 10, 400, 200); // MISSÃO
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

    if (capturados2 < 3) {
        image(porta, 730, 485, 150, 140); // PORTA
      } else {
        image(pokecentro, 730, 485, 150, 140); // POKÉCENTRO
      }

    image(comando, 350, 618, 160, 80); // COMANDO
    

    image(plataforma2, 100, 200, 100, 25);
    image(plataforma2, 450, 200, 100, 25);
    if (!dugtriocapturado) {
        image(dugtrio, 685, 125, 100, 100); // BEEDRILL NÃO É PRIMO
      }
    image(plataforma2, 680, 200, 100, 25);
    image(plataforma2, 20, 300, 100, 25);
    image(plataforma2, 300, 300, 100, 25);
    image(plataforma2, 540, 300, 100, 25);
    image(plataforma2, 450, 400, 100, 25);
    image(plataforma2, 650, 400, 100, 25);
    image(plataforma2, 180, 400, 100, 25);
    image(plataforma2, 50, 500, 100, 25);

    if (!spearowcapturado) {
        image(spearow, 200, 350, 60, 60); // SQUIRTLE PRIMO
      }
      if (!charmandercapturado) {
        image(charmander, 550, 237, 70, 70); // PIDGEOTTO PRIMO
      }
      if (!golbatcapturado) {
        image(golbat, 80, 100, 100, 100); // VENUSAUR PRIMO
      }
      if (!psyduckcapturado) {
        image(psyduck, 320, 235, 50, 70); // PIKACHU NÃO É PRIMO
      }
      
      if (!sandslashcapturado) {
        image(sandslash, 665, 340, 80, 70); // POLIWAG
      }

    drawCharacter();
    colisaoPorBaixo2();
    colisaoPorCima2();
    queda2();
    captura2();
    passarfase2();
}

function colisaoPorBaixo2() {
    if (state == jumping) {
      if (charY <= 515 && charY >= 510) {
        if ((charX > 20 && charX < 150)){
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

function colisaoPorCima2() {
    if (state == falling) {
      if (charY >= 470 && charY <= 475) {
        if ((charX > 25 && charX < 150)) {
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

function queda2() {
    if (state == idle) {
      if (charY < 580 && charY >= 470) {
        if ((charX < 25 || charX > 125)) {
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
  
function captura2() {
    if (charY > 345 && charY < 375 && charX > 150 && charX < 250 && keyIsDown(69)) {//CAPTURA SPEAROW
      if (!spearowcapturado) {
        spearowcapturado = true;
        capturados2++;
      }
    }
    if (charY > 145 && charY < 175 && charX > 105 && charX < 165 && keyIsDown(69)) {//CAPTURA GOLBAT
        if (!golbatcapturado) {
          golbatcapturado = true;
          capturados2++;
        }
      }
      if (charY > 345 && charY < 375 && charX > 630 && charX < 720 && keyIsDown(69)) {//CAPTURA SANDSLASH
        if (!sandslashcapturado) {
          sandslashcapturado = true;
          capturados2++;
        }
      }
    if (charY > 245 && charY < 275 && charX > 520 && charX < 620 && keyIsDown(69)) {//CAPTURA CHARMANDER
      if (!charmandercapturado) {
        charmandercapturado = true;
        //Reset Pokémon
        spearowcapturado = false;
        golbatcapturado = false;
        sandslashcapturado = false;
        psyduckcapturado = false;
        charmandercapturado = false;
        dugtriocapturado = false;
        capturados2 = 0;
      }
    }
    
    if (charY > 245 && charY < 275 && charX > 320 && charX < 420 && keyIsDown(69)) {//CAPTURA PSYDUCK
      if (!psyduckcapturado) {
        psyduckcapturado = true;
        // Reset Pokémons
        spearowcapturado = false;
        golbatcapturado = false;
        sandslashcapturado = false;
        psyduckcapturado = false;
        charmandercapturado = false;
        dugtriocapturado = false;
        capturados2 = 0;
      }
    }
    if (charY > 145 && charY < 175 && charX > 685 && charX < 785 && keyIsDown(69)) {//CAPTURA DUGTRIO
      if (!dugtriocapturado) {
        dugtriocapturado = true;
        // Reset Pokémons
        spearowcapturado = false;
        golbatcapturado = false;
        sandslashcapturado = false;
        psyduckcapturado = false;
        charmandercapturado = false;
        dugtriocapturado = false;
        capturados2 = 0;
      }
    }
    
  }

function passarfase2() {
    if (capturados2 >= 3) {
      passandofase2 = true;
    }
  
    if (passandofase2) {
      if (charY >= 485 && charY <= 625 && charX > 730 && charX < 885 && keyIsDown(32)) {
        tela = 7;
        charX = 30;
        info = true;
        // Reset Pokémons
        spearowcapturado = false;
        golbatcapturado = false;
        sandslashcapturado = false;
        psyduckcapturado = false;
        charmandercapturado = false;
        dugtriocapturado = false;
        capturados2 = 0;
      }
    }
  }