let currentPlayer = 'X';
let boardSize = 3; 
let board = [];

function startGame() {
  boardSize = parseInt(document.getElementById("sizeInput").value);
  createBoard();
}

function createBoard() {
  board = [];
  let html = '';
  for (let i = 0; i < boardSize; i++) {
    board.push(Array(boardSize).fill(''));
    for (let j = 0; j < boardSize; j++) {
      html += `<div class="cell" data-row="${i}" data-col="${j}" onclick="cellClick(${i}, ${j})"></div>`;
    }
    html += '<br>';
  }
  document.getElementById("board").innerHTML = html;
  document.getElementById("status").innerHTML = `Player ${currentPlayer}'s turn`;
}

function cellClick(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.querySelector(`[data-row="${row}"][data-col="${col}"]`).innerText = currentPlayer;
    
    if (checkWin(row, col)) {
      document.getElementById("status").innerText = `Player ${currentPlayer} wins!`;
    } else if (checkDraw()) {
      document.getElementById("status").innerText = 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin(row, col) {
  const symbols = ['X', 'O'];
  for (let s of symbols) {
    let win = true;
    // Check row
    for (let i = 0; i < boardSize; i++) {
      if (board[row][i] !== s) {
        win = false;
        break;
      }
    }
    if (win) return true;
    
    // Check column
    win = true;
    for (let i = 0; i < boardSize; i++) {
      if (board[i][col] !== s) {
        win = false;
        break;
      }
    }
    if (win) return true;
    
    // Check diagonal
    win = true;
    for (let i = 0; i < boardSize; i++) {
      if (board[i][i] !== s) {
        win = false;
        break;
      }
    }
    if (win) return true;
    
    // Check reverse diagonal
    win = true;
    for (let i = 0; i < boardSize; i++) {
      if (board[i][boardSize - 1 - i] !== s) {
        win = false;
        break;
      }
    }
    if (win) return true;
  }
  return false;
}

function checkDraw() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}
