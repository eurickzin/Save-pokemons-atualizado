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

  if(mouseX > 35 && mouseX < 135  && mouseY > 35 && mouseY < 65){
    fill("#A9A9A9")
  }else{
    fill("#fff")
  } 
  rect(35, 35, 100, 30, 20)
  fill(0);
  textSize(20)
  text("MENU", 55, 57)
  
  image(chao, 0, 200, 900, 500); // CHÃO
  image(porta, 730, 485, 150, 140); // PORTA
  image(missao1, 220, 10, 400, 200)//MISSAO
  image(comando, 350, 618, 160, 80)
  
  image(plataforma, 100, 200, 100, 35); // PLATAFORMA
  image(plataforma, 450, 200, 100, 35); // PLATAFORMA
  image(plataforma, 680, 200, 100, 35); // PLATAFORMA
  
  image(plataforma, 20, 300, 100, 35); // PLATAFORMA 
  image(plataforma, 300, 300, 100, 35); // PLATAFORMA 
  image(plataforma, 540, 300, 100, 35); // PLATAFORMA 
  
  image(plataforma, 450, 400, 100, 35); // PLATAFORMA
  image(plataforma, 650, 400, 100, 35); // PLATAFORMA
  image(plataforma, 180, 400, 100, 35); // PLATAFORMA
  
  image(plataforma, 50, 500, 100, 35); // PLATAFORMA
  image(plataforma, 300, 500, 100, 35); // PLATAFORMA
  image(plataforma, 500, 500, 100, 35); // PLATAFORMA
  
  image(squirtlefase1,200, 350, 60, 60 )//SQUIRTLE PRIMO
  image(pidgeotto,550, 220, 100, 100 );//PIDGEOTTO PRIMO
  image(venusaur, 120, 125, 75, 100);//VENUSAUR PRIMO

  image(pikachufase1, 320, 235, 70, 70); // PIKACHU NÃO É PRIMO.
  image(beedrill,685, 125, 100, 100);//BEEDRILL NÃO É PRIMO.
  image(poliwag,665, 350, 80, 70)
  
  drawCharacter();
  colisaoPorBaixo();
  colisaoPorCima();
  queda();
}

function keyPressed() {
  if (keyCode == 87) {
    jumpPressed();
  }
}

function colisaoPorCima() {
  if (state == falling) {
    if (charY >= 470 && charY <= 475) { // Ajuste a faixa de colisão
      if ((charX > 25 && charX < 150) || (charX > 270 && charX < 400) || (charX > 500 && charX < 600)) {
        state = idle;
        chaoY = 470;
      }
    }
    if (charY >= 370 && charY <= 375) { // Ajuste a faixa de colisão
      if ((charX > 155 && charX < 255) || (charX > 440 && charX < 540) || (charX > 630 && charX < 730)) {
        state = idle;
        chaoY = 370;
      }
    }
    if (charY >= 270 && charY <= 275) { // Ajuste a faixa de colisão
      if ((charX > 0 && charX < 100) || (charX > 270 && charX < 400) || (charX > 540 && charX < 640)) {
        state = idle;
        chaoY = 270;
      }
    }if (charY >= 170 && charY <= 175) { // Ajuste a faixa de colisão
      if ((charX > 100 && charX < 200) || (charX > 450 && charX < 550) || (charX > 680 && charX < 780)) {
        state = idle;
        chaoY = 270;
      }
    }
  }
}

function colisaoPorBaixo() {
  if (state == jumping) {
    if (charY <= 515 && charY >= 510) { // Ajuste a faixa de colisão
      if ((charX > 20 && charX < 150) || (charX > 275 && charX < 400) || (charX > 475 && charX < 580)) {
        state = falling;
      }
    }
    if (charY <= 415 && charY >= 410) { // Ajuste a faixa de colisão
      if ((charX > 155 && charX < 255) || (charX > 440 && charX < 540) || (charX > 630 && charX < 730)) {
        state = falling;
      }
    }
    if (charY <= 315 && charY >= 310) { // Ajuste a faixa de colisão
      if ((charX > 0 && charX < 100) || (charX > 300 && charX < 400) || (charX > 540 && charX < 640)) {
        state = falling;
      }
    }
    if (charY <= 215 && charY >= 210) { // Ajuste a faixa de colisão
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
