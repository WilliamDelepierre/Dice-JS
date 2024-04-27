function startGame() {
  const playGame = confirm("Souhaites-tu jouer ?");
  if (playGame) {
    numberOfPlayer();
  } else {
    alert("À bientôt !");
  }
}

function numberOfPlayer() {
  const playerNumber = parseInt(prompt("Combien de joueur(s) ?"));

  if (!isNaN(playerNumber) && playerNumber > 0 && playerNumber <= 4) {
    const background = ["#f39c12", "#e67e22", "#F1C40F", "#D35400"];
    for (let idxPlayer = 1; idxPlayer < playerNumber; idxPlayer++) {
      createPlayer(background[idxPlayer]);
    }
  } else {
    alert("Min 1 joueur - Maximum 4 joueurs !");
  }
}

function createPlayer(background) {
  const newDiv = document.createElement("div");
  newDiv.className = "board";
  document.getElementById("app").appendChild(newDiv);
  newDiv.style.backgroundColor = background;
  console.log(newDiv);
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const inputElement = document.getElementById("dicenumber").value;

  console.log(inputElement);

  if (!isNaN(inputElement) && inputElement > 0 && inputElement <= 5) {
    clearDices();
    for (let idxDice = 0; idxDice < inputElement; idxDice++) {
      createDice();
    }
  } else {
    alert("Min 1 🎲 - Maximum 5 🎲 !");
  }
});

function createDice() {
  const board = document.querySelectorAll(".board");
  board.forEach((boardItem) => {
    const divElement = document.createElement("div");
    divElement.className = "dice";
    boardItem.appendChild(divElement);
    console.log(boardItem);

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    const position = -100 * (randomNumber - 1);
    divElement.style.backgroundPosition = `${position}px`;
  });
}

function clearDices() {
  const allDices = document.querySelectorAll(".dice");
  allDices.forEach((dice) => dice.remove());
}

startGame();
