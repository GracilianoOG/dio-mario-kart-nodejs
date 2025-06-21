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

function getRandomBlock() {
  const randomValue = Math.random();

  switch (true) {
    case randomValue < 0.33:
      return "RETA";
    case randomValue < 0.66:
      return "CURVA";
    default:
      return "CONFRONTO";
  }
}

function startRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`Rodada ${round}`);

    // Sort block
    const block = getRandomBlock();
    console.log(`Bloco: ${block}`);
  }
}

function main() {
  console.log(`Corrida entre ${player1.nome} e ${player2.nome} começando...\n`);

  startRaceEngine(player1, player2);
}

main();
