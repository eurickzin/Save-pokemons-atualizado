var tela = 0;
var fundo;
var fundo2;
var balao;
var pikachu;
var pikachuobra;
var bulbasaur;
var squirtle;
var voltar;
var wasd;
var psyduck;
var rick;
var snorlax;
var gengar;
var charmander;
var fontepop;
var fonte2p;
var chao;
var ceu;
var porta;
var plataforma;
var bullba;
var venusaur;
var personagem;
var missao1;
var missao2;
var missao3;
var pidgeotto;
var squirtlefase1;
var pikachufase1;
var beedrill;
var poliwag;
var pokedexfase1;
var pokedexfase2;
var pokedexfase3;
var comando;
var pokebola;
var pokecentro;
var infoicone;
var fundofase2;
var fundofase3;
var plataforma2;
var plataforma3;
var spearow;
var golbat;
var sandslash;
var dugtrio;
var pidgey;
var venonat;
var arbok;
var eevee;
var miau;
var butterfree;
var vidas3;
var vidas2;
var vidas1;
var vidas0;
var telacreditos;
var telayouwin;
var telacontroles;

var vidas = 3;
var vidaPerdida = false;

function preload(){
  fundo = loadImage("imagensfase1/fundo.png");
  fundo2 = loadImage("imagensfase1/fundo2.png");
  fontepop = loadFont("fontes/fontpop.ttf");
  fonte2p = loadFont("fontes/font2p.ttf")
  balao = loadImage("imagensfase1/balao.png");
  pikachu = loadImage("imagensfase1/pikachu.png");
  pikachuobra = loadImage("imagensfase1/pikachuobra.png");
  bulbasaur = loadImage("imagensfase1/bulbasaur.png");
  squirtle = loadImage("imagensfase1/squirtle.png");
  voltar = loadImage("imagensfase1/voltar.png");
  wasd = loadImage("imagensfase1/w.jpg");
  psyduck = loadImage("imagensfase1/psyduck.png");
  rick = loadImage("imagensfase1/rickzin.png")
  snorlax = loadImage("imagensfase1/snorlax.png");
  gengar = loadImage("imagensfase1/gengar.png");
  charmander = loadImage("imagensfase1/charmander.png");
  vidas3 = loadImage("imagensfase3/3vidas.png");
  vidas2 = loadImage("imagensfase3/2vidas.png");
  vidas1 = loadImage("imagensfase3/1vida.png");
  vidas0 = loadImage("imagensfase3/0vidas.png");
  telacreditos = loadImage("telas/creditos.png");
  telayouwin = loadImage("telas/youwin.png");
  telacontroles = loadImage("telas/controles.png");
  
  //IMAGENS FASE 1
  ceu = loadImage("imagensfase1/ceu.png");
  chao = loadImage("imagensfase1/chao.png");
  porta = loadImage("imagensfase1/porta.png");
  plataforma = loadImage("imagensfase1/plataforma.png");
  bullba = loadImage("imagensfase1/bullba.png");
  venusaur = loadImage("imagensfase1/venusaur.png");
  CHARIMG = loadImage(CHAR_IDLE_IMG_PATH);
  missao1 = loadImage("imagensfase1/missao1.png");
  pidgeotto = loadImage("imagensfase1/pid.png");
  squirtlefase1 = loadImage("imagensfase1/squirtlefase1.png");
  pikachufase1 = loadImage("imagensfase1/pikachufase1.png");
  beedrill = loadImage("imagensfase1/beedrill.png");
  poliwag = loadImage("imagensfase1/poliwag.png");
  pokedexfase1 = loadImage("imagensfase1/pokedexfase1.png");
  comando = loadImage("imagensfase1/pressioneatecla.png");
  pokebola = loadImage("imagensfase1/pokebola.png");
  pokecentro = loadImage("imagensfase1/pokecentro.png");
  infoicone = loadImage("imagensfase1/info.png");

  //IMAGENS FASE 2
  fundofase2 = loadImage("imagensfase2/fundonivel2.png");
  plataforma2 = loadImage("imagensfase2/plataformanivel2.png");
  missao2 = loadImage("imagensfase2/missao2.png");
  spearow = loadImage("imagensfase2/spearow2.png");
  golbat = loadImage("imagensfase2/golbat2.png");
  dugtrio = loadImage("imagensfase2/diglett2.png");
  sandslash = loadImage("imagensfase2/sandslash2.png");
  pokedexfase2 = loadImage("imagensfase2/pokedex2.png");

  //IMAGENS FASE 3
  fundofase3 = loadImage("imagensfase3/fundofase3.png")
  missao3 = loadImage("imagensfase3/missao3.png");
  plataforma3 = loadImage("imagensfase3/plataforma3.png");
  pidgey = loadImage("imagensfase3/pidgey.png");
  venonat = loadImage("imagensfase3/venonat.png");
  eevee = loadImage("imagensfase3/eevee.png");
  arbok = loadImage("imagensfase3/arbok.png");
  miau = loadImage("imagensfase3/miau.png");
  butterfree = loadImage("imagensfase3/butterfree.png");
  pokedexfase3 = loadImage("imagensfase3/pokedex3.png");
}


function setup() {
  
  createCanvas(900, 700);
  textFont(fontepop);
  
}

