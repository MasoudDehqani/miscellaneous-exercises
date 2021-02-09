var scores, roundScore, activePlayer, gamePlaying, lastScore;
init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  roundScore += dice1 + dice2;

  if (gamePlaying) {
    document.getElementById("dice1").style.display = "block";
    document.getElementById("dice2").style.display = "block";
    if (dice1 !== 1 && dice2 !== 1) {
      document.getElementById("dice1").src = "dice-" + dice1 + ".png";
      document.getElementById("dice2").src = "dice-" + dice2 + ".png";
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      scores[activePlayer] = lastScore - 1;
      document.getElementById("score-" + activePlayer).textContent =
        scores[activePlayer];
      nextPlayer();
    }
    lastScore = scores[activePlayer];
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    var input = document.querySelector(".final-score").value;
    var winningScore;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }
    if (scores[activePlayer] >= winningScore) {
      hideDice();
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.getElementById("current-" + activePlayer).textContent = "0";
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);
function hideDice() {
  document.getElementById("dice1").style.display = "none";
  document.getElementById("dice2").style.display = "none";
}
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  hideDice();
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  hideDice();

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
