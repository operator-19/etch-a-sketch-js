let color = 'red'

const populateBoard = (size) => {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');  // clear out any existing squares on the board
  squares.forEach((div) => div.remove()); // remove each square
  board.style.gridTemplateColumns = `repeat(${size},1fr)`
  board.style.gridTemplateRows = `repeat(${size},1fr)`

  let amount = size * size
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    // set event listener to each square we are adding
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = '#00cece'
    square.style.border = 'black 1px solid'

    // append
    board.appendChild(square);

  }
}

populateBoard(16)

const changeSize = (input) => {
  // validate the input
  if (input >= 2 && input <= 100) {
    populateBoard(input)
  } else {
    alert('grid has to be minmum of 2 and max of 100')
  }
}

function colorSquare() {
  if (color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color
  }
}

const changeColor = (choice) => {
  color = choice
}

const resetButton = () => {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');  // clear out any existing squares on the board
  squares.forEach((div) => div.style.backgroundColor = '#00cece'); // remove each square
}