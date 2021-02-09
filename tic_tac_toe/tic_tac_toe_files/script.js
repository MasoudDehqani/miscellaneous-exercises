const statusDisplay = document.querySelector('.game--status');
const gameContainer = document.querySelector(".game--container")

let currentPlayer = Math.random() > 0.5 ? 'X' : 'O';
let gameState = ['', '', '', '', '', '', '', '', ''];
// let gameState2 = [['', '', ''],
//                   ['', '', ''],
//                   ['', '', '']];
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
  // console.log(gameState)
}

function handleWinner() {

  // gameStateObjects = gameState.map((item, index, array) => {
  //   if (index < 3) {
  //     return {[item]: index}
  //   } else if (index > 2 && index < 6) {
  //     return {[item]: index - 3}
  //   } else {
  //     return {[item]: index - 6}
  //   }
  // });

  // console.log(gameStateObjects);

  // let playerO = {0: 0, 1: 0, 2: 0}
  // let playerX = {0: 0, 1: 0, 2: 0}

  // gameStateObjects.forEach( item => {
  //   if (item["O"] !== undefined) {
  //     item["O"] === 0 && playerO['0']++
  //     item["O"] === 1 && playerO['1']++
  //     item["O"] === 2 && playerO['2']++
  //   }
  //   if (item["X"] !== undefined) {
  //     item["X"] === 0 && playerX['0']++
  //     item["X"] === 1 && playerX['1']++
  //     item["X"] === 2 && playerX['2']++
  //   }
  // })

  // for (let index in playerO) {
  //   if (playerO[index] === 3) {
  //     cellElements.forEach( element => element.removeEventListener("click", handleCellClick))
  //     statusDisplay.innerHTML = `Player 'O' Won The Game!`
  //     statusDisplay.style.color = "green"
  //   }
  // }

  // for (let index in playerX) {
  //   if (playerX[index] === 3) {
  //     cellElements.forEach( element => element.removeEventListener("click", handleCellClick))
  //     statusDisplay.innerHTML = `Player 'X' Won The Game!`
  //     statusDisplay.style.color = "red"
  //   }
  // }
  
  // console.log(playerO)
  // console.log(playerX)

  // gameState.forEach( (cell, index, array) => {
  //   if (index < 3) {
  //     cell === 'O' && (!playerO.includes(index) && playerO.push(index))
  //     cell === 'X' && (!playerX.includes(index) && playerX.push(index))
  //   } else if (index > 2 && index < 6) {
  //     cell === 'O' && (!playerO.includes(index - 3) && playerO.push(index - 3))
  //     cell === 'X' && (!playerX.includes(index - 3) && playerX.push(index - 3))
  //   } else {
  //     cell === 'O' && (!playerO.includes(index - 6) && playerO.push(index - 6))
  //     cell === 'X' && (!playerX.includes(index - 6) && playerX.push(index - 6))
  //   }
  //   if (cell === 'O') playerO.push(index)
  //   if (cell === 'X') playerX.push(index)
  // })
  
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
  playerO = []
  playerX = []

  let table = {
    row1: [],
    row2: [],
    row3: [],

    column1: [],
    column2: [],
    column3: [],

    cross1: [],
    cross2: []
  }

  // let row1 = [0, 1, 2]
  // let row2 = [3, 4, 5]
  // let row3 = [6, 7, 8]

  // let column1 = [0, 3, 6]
  // let column2 = [1, 4, 7]
  // let column3 = [2, 5, 8]

  // let cross1 = [0, 4, 8]
  // let cross2 = [2, 4, 6]

  gameState.forEach( (item, index) => {
    switch (index) {
      case 0:
        table.row1.push(item)
        table.column1.push(item)
        table.cross1.push(item)
        break;
      case 1:
        table.row1.push(item)
        table.column2.push(item)
        break;
      case 2:
        table.row1.push(item)
        table.column3.push(item)
        table.cross2.push(item)
        break;
      case 3:
        table.row2.push(item)
        table.column1.push(item)
        break;
      case 4:
        table.row2.push(item)
        table.column2.push(item)
        table.cross1.push(item)
        table.cross2.push(item)
        break;
      case 5:
        table.row2.push(item)
        table.column3.push(item)
        break;
      case 6:
        table.row3.push(item)
        table.column1.push(item)
        table.cross2.push(item)
        break;
      case 7:
        table.row3.push(item)
        table.column2.push(item)
        break;
      case 8:
        table.row3.push(item)
        table.column3.push(item)
        table.cross1.push(item)
        break;
      default:
        break
    }
  })

  for (let val in table) {
    if ((JSON.stringify(table[val]) === `["O","O","O"]`)) {
      cellElements.forEach( element => element.removeEventListener("click", handleCellClick))
      statusDisplay.innerHTML = `Player 'O' Won The Game!`
      statusDisplay.style.color = "green"
    }
    if (JSON.stringify(table[val]) === `["X","X","X"]`) {
      cellElements.forEach( element => element.removeEventListener("click", handleCellClick))
      statusDisplay.innerHTML = `Player 'X' Won The Game!`
      statusDisplay.style.color = "red"
    }
  }

  console.log(table)

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
  // gameState2 = [['', '', ''],
  //               ['', '', ''],
  //               ['', '', '']];
  statusDisplay.innerHTML = currentPlayerTurn();
  statusDisplay.style.color = "black"
  cellElements.forEach(cell => cell.addEventListener('click', handleCellClick));
  document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
  // playerO = []
  // playerX = []
}

const cellElements = document.querySelectorAll('.cell');
  
cellElements.forEach(cell => cell.addEventListener('click', handleCellClick));

document
  .querySelector('.game--restart')
  .addEventListener('click', handleRestartGame);
