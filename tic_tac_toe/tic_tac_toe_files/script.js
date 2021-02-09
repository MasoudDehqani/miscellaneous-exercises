const statusDisplay = document.querySelector('.game--status');
const gameContainer = document.querySelector(".game--container")

let currentPlayer = Math.random() > 0.5 ? 'X' : 'O';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameState2 = [['', '', ''],
                  ['', '', ''],
                  ['', '', '']];
let gameActive = true;
let playerX = []
let playerO = []

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();
statusDisplay.style.color = "black"

function handleCellPlayed(clickedCell, clickedCellIndex) {
  // if (clickedCellIndex < 3) {
  //   gameState2[0][clickedCellIndex] = currentPlayer
  // } else if (clickedCellIndex > 2 && clickedCellIndex < 6) {
  //   gameState2[1][clickedCellIndex - 3] = currentPlayer
  // } else {
  //   gameState2[2][clickedCellIndex - 6] = currentPlayer
  // }
  gameState[clickedCellIndex] = currentPlayer;
  if (currentPlayer === "O") clickedCell.style.color = "green"
  if (currentPlayer === "X") clickedCell.style.color = "red"
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  );

  if (gameState[clickedCellIndex] !== '') {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handlePlayerChange();
  handleWinner()
  // console.log(gameState2)
}

function handleWinner() {

  gameState.forEach( (cell, index, array) => {
    if (index < 3) {
      cell === 'O' && (!playerO.includes(index) && playerO.push(index))
      cell === 'X' && (!playerX.includes(index) && playerX.push(index))
    } else if (index > 2 && index < 6) {
      cell === 'O' && (!playerO.includes(index - 3) && playerO.push(index - 3))
      cell === 'X' && (!playerX.includes(index - 3) && playerX.push(index - 3))
    } else {
      cell === 'O' && (!playerO.includes(index - 6) && playerO.push(index - 6))
      cell === 'X' && (!playerX.includes(index - 6) && playerX.push(index - 6))
    }
    // if (cell === 'O') playerO.push(index)
    // if (cell === 'X') playerX.push(index)
  })
  
  console.log(playerO)
  console.log(playerX)
  // let index0CountO = 0
  // let index1CountO = 0
  // let index2CountO = 0

  // let index0CountX = 0
  // let index1CountX = 0
  // let index2CountX = 0

  // for (let i = 0; i < 3; i++) {
  //   gameState2[i].forEach((element, index, array) => {
  //     if (element === "O") {
  //       index === 0 && index0CountO++
  //       index === 1 && index1CountO++
  //       index === 2 && index2CountO++
  //       if (index0CountO === 3 || index1CountO === 3 || index2CountO === 3) {
  //         cellElements.forEach( element => element.removeEventListener("click", handleCellClick))
  //         statusDisplay.innerHTML = `Player 'O' Won The Game!`
  //         statusDisplay.style.color = "green"
  //       }
  //       playerO.push(index)
  //     }
  //     if (element === "X") {
  //       index === 0 && index0CountX++
  //       index === 1 && index1CountX++
  //       index === 2 && index2CountX++
  //       if (index0CountX === 3 || index1CountX === 3 || index2CountX === 3) {
  //         cellElements.forEach( element => element.removeEventListener("click", handleCellClick))
  //         statusDisplay.innerHTML = `Player 'X' Won The Game!`
  //         statusDisplay.style.color = "red"
  //       }
  //       playerX.push(index)
  //     } 
  //   })
  // }

  // let selectedSubtractionsO = []
  // for (let i = 0; i < playerO.length; i++) {
  //   selectedSubtractionsO = []
  //   for (let j = 0; j < playerO.length; j++) {
  //     if (i !== j && !selectedSubtractionsO.includes(Math.abs(playerO[i] - playerO[j]))) {
  //       selectedSubtractionsO.push(Math.abs(playerO[i] - playerO[j]))
  //     } else if (selectedSubtractionsO.includes(Math.abs(playerO[i] - playerO[j]))) {
  //       cellElements.forEach( element => element.removeEventListener("click", handleCellClick))
  //       statusDisplay.innerHTML = `Player 'O' Won The Game!`
  //       statusDisplay.style.color = "green"
  //       break
  //     }
  //   }
  // }

  // let selectedSubtractionsX = []
  // for (let i = 0; i < playerX.length; i++) {
  //   selectedSubtractionsX = []
  //   for (let j = 0; j < playerX.length; j++) {
  //     if (i !== j && !selectedSubtractionsX.includes(Math.abs(playerX[i] - playerX[j]))) {
  //       selectedSubtractionsX.push(Math.abs(playerX[i] - playerX[j]))
  //     } else if (selectedSubtractionsX.includes(Math.abs(playerX[i] - playerX[j]))) {
  //       cellElements.forEach( element => element.removeEventListener("click", handleCellClick))
  //       statusDisplay.innerHTML = `Player 'X' Won The Game!`
  //       statusDisplay.style.color = "red"
  //       break
  //     }
  //   }
  // }
}

function handleRestartGame() {
  currentPlayer = Math.random() > 0.5 ? 'X' : 'O';
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameState2 = [['', '', ''],
                ['', '', ''],
                ['', '', '']];
  statusDisplay.innerHTML = currentPlayerTurn();
  statusDisplay.style.color = "black"
  cellElements.forEach(cell => cell.addEventListener('click', handleCellClick));
  document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
  playerO = []
  playerX = []
}

const cellElements = document.querySelectorAll('.cell');
  
cellElements.forEach(cell => cell.addEventListener('click', handleCellClick));

document
  .querySelector('.game--restart')
  .addEventListener('click', handleRestartGame);