function draw() {
  
  if(tela == 0){//MENU 
    background(fundo);
    
    // fill("#fff");
    // rect(780, 15, 100, 80,20)
    // var mouse = `X: ${mouseX}\nY: ${mouseY}`;
    // fill(0);
    // stroke(0);
    // textSize(25);
    // text(mouse, 800, 45); //POSIÇÃO DO MOUSE
    
    
    if (mouseX > 200 && mouseX < 700 && mouseY > 300 && mouseY < 380){// BOTÃO JOGAR
      fill("#A9A9A9")
      rect(200, 300, 500, 80, 20);
      image (pikachu, 620, 205, 100, 100)
    }else{
      fill("#fff")
      rect(200, 300, 500, 80, 20);
    }
    
    
    if (mouseX > 200 && mouseX < 700 && mouseY > 410 && mouseY < 490){//BOTÃO CONTROLES
      fill ("#A9A9A9");
      rect(200, 410, 500, 80, 20);
      image(bulbasaur, 620, 320, 100, 100 );
      
    }else{
      fill("#fff")
      rect(200, 410, 500, 80, 20);
    }

    if(mouseX > 200 && mouseX < 700 && mouseY > 520 && mouseY < 600){//BOTÃO CRÉDITOS
      fill("#A9A9A9");
      rect(200, 520, 500, 80, 20);
      image(squirtle, 630, 420, 120, 120 )
      
       }else{
         fill("#fff")
         rect(200, 520, 500, 80, 20);
       }
    
    fill(0);
    textSize(65);
    stroke(0);
    textFont(fontepop)
    text("JOGAR", 345, 360)
    text("CONTROLES", 260, 470)
    text("CRÉDITOS", 290, 585)
    
    
  }//FIM DO MENU 0
  if(tela == 1){//FASE 1
    
    drawfase1();
    if (keyIsDown(80)){
      tela = 4;
    }
    
   }//FIM JOGAR 1
  if(tela == 2){//CONTROLES
    background(telacontroles);
    
    if(mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTAO VOLTAR
      
      fill("#A9A9A9");
      rect(36, 36, 150, 50, 10);

      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );

      image(voltar, -40, -39, 450, 250)

    }else{
      
      fill("#fff")
      rect(36, 36, 150, 50, 10);//CAIXA VOLTAR
      
      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );
      
    }//FIM DO BOTÃO VOLTAR
    
  }//FIM TELA 2
  if(tela == 3){//CRÉDITOS
    background(telacreditos);

    if(mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTAO VOLTAR
      
      fill("#A9A9A9");
      rect(36, 36, 150, 50, 10);
      
      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );
      
      image(voltar, -40, -39, 450, 250)
      
    }else{
      
      fill("#fff")
      rect(36, 36, 150, 50, 10);//CAIXA VOLTAR
      
      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );
      
    }//FIM DO BOTÃO VOLTAR
    
  }//FIM TELA 3
  if(tela == 4){//POKEDEX FASE 1
    background(pokedexfase1);
    if (keyIsDown(80)){
      tela = 1;
    }

  }
  if(tela == 5){//FASE 2
    drawfase2();
    if (keyIsDown(80)){
      tela = 6;
    }
  }
  if(tela == 6){//POKEDEX FASE 2
    background(pokedexfase2);
    if (keyIsDown(80)){
      tela = 5;
    }

  }
  if (tela == 7){//FASE 3
    drawfase3()
    if (keyIsDown(80)){
      tela = 8;
    }

  }
  if(tela == 8){//POKEDEX FASE 3
    background(pokedexfase3);
    if (keyIsDown(80)){
      tela = 7;
    }
  }
  if(tela == 9){
    background(telayouwin);

    if(mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTAO VOLTAR
      
      fill("#A9A9A9");
      rect(36, 36, 150, 50, 10);
      
      fill(0);
      textSize(30);
      text("CRÉDITOS", 52, 70 );
      
      image(voltar, -40, -39, 450, 250)
      
    }else{
      
      fill("#fff")
      rect(36, 36, 150, 50, 10);//CAIXA VOLTAR
      
      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );
      
    }//FIM DO BOTÃO VOLTAR
  }
}

function perderVida() {
  if (!vidaPerdida) {
    vidas--;
    vidaPerdida = true;
  }
}

function mouseClicked(){//INICIO MOUSECLICKED
  
  if (tela == 0){//INICIO TELA 0
    
    if(mouseX > 200 && mouseX < 700 && mouseY > 300 && mouseY < 380){//INICIO BOTÃO JOGAR
      
      tela = 1;
      
    }//FIM BOTÃO JOGAR
    
    if (mouseX > 200 && mouseX < 700 && mouseY > 410 && mouseY < 490){//INICIO BOTÃO CONTROLES
      
      tela = 2;
      
    }//FIM BOTÃO CONTROLES
    
    if (mouseX > 200 && mouseX < 700 && mouseY > 520 && mouseY < 600){//INICIO BOTÃO CRÉDITOS
      
      tela = 3;
      
    }//FIM BOTÃO CRÉDITOS
    
  }//FIM TELA 0
  
  if(tela == 1){//INICIO TELA 1
    
    if (mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTÃO VOLTAR
      
      tela=0;
      
    }//FIM BOTÃO VOLTAR

    if(mouseX > 35 && mouseX < 135  && mouseY > 35 && mouseY < 65){
      tela = 0
    }
    
  }// FIM TELA 1
  
  if(tela == 2){//INICIO TELA 2
    
    if (mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTÃO VOLTAR
      
      tela=0;
      
    }//FIM BOTÃO VOLTAR
    
  }//FIM TELA 2
  
  if(tela == 3){//INICIO TELA 3
    
    if (mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTÃO VOLTAR
      
      tela=0;
      
    }//FIM BOTÃO VOLTAR
    
  }//FIM TELA 3

  if(tela == 9){
    if (mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTÃO VOLTAR
      
      tela=3;
      
    }//FIM BOTÃO VOLTAR
  }
  
}//FIM MOUSECLICKED