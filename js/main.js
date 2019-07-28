/*----- constants -----*/
const COLORS = {
  "0": "White",
  "1": "Red",
  "-1": "Blue"
};

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/

/*----- event listeners -----*/
document.querySelector("section.board").addEventListener("click", handleClick);

/*----- functions -----*/
init();

function init() {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  turn = 1;
  winner = null;
  render();
}

function render() {
  board.forEach(function(colArr, colIdx) {
    let marker = document.getElementById(`col${colIdx}`);
    marker.style.visibility = colArr.indexOf(0) === -1 ? "hidden" : "visible";
    colArr.forEach(function(cell, rowIdx) {
      let div = document.getElementById(`c${colIdx}r${rowIdx}`);
      div.style.backgroundColor = COLORS[cell];
    });
  });

  if (winner) {
    alert("Congrats! You won!");
  } else {
    MessageChannel.textContent = `${COLORS[turn]}'s turn!`;
  }
}

function handleClick(evt) {
  let idx = parseInt(evt.target.id.replace("col", ""));
  if (isNaN(idx) || winner) return;
  let colArr = board[idx];
  let rowIdx = colArr.indexOf(0);
  if (rowIdx === -1) return;
  colArr[rowIdx] = turn;
  turn = turn * -1;
  winner = getWinner();
  render();
}
