let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

document.querySelector(
  ".js-score"
).innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  const win = "You win.";
  const lose = "You lose.";
  const tie = "Tie.";

  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = lose;
    } else if (computerMove === "paper") {
      result = win;
    } else if (computerMove === "scissors") {
      result = tie;
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = win;
    } else if (computerMove === "paper") {
      result = tie;
    } else if (computerMove === "scissors") {
      result = lose;
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = tie;
    } else if (computerMove === "paper") {
      result = lose;
    } else if (computerMove === "scissors") {
      result = win;
    }
  }

  if (result === win) {
    score.wins++;
  } else if (result === lose) {
    score.loses++;
  } else if (result === tie) {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You 
          <img src="thumbnails/${playerMove}-emoji.png" class="move-emoji">
          <img src="thumbnails/${computerMove}-emoji.png" class="move-emoji">  
          Computer`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}
