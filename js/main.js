var msg = document.getElementById("msg"),
  sq = document.querySelectorAll(".sq"),
  turn = 0;

function winner() {
  var b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2"),
    b3 = document.getElementById("b3"),
    b4 = document.getElementById("b4"),
    b5 = document.getElementById("b5"),
    b6 = document.getElementById("b6"),
    b7 = document.getElementById("b7"),
    b8 = document.getElementById("b8"),
    b9 = document.getElementById("b9");

  function winB(winner) {
    if (b1 === b2 && b1 === b3) return winner(b1, b2, b3);

    if (b4 === b5 && b4 === b6) return winner(b4, b5, b6);

    if (b7 === b8 && b7 === b9) return winner(b7, b8, b9);

    if (b1 === b4 && b1 === b7) return winner(b1, b4, b7);

    if (b2 === b5 && b2 === b8) return winner(b2, b5, b8);

    if (b3 === b6 && b3 === b9) return winner(b3, b6, b9);

    if (b1 === b5 && b1 === b9) return winner(b1, b5, b9);

    if (b3 === b5 && b3 === b7) return winner(b3, b5, b7);
  }
}

for (var i = 0; i < sq.length; i++) {
  sq[i].onclick = function() {
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {
      if (turn % 2 === 0) {
        this.innerHTML = "X";
        msg.innerHTML = "O's Turn";
        winner();
        turn += 1;
      } else {
        this.innerHTML = "O";
        msg.innerHTML = "X's Turn";
        winner();
        turn += 1;
      }
    }
  };
}
// /*----- constants -----*/
// const COLORS = {
//   "0": "white",
//   "1": "purple",
//   "-1": "lime"
// };

// /*----- app's state (variables) -----*/

// let board, turn, winner;

// /*----- cached element references -----*/
// const msgEl = document.getElementById("msg");

// /*----- event listeners -----*/

// document.querySelector(".sq").addEventListener("click", handleClick);

// /*----- functions -----*/
// init();

// function init() {
//   board = [
//     [0, 0, 0], // column 1 (index 0)
//     [0, 0, 0], // column 1 (index 0)
//     [0, 0, 0] // column 1 (index 0)
//   ];
//   turn = 1;
//   winner = null; // 1, -1, null (no winner), 'T' (tie)
//   render();
// }

// function render() {
//   // Render the board
//   board.forEach(function(colArr, colIdx) {
//     // hide/show the column's marker depending if there are 0's or not
//     let marker = document.getElementById(`col${colIdx}`);
//     // <conditional exp> ? <truthy thing to return> : <falsey thing to return>;
//     // This is a ternary expression that replaces the if/else below it.
//     marker.style.visibility = colArr.indexOf(0) === -1 ? "hidden" : "visible";
//     // if (colArr.indexOf(0) === -1) {
//     //   marker.style.visibility = 'hidden';
//     // } else {
//     //   marker.style.visibility = 'visible';
//     // }
//     colArr.forEach(function(cell, rowIdx) {
//       let div = document.getElementById(`c${colIdx}r${rowIdx}`);
//       div.style.backgroundColor = COLORS[cell];
//     });
//   });
//   // Render the message
//   if (winner) {
//     if (winner === "T") {
//       msgEl.textContent = "It's a Tie!";
//     } else {
//       msgEl.innerHTML = `<span style="color:${COLORS[winner]}">${COLORS[
//         winner
//       ].toUpperCase()}</span> Wins!`;
//     }
//   } else {
//     msgEl.innerHTML = `<span style="color:${COLORS[turn]}">${COLORS[
//       turn
//     ].toUpperCase()}</span>'s Turn`;
//   }
// }

// function handleClick(evt) {
//   // get index of column's marker clicked
//   let idx = parseInt(evt.target.id.replace("sq", ""));
//   // make sure the MARKER was clicked
//   if (isNaN(idx) || winner) return;
//   board[idx] = turn;
//   // flip turns from 1 to -1; -1 to 1
//   turn *= -1;
//   // update the winner
//   winner = getWinner();
//   render();
// }

// function getWinner() {
//   // return the winner, 'T' or null
//   let winner = null;
//   // using a for loop because we want to stop looping if we find a winner
//   for (let colIdx = 0; colIdx < board.length; colIdx++) {
//     // check if any cells in the col lead to a winner
//     winner = checkCol(colIdx);
//     // done if winner is found, no reason to keep looking
//     if (winner) break;
//   }
//   return winner;
// }

// function checkCol(colIdx) {
//   let winner = null;
//   for (let rowIdx = 0; rowIdx < board[colIdx].length; rowIdx++) {
//     // using the logical OR operator (||) prevents the checks to the right
//     // from ever running if a winner is found.  For example, if checkUp returns
//     // a truthy value, checkRight and the checkDiag will never be called
//     winner =
//       checkUp(colIdx, rowIdx) ||
//       checkRight(colIdx, rowIdx) ||
//       checkDiag(colIdx, rowIdx, 1) ||
//       checkDiag(colIdx, rowIdx, -1);
//     if (winner) break;
//   }
//   return winner;
// }

// function checkUp(colIdx, rowIdx) {
//   // boundary check (can't check up if rowIdx is greater than 2)
//   if (rowIdx > 2) return null;
//   const colArr = board[colIdx];
//   // ternary expression deluxe!
//   return Math.abs(
//     colArr[rowIdx] +
//       colArr[rowIdx + 1] +
//       colArr[rowIdx + 2] +
//       colArr[rowIdx + 3]
//   ) === 4
//     ? colArr[rowIdx]
//     : null;
// }

// function checkRight(colIdx, rowIdx) {
//   if (colIdx > 3) return null;
//   return Math.abs(
//     board[colIdx][rowIdx] +
//       board[colIdx + 1][rowIdx] +
//       board[colIdx + 2][rowIdx] +
//       board[colIdx + 3][rowIdx]
//   ) === 4
//     ? board[colIdx][rowIdx]
//     : null;
// }

// // Notice the extra vertOffset parameter for determining whether checking up or down vertically
// function checkDiag(colIdx, rowIdx, vertOffset) {
//   // lot's of boundaries to check
//   if (
//     colIdx > 3 ||
//     (vertOffset > 0 && rowIdx > 2) ||
//     (vertOffset < 0 && rowIdx < 3)
//   )
//     return null;
//   return Math.abs(
//     board[colIdx][rowIdx] +
//       board[colIdx + 1][rowIdx + vertOffset] +
//       board[colIdx + 2][rowIdx + vertOffset * 2] +
//       board[colIdx + 3][rowIdx + vertOffset * 3]
//   ) === 4
//     ? board[colIdx][rowIdx]
//     : null;
// }
