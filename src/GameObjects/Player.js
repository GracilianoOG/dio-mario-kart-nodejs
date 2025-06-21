class Player {
  #name;
  #speed;
  #handling;
  #power;
  #score;

  constructor(name, speed, handling, power) {
    this.name = name;
    this.speed = speed;
    this.handling = handling;
    this.power = power;
    this.score = 0;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get speed() {
    return this.#speed;
  }

  set speed(newSpeed) {
    this.#speed = newSpeed;
  }

  get handling() {
    return this.#handling;
  }

  set handling(newHandling) {
    this.#handling = newHandling;
  }

  get power() {
    return this.#power;
  }

  set power(newPower) {
    this.#power = newPower;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    this.#score = newScore;
  }
}

export default Player;
