function startGame() {
    var size = document.getElementById("sizeInput").value;
    createBoard(size);
  }
  
  function createBoard(size) {
    var board = document.getElementById("board");
    board.innerHTML = "";
  
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-row", i);
        cell.setAttribute("data-col", j);
        cell.addEventListener("click", cellClick);
        board.appendChild(cell);
      }
      board.appendChild(document.createElement("br"));
    }
  }
  
  function cellClick(event) {
    var cell = event.target;
    var row = cell.getAttribute("data-row");
    var col = cell.getAttribute("data-col");
    console.log("Clicked on cell", row, col);
  }
  