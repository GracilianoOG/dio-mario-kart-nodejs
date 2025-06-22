# 👨🏻‍💻 Mario Kart com Terminal (Desafio da DIO)

## 📖 Descrição

O projeto consiste em um jogo inspirado no Mario Kart desenvolvido com JavaScript e NodeJS. O jogo foi feito para rodar no terminal.

## 🕹️ Regras & mecânicas:

**Jogadores:**

O Computador deve receber dois personagens para disputar a corrida em um objeto cada

**Pistas:**

- Os personagens irão correr em uma pista aleatória de 5 rodadas
- A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto
  - Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto
  - Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto
  - Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto
  - Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)

**Condição de vitória:**

Ao final, vence quem acumulou mais pontos

## 🗂️ Instalação local

1. Clone este repositório:

```bash
git clone https://github.com/GracilianoOG/dio-mario-kart-nodejs.git
```

2. Abra o projeto em sua IDE preferida, exemplo no VSCode:

```bash
cd dio-mario-kart-nodejs/
```

3. Após navegar para dentro do diretório, inicie o VSCode:

```base
code .
```

4. Rode o jogo com o script (requer o NodeJS e NPM instalados):

```
npm run play
```

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=js,nodejs,vscode)](https://skillicons.dev)

- Desenvolvido na linguagem JavaScript com NodeJS.
- Criado com o editor Visual Studio Code.

## 🔗 Links

- [Digital Innovation One](https://www.dio.me/)

## 🧑🏻‍💻 Autor

- LinkedIn: [@gabrielgmbarros](https://www.linkedin.com/in/gabrielgmbarros)
- GitHub: [@GracilianoOG](https://github.com/GracilianoOG)

## 📝 Licença

O código fonte está sob a licença [MIT](./LICENSE).
