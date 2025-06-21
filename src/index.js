const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function main() {
  console.log(`Corrida entre ${player1.nome} e ${player2.nome} começando...\n`);
}

main();
