import Player from "./GameObjects/Player.js";

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const getRandomBlock = () => {
  const randomValue = Math.random();

  switch (true) {
    case randomValue < 0.33:
      return "RETA";
    case randomValue < 0.66:
      return "CURVA";
    default:
      return "CONFRONTO";
  }
};

const logRollResult = (playerName, blockType, diceResult, playerAttribute) => {
  const totalSkillTest = diceResult + playerAttribute;
  console.log(
    `${playerName} rolou um 🎲 de ${blockType} ${diceResult} + ${playerAttribute} = ${totalSkillTest}`
  );
};

const startRaceEngine = (character1, character2, configs) => {
  for (let round = 1; round <= configs.rounds; round++) {
    console.log(
      `----------------------- 🏁 Rodada ${round} -----------------------`
    );

    // Sort block
    const block = getRandomBlock();
    console.log(`Bloco: ${block}`);

    // Roll dices
    const diceResult1 = rollDice();
    const diceResult2 = rollDice();

    // Skill tests
    let totalSkillTest1 = 0;
    let totalSkillTest2 = 0;

    const evaluateBlock = (player1, player2, attributeType, attributeText) => {
      totalSkillTest1 = diceResult1 + player1[attributeType];
      totalSkillTest2 = diceResult2 + player2[attributeType];

      logRollResult(
        player1.name,
        attributeText,
        diceResult1,
        player1[attributeType]
      );

      logRollResult(
        player2.name,
        attributeText,
        diceResult2,
        player2[attributeType]
      );
    };

    if (block === "RETA") {
      evaluateBlock(character1, character2, "speed", "velocidade");
    }

    if (block === "CURVA") {
      evaluateBlock(character1, character2, "handling", "manobrabilidade");
    }

    if (block === "CONFRONTO") {
      const sortTurbo = player => {
        const isLucky = Math.random() <= configs.turboChance;
        if (isLucky) {
          console.log(`${player.name} encontrou um turbo e ganhou 1 ponto! 🎉`);
          player.score++;
        }
      };

      console.log(`${character1.name} confrontou com ${character2.name}! ⚔️`);

      evaluateBlock(character1, character2, "power", "poder");

      if (totalSkillTest1 > totalSkillTest2) {
        console.log(
          `${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto!`
        );
        sortTurbo(character1);
        character2.score = Math.max(character2.score - 1, 0);
      } else if (totalSkillTest1 < totalSkillTest2) {
        console.log(
          `${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto!`
        );
        sortTurbo(character2);
        character1.score = Math.max(character1.score - 1, 0);
      } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido.");
      }
    }

    if (block !== "CONFRONTO") {
      if (totalSkillTest1 > totalSkillTest2) {
        console.log(`${character1.name} marcou um ponto!`);
        character1.score++;
      } else if (totalSkillTest1 < totalSkillTest2) {
        console.log(`${character2.name} marcou um ponto!`);
        character2.score++;
      }
    }

    console.log(`Placar: ${character1.score}x${character2.score}`);

    console.log(
      "-----------------------------------------------------------\n"
    );
  }
};

const declareWinner = (character1, character2) => {
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
};

const main = () => {
  const player1 = new Player("Mario", 4, 3, 3);
  const player2 = new Player("Luigi", 3, 4, 4);
  const configs = { rounds: 5, turboChance: 0.25 };

  console.log(
    `🏁🚨 Corrida entre ${player1.name} e ${player2.name} começando...\n`
  );

  startRaceEngine(player1, player2, configs);
  declareWinner(player1, player2);
};

main();
