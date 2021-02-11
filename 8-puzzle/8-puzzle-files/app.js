const mainContainer = document.querySelector(".container")

const cells = document.querySelectorAll(".cell");

let tableState = []
let solvedPuzzle = [1, 2, 3, 4, 5, 6, 7, 8, '']
let moves = 0

function arrayTableInitialStateHandle() {
  for (let i = 0; i < 9; i++) {
    let randomNumber = Math.floor(Math.random() * 9) + 1
    while (tableState.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 9) + 1
    }
    tableState[i] = randomNumber
  }
  tableState.splice(tableState.indexOf(9), 1, '')
}

arrayTableInitialStateHandle()

function cellsStateMatch() {
  for (let i = 0; i < 9; i++) {
    tableState[i] !== 9 && (cells[i].innerHTML = tableState[i])
  }
}

cellsStateMatch()

let separatedTableState = []

function setTwoArrays() {
  tableState.forEach( (item, index) => {
    if (index === 0 || index === 3 || index === 6) separatedTableState.push([item, tableState[index + 1], tableState[index + 2]])
    index < 3 && separatedTableState.push([item, tableState[index + 3], tableState[index + 6]])
  })
}

setTwoArrays()


function cellsClickHandle(event) {
  let won = true;
  for (let i = 0; i < 9; i++) {
    if (tableState[i] !== solvedPuzzle[i]) {
      won = false
    }
  };
  if (won) {
    document.querySelector("#game_status").innerHTML = `You Won after ${moves} moves`;
    return
  };
  separatedTableState.forEach( arr => {
    if (arr.includes('') && arr.includes(+event.target.innerHTML) && Math.abs(arr.indexOf(+event.target.innerHTML) - arr.indexOf('')) === 1) {
      let eventIndex = tableState.indexOf(+event.target.innerHTML)
      tableState.splice(tableState.indexOf(''), 1, +event.target.innerHTML)
      tableState.splice(eventIndex, 1, '')
      cellsStateMatch()
      separatedTableState = []
      setTwoArrays()
      moves++
      document.querySelector("#moves").textContent = moves
    };
  })
}

cells.forEach(element => {
  element.addEventListener('click', cellsClickHandle);
});