let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🌇", "🚜", "🚘","🌄" ]
let teclas = ["q", "w", "e", "r"];
let quantidade = jogador.length;
let focused;
let estadoJogo = "descricao";

function setup() {
  createCanvas(400, 400);
  focused = document.hasFocus();
}

function draw() {
  if (estadoJogo === "descricao") {
    telaDescricao(); 
  } else if (estadoJogo === "jogo") {
    ativaJogo(); 
    desenhaJogadores(); 
    desenhaLinhaDeChegada(); 
    verificaVencedor(); 
  }
}

function telaDescricao() {
  background("blue");
  textSize(20);
  fill("white");
  textAlign(CENTER, CENTER);
  text("campo vs cidade", width / 2, height / 4);
  textSize(16);
  text("clique em q,w,e,r para se mover", width / 2, height / 2);
}

function ativaJogo() {
  focused = document.hasFocus();
  if (focused) {
    background("red");
  } else 
    background("#FFEB3B");
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + "ganhou!!", 100, 200);
       textAlign(CENTER, CENTER);
      noLoop();
    }
  }
}

function keyPressed() {
  if (estadoJogo === "descricao") {
    estadoJogo = "jogo";
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i] && focused && estadoJogo === "jogo") {
      xJogador[i] += 10;
    }
  }
}
    