const player1 = {
  name: "Mario",
  speed: 4,
  handling: 3,
  power: 3,
  score: 0,
};

const player2 = {
  name: "Luigi",
  speed: 3,
  handling: 4,
  power: 4,
  score: 0,
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
      totalSkillTest1 = diceResult1 + character1.speed;
      totalSkillTest2 = diceResult2 + character2.speed;

      logRollResult(
        character1.name,
        "velocidade",
        diceResult1,
        character1.speed
      );

      logRollResult(
        character2.name,
        "velocidade",
        diceResult2,
        character2.speed
      );
    }

    if (block === "CURVA") {
      totalSkillTest1 = diceResult1 + character1.handling;
      totalSkillTest2 = diceResult2 + character2.handling;

      logRollResult(
        character1.name,
        "manobrabilidade",
        diceResult1,
        character1.handling
      );

      logRollResult(
        character2.name,
        "manobrabilidade",
        diceResult2,
        character2.handling
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.power;
      let powerResult2 = diceResult2 + character2.power;

      console.log(`${character1.name} confrontou com ${character2.name}!`);

      logRollResult(character1.name, "poder", diceResult1, character1.power);
      logRollResult(character2.name, "poder", diceResult2, character2.power);

      if (powerResult1 > powerResult2 && character2.score > 0) {
        console.log(
          `${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto!`
        );
        character2.score--;
      } else if (powerResult1 > powerResult2 && character2.score > 0) {
        console.log(
          `${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto!`
        );
        character2.score--;
      } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido.");
      }
    }

    if (totalSkillTest1 > totalSkillTest2) {
      console.log(`${character1.name} marcou um ponto!`);
      character1.score++;
    } else if (totalSkillTest1 < totalSkillTest2) {
      console.log(`${character2.name} marcou um ponto!`);
      character2.score++;
    }

    console.log("-----------------------------");
  }
}

function declareWinner(character1, character2) {
  console.log("Resultado final: ");
  console.log(`${character1.name}: ${character1.score} ponto(s)`);
  console.log(`${character2.name}: ${character2.score} ponto(s)`);

  if (character1.score > character2.score) {
    console.log(`\n${character1.name} venceu a corrida! Parabéns! 🏆`);
  } else if (character1.score < character2.score) {
    console.log(`\n${character2.name} venceu a corrida! Parabéns! 🏆`);
  } else {
    console.log("A corrida terminou em empate!");
  }
}

function main() {
  console.log(`Corrida entre ${player1.name} e ${player2.name} começando...\n`);

  startRaceEngine(player1, player2);
  declareWinner(player1, player2);
}

main();
