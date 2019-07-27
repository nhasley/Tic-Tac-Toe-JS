/*----- constants -----*/
const COLORS = {
  "0": "White",
  "1": "Red",
  "-1": "Blue"
};

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
init();

function init() {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  turn = 1;
  winner = null;
  render();
}

/*----- event listeners -----*/

/*----- functions -----*/
