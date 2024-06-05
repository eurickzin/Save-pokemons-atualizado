const falling = "falling";
const jumping = "jumping";
const idle = "idle";

const CHAR_IDLE_IMG_PATH = "personagem/rickdireita.png";
var CHARIMG;

const CHATSPRITEPATH = "personagem/rickdireita2.png";
var spriteSheet;
let charAnimation;

let baseSpeed = 3;
var speed = baseSpeed;
var charSpeed = 5;

var state = idle;
var charX = 30;
var chaoY = 580;
var charY = chaoY;
var jumpSpeed = 5;
var fallingSpeed = 5;
var jMax = 150;

var personagem;

const CHAR_WIDTH = 50;
const CHAR_HEIGHT = 50;

function drawCharacter() {
  push();
  if (speed < 0) {
    scale(-1, 1);
    image(CHARIMG, -(charX + CHAR_WIDTH), charY, CHAR_WIDTH, CHAR_HEIGHT);
  } else {
    image(CHARIMG, charX, charY, CHAR_WIDTH, CHAR_HEIGHT);
  }
  pop();
  
  jump();
  moveCharacter();
}



function moveCharacter() {
  if (keyIsDown(68)) { // tecla 'D'
    charX += charSpeed;
    speed = baseSpeed;
  }
  if (keyIsDown(65)) { // tecla 'A'
    charX -= charSpeed;
    speed = -baseSpeed;
  }
}

function jumpPressed() {
  if (state == idle) {
    state = jumping;
  }
}

function keyPressed() {
  if (key === ' ' || keyCode === 32) { // tecla 'Espaço'
    jumpPressed();
  }
}

function jump() {
  if (state === jumping) {
    charY -= jumpSpeed;
  }
  
  if(state == idle && charY <= 470){
    chaoY = charY;
  }
  
  if(Math.abs(charY - chaoY) >= jMax) {
    state = falling;
  }

  if(state === falling) {
    charY += fallingSpeed;
  }

  if(charY == chaoY) {
    state = idle;
  }
}
