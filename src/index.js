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

function logRollResult(playerName, blockType, diceResult, playerAttribute) {
  const totalSkillTest = diceResult + playerAttribute;
  console.log(
    `${playerName} rolou um dado de ${blockType} ${diceResult} + ${playerAttribute} = ${totalSkillTest}`
  );
}

function startRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`Rodada ${round}`);

    // Sort block
    const block = getRandomBlock();
    console.log(`Bloco: ${block}`);

    // Roll dices
    const diceResult1 = rollDice();
    const diceResult2 = rollDice();

    // Skill tests
    let totalSkillTest1 = 0;
    let totalSkillTest2 = 0;

    if (block === "RETA") {
      totalSkillTest1 = diceResult1 + character1.velocidade;
      totalSkillTest2 = diceResult2 + character2.velocidade;

      logRollResult(
        character1.nome,
        "velocidade",
        diceResult1,
        character1.velocidade
      );

      logRollResult(
        character2.nome,
        "velocidade",
        diceResult2,
        character2.velocidade
      );
    }

    if (block === "CURVA") {
      totalSkillTest1 = diceResult1 + character1.manobrabilidade;
      totalSkillTest2 = diceResult2 + character2.manobrabilidade;

      logRollResult(
        character1.nome,
        "manobrabilidade",
        diceResult1,
        character1.manobrabilidade
      );

      logRollResult(
        character2.nome,
        "manobrabilidade",
        diceResult2,
        character2.manobrabilidade
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.poder;
      let powerResult2 = diceResult2 + character2.poder;

      console.log(`${character1.nome} confrontou com ${character2.nome}!`);

      logRollResult(character1.nome, "poder", diceResult1, character1.poder);
      logRollResult(character2.nome, "poder", diceResult2, character2.poder);

      if (powerResult1 > powerResult2 && character2.pontos > 0) {
        console.log(
          `${character1.nome} venceu o confronto! ${character2.nome} perdeu 1 ponto!`
        );
        character2.pontos--;
      } else if (powerResult1 > powerResult2 && character2.pontos > 0) {
        console.log(
          `${character2.nome} venceu o confronto! ${character1.nome} perdeu 1 ponto!`
        );
        character2.pontos--;
      } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido.");
      }
    }

    if (totalSkillTest1 > totalSkillTest2) {
      console.log(`${character1.nome} marcou um ponto!`);
      character1.pontos++;
    } else if (totalSkillTest1 < totalSkillTest2) {
      console.log(`${character2.nome} marcou um ponto!`);
      character2.pontos++;
    }

    console.log("-----------------------------");
  }
}

function declareWinner(character1, character2) {
  console.log("Resultado final: ");
  console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
  console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);

  if (character1.pontos > character2.pontos) {
    console.log(`\n${character1.nome} venceu a corrida! Parabéns! 🏆`);
  } else if (character1.pontos < character2.pontos) {
    console.log(`\n${character2.nome} venceu a corrida! Parabéns! 🏆`);
  } else {
    console.log("A corrida terminou em empate!");
  }
}

function main() {
  console.log(`Corrida entre ${player1.nome} e ${player2.nome} começando...\n`);

  startRaceEngine(player1, player2);
  declareWinner(player1, player2);
}

main();
